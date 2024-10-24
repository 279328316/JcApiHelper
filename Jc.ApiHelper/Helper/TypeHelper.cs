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
    internal static class TypeHelper
    {
        #region Methods

        /// <summary>
        /// 获取类型名称
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        internal static string GetTypeName(Type type)
        {
            string typeName = type.Name;
            if (type.GenericTypeArguments?.Length > 0)
            {
                //Nullable`1
                typeName = typeName.Substring(0, typeName.IndexOf("`"));
                if (typeName == "Nullable")
                {
                    typeName = type.GenericTypeArguments[0].Name + "?";
                }
                else
                {
                    typeName += "<";
                    for (int i = 0; i < type.GenericTypeArguments.Length; i++)
                    {
                        if (i == 0)
                        {
                            typeName += GetTypeName(type.GenericTypeArguments[i]);
                        }
                        else
                        {
                            typeName += "," + GetTypeName(type.GenericTypeArguments[i]);
                        }
                    }
                    typeName += ">";
                }
            }
            return typeName;
        }

        /// <summary>
        /// 获取模块标识
        /// </summary>
        /// <param name="type">类型</param>
        /// <returns></returns>
        internal static string GetModuleMark(Type type)
        {
            string moduleMark = type.ToString();

            switch (type.MemberType)
            {
                case MemberTypes.TypeInfo:
                    moduleMark = type.ToString();
                    break;
            }
            moduleMark = type.MemberType.ToString().Substring(0, 1) + ":" + moduleMark;
            return moduleMark;
        }

        /// <summary>
        /// 获取模块标识
        /// </summary>
        /// <param name="method">类型</param>
        /// <returns></returns>
        internal static string GetMethodModuleMark(MethodInfo method)
        {
            string moduleMark = null;

            string controllerName = method.DeclaringType.FullName;
            string methodName = method.Name;

            string parametersName = "";
            List<ParameterInfo> parameters = method.GetParameters().ToList();
            if (parameters.Count > 0)
            {
                parametersName = "(";
                for (int i = 0; i < parameters.Count; i++)
                {
                    if (i > 0)
                    {
                        parametersName += ",";
                    }
                    parametersName += GetParameterTypeName(parameters[i].ParameterType);
                }
                parametersName += ")";
            }
            moduleMark = $"M:{controllerName}.{methodName}{parametersName}";
            return moduleMark;
        }

        /// <summary>
        /// 获取参数类型名称
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        private static string GetParameterTypeName(Type type)
        {
            string typeName = type.FullName;
            if (type.GenericTypeArguments?.Length > 0)
            {
                //Nullable`1
                typeName = typeName.Substring(0, typeName.IndexOf("`"));
                typeName += "{";
                for (int i = 0; i < type.GenericTypeArguments.Length; i++)
                {
                    if (i > 0)
                    {
                        typeName += ",";
                    }
                    typeName += GetParameterTypeName(type.GenericTypeArguments[i]);
                }
                typeName += "}";
            }
            return typeName;
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