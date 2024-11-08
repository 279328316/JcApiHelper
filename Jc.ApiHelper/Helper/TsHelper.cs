using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace Jc.ApiHelper
{
    /// <summary>
    /// TypeHelper
    /// </summary>
    internal static class TsHelper
    {
        #region Methods

        /// <summary>
        /// 获取TsModels
        /// </summary>
        public static List<TsModel> GetTsModels(ControllerModel controller)
        {
            List<TsModel> list = new List<TsModel>();
            for (int i = 0; i < controller.ActionList.Count; i++)
            {
                ActionModel action = controller.ActionList[i];
                #region 处理输入输出参数
                if (action.InputParameters != null && action.InputParameters.Count > 0)
                {
                    for (int j = 0; j < action.InputParameters.Count; j++)
                    {
                        if (action.InputParameters[j].PType.PiList != null && action.InputParameters[j].PType.PiList.Count > 0)
                        {
                            FillTsModelList(list, action.InputParameters[j].PType);
                        }
                    }
                }
                if (action.ReturnParameter.PType.PiList != null && action.ReturnParameter.PType.PiList.Count > 0)
                {
                    FillTsModelList(list, action.ReturnParameter.PType);
                }
                #endregion
            }
            return list;
        }

        /// <summary>
        /// 获取TsModels
        /// </summary>
        public static List<TsModel> GetTsModels(ActionModel action)
        {
            List<TsModel> list = new List<TsModel>();
            #region 处理输入输出参数
            if (action.InputParameters != null && action.InputParameters.Count > 0)
            {
                for (int i = 0; i < action.InputParameters.Count; i++)
                {
                    if (action.InputParameters[i].PType.PiList != null && action.InputParameters[i].PType.PiList.Count > 0)
                    {
                        FillTsModelList(list, action.InputParameters[i].PType);
                    }
                }
            }
            if (action.ReturnParameter.PType.PiList != null && action.ReturnParameter.PType.PiList.Count > 0)
            {
                FillTsModelList(list, action.ReturnParameter.PType);
            }
            #endregion

            // 按照名称和
            list = list.OrderBy(a => a.Name).ThenBy(a => a.PiList.Count).ToList();
            return list;
        }

        /// <summary>
        /// 获取TsModels
        /// </summary>
        public static List<TsModel> GetTsModels(PTypeModel ptype)
        {
            List<TsModel> list = new List<TsModel>();
            FillTsModelList(list, ptype);
            return list;
        }

        /// <summary>
        /// 获取TsModelList
        /// </summary>
        /// <param name="list"></param>
        /// <param name="ptype"></param>
        public static void FillTsModelList(List<TsModel> list, PTypeModel ptype)
        {
            ptype = JcApiHelper.GetPTypeModel(ptype.Id);    //读取Ptype注释内容

            if (list.Any(tsPtype => tsPtype.Id == ptype.Id))
            {   //已添加过,不再添加
                return;
            }

            if (ptype.IsIEnumerable)
            {   //枚举类型 添加其泛型类型
                PTypeModel enumItemPtype = JcApiHelper.GetPTypeModel(ptype.EnumItemId);    //读取Ptype注释内容
                if (enumItemPtype?.PiList?.Count > 0)
                {
                    FillTsModelList(list, enumItemPtype);
                }
                return;
            }

            TsModel tsPType = new TsModel()
            {
                Id = ptype.Id,
                Name = TypeHelper.GetTsType(ptype),
                SourceName = ptype.TypeName,
                IsEnum = ptype.IsEnum,
                Summary = ptype.Summary ?? string.Empty,
            };
            list.Add(tsPType);

            for (int i = 0; i < ptype.PiList?.Count; i++)
            {
                TsPi tsPi = new TsPi()
                {
                    Name = ptype.PiList[i].Name,
                    Summary = ptype.PiList[i].Summary ?? string.Empty,
                    TsType = TypeHelper.GetTsType(ptype.PiList[i].PType),
                    IsEnum = ptype.PiList[i].PType.IsEnum
                };
                tsPType.PiList.Add(tsPi);

                if (ptype.PiList[i].PType.PiList?.Count > 0)
                {
                    FillTsModelList(list, ptype.PiList[i].PType);
                }
            }
        }

        /// <summary>
        /// 根据类型获取 ts controller Name
        /// </summary>
        /// <param name="controllerName"></param>
        /// <returns></returns>
        public static string GetTsControllerName(string controllerName)
        {
            return controllerName.ToLower().Replace("controller", "");
        }

        /// <summary>
        /// 根据类型获取 ts model名称
        /// </summary>
        /// <param name="ptypeName"></param>
        /// <returns></returns>
        public static string GetTsModelTitle(string ptypeName)
        {
            return TypeHelper.GetTsType(ptypeName);
        }

        /// <summary>
        /// 根据类型获取 ts Service Title
        /// </summary>
        /// <param name="controllerName"></param>
        /// <returns></returns>
        public static string GetTsServiceTitle(string controllerName)
        {
            string tsFileName = $"{GetTsControllerName(controllerName)}.service";
            return tsFileName;
        }

        /// <summary>
        /// c#中的数据类型与TsType对照
        /// </summary>
        /// <param name="ptype"></param>
        /// <returns></returns>
        public static string GetTsType(PTypeModel ptype)
        {
            if (ptype == null)
            {
                return "";
            }
            string tsTypeStr = "";
            Type type = ptype.SourceType;

            if (type == typeof(Microsoft.AspNetCore.Mvc.IActionResult))
            {
                tsTypeStr = "any";
            }
            else if (ptype.IsIEnumerable)
            {   //列表类型特殊处理
                PTypeModel enumPType = JcApiHelper.GetPTypeModel(ptype.EnumItemId);
                tsTypeStr = $"{GetTsType(enumPType)}[]";
            }
            else
            {
                tsTypeStr = GetTsType(ptype.TypeName);
            }
            return tsTypeStr;
        }

        /// <summary>
        /// c#中的数据类型与TsType对照
        /// </summary>
        /// <param name="typeName">类型名称</param>
        /// <returns></returns>
        public static string GetTsType(string typeName)
        {
            string tsTypeStr = "";

            List<string> numberTypeList =
                ("int,int?,int16,int16?,int32,int32?,int64,int64?,decimal,decimal?," +
                "double,double?,byte,byte?,long,long?,single,single?").Split(',').ToList();

            List<string> boolTypeList = ("bool,bool?,boolean,boolean?").Split(',').ToList();
            List<string> stringTypeList =
                ("string,guid,guid?").Split(',').ToList();
            List<string> dateTimeTypeList =
                ("datetime,datetime?").Split(',').ToList();

            if (boolTypeList.Contains(typeName.ToLower()))
            {
                tsTypeStr = "boolean";
            }
            else if (stringTypeList.Contains(typeName.ToLower()))
            {
                tsTypeStr = "string";
            }
            else if (dateTimeTypeList.Contains(typeName.ToLower()))
            {
                tsTypeStr = "Date";
            }
            else if (numberTypeList.Contains(typeName.ToLower()))
            {
                tsTypeStr = "number";
            }
            else
            {
                tsTypeStr = typeName;
                #region 去掉Dto,Model命名
                if (tsTypeStr.StartsWith("Vw"))
                {   //参数类型名称 去掉开始Vw命名
                    tsTypeStr = tsTypeStr.Substring(2);
                }
                if (tsTypeStr.EndsWith("Dto"))
                {   //参数类型名称 去掉末尾Dto,Model命名
                    tsTypeStr = tsTypeStr.Substring(0, tsTypeStr.LastIndexOf("Dto"));
                }
                else if (tsTypeStr.EndsWith("Dto>"))
                {
                    tsTypeStr = tsTypeStr.Substring(0, tsTypeStr.LastIndexOf("Dto")) + ">";
                }
                else if (tsTypeStr.EndsWith("Model"))
                {
                    tsTypeStr = tsTypeStr.Substring(0, tsTypeStr.LastIndexOf("Model"));
                }
                else if (tsTypeStr.EndsWith("Model>"))
                {
                    tsTypeStr = tsTypeStr.Substring(0, tsTypeStr.LastIndexOf("Model")) + ">";
                }
                #endregion
            }
            return tsTypeStr;
        }

        #endregion
    }
}