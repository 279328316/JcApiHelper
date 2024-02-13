using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using static System.Collections.Specialized.BitVector32;

namespace Jc.ApiHelper
{
    internal class TsCreator
    {
        public TsCreator()
        {
        }

        /// <summary>
        /// 生成TsCode
        /// </summary>
        public TsResultModel GetTsResultModel(string itemId, string itemType = "")
        {
            TsResultModel result = null;
            if (itemType.ToLower() == TsCreateType.Controller.ToString().ToLower())
            {
                ControllerModel controller = JcApiHelper.GetController(itemId);
                if (controller == null)
                {
                    throw new Exception("无效的ItemId.");
                }
                result = GetTsResultModel(controller);
            }
            else if (itemType.ToLower() == TsCreateType.Action.ToString().ToLower())
            {
                ActionModel action = JcApiHelper.GetAction(itemId);
                if (action == null)
                {
                    throw new Exception("无效的ItemId.");
                }
                result = GetTsResultModel(action);
            }
            else
            {
                PTypeModel ptype = JcApiHelper.GetPTypeModel(itemId);
                if (ptype == null)
                {
                    throw new Exception("无效的ItemId.");
                }
                result = GetTsResultModel(ptype);
            }
            return result;
        }

        /// <summary>
        /// 生成TsCode
        /// </summary>
        public TsResultModel GetTsResultModel(ControllerModel controller)
        {
            TsResultModel result = new TsResultModel()
            {
                Id = controller.Id,
                Summary = controller.Summary
            };
            result.Name = (string.IsNullOrEmpty(controller.AreaName) ? "" : $"{controller.AreaName}/")
                                        + controller.ControllerName;

            result.TsModelList = new List<TsModel>();
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
                            FillTsModelList(result.TsModelList, action.InputParameters[j].PType);
                        }
                    }
                }
                if (action.ReturnParameter.PType.PiList != null && action.ReturnParameter.PType.PiList.Count > 0)
                {
                    FillTsModelList(result.TsModelList, action.ReturnParameter.PType);
                }
                #endregion
            }
            result.TsService = GetTsServiceModel(controller);
            return result;
        }

        /// <summary>
        /// 生成TsCode
        /// </summary>
        public TsResultModel GetTsResultModel(ActionModel action)
        {
            TsResultModel result = new TsResultModel()
            {
                Id = action.Id,
                Summary = action.Summary
            };
            result.Name = (string.IsNullOrEmpty(action.AreaName) ? "" : $"{action.AreaName}/")
                            + $"{action.ControllerName}/{action.ActionName}";
            result.TsModelList = new List<TsModel>();

            #region 处理输入输出参数
            if (action.InputParameters != null && action.InputParameters.Count > 0)
            {
                for (int i = 0; i < action.InputParameters.Count; i++)
                {
                    if (action.InputParameters[i].PType.PiList != null && action.InputParameters[i].PType.PiList.Count > 0)
                    {
                        FillTsModelList(result.TsModelList, action.InputParameters[i].PType);
                    }
                }
            }
            if (action.ReturnParameter.PType.PiList != null && action.ReturnParameter.PType.PiList.Count > 0)
            {
                FillTsModelList(result.TsModelList, action.ReturnParameter.PType);
            }
            #endregion

            result.TsService = GetTsServiceModel(action);

            return result;
        }

        /// <summary>
        /// 生成TsCode
        /// </summary>
        public TsResultModel GetTsResultModel(PTypeModel ptype)
        {
            TsResultModel result = new TsResultModel()
            {
                Id = ptype.Id,
                Name = ptype.TypeName,
                Summary = ptype.Summary
            };
            result.TsModelList = new List<TsModel>();
            FillTsModelList(result.TsModelList, ptype);
            return result;
        }

        /// <summary>
        /// 获取TsModelList
        /// </summary>
        /// <param name="list"></param>
        /// <param name="ptype"></param>
        private void FillTsModelList(List<TsModel> list, PTypeModel ptype)
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
                Name = GetTsType(ptype),
                Summary = ptype.Summary,
                TsModelCode = GetTsModelCode(ptype),
                PgQueryModelCode = GetTsQueryModelCode(ptype),
                PiList = new List<TsPi>()
            };
            list.Add(tsPType);

            for (int i = 0; i < ptype.PiList?.Count; i++)
            {
                TsPi tsPi = new TsPi()
                {
                    Name = ptype.PiList[i].Name,
                    Summary = ptype.PiList[i].Summary,
                    TsType = GetTsType(ptype.PiList[i].PType)
                };
                tsPType.PiList.Add(tsPi);

                if (ptype.PiList[i].PType.PiList?.Count > 0)
                {
                    FillTsModelList(list, ptype.PiList[i].PType);
                }
            }
        }

        /// <summary>
        /// 生成TsCode
        /// </summary>
        private string GetTsModelCode(PTypeModel ptype)
        {
            StringBuilder strBuilder = new StringBuilder();
            string tsType = GetTsType(ptype);
            strBuilder.AppendLine($"/*{(string.IsNullOrEmpty(ptype.Summary) ? tsType : ptype.Summary)}*/");
            strBuilder.AppendLine("export class " + tsType + " {");
            for (int i = 0; i < ptype.PiList.Count; i++)
            {
                strBuilder.AppendLine($"  { FirstToLower(ptype.PiList[i].Name)}: {GetTsType(ptype.PiList[i].PType)};   // " + ptype.PiList[i].Summary);
            }
            strBuilder.AppendLine("}");
            strBuilder.AppendLine();
            return strBuilder.ToString();
        }

        /// <summary>
        /// 获取TsQueryModel
        /// </summary>
        private string GetTsQueryModelCode(PTypeModel ptype)
        {
            if(ptype.IsEnum || ptype.IsGeneric)
            {   //排除枚举和泛型类型
                return "";
            }
            string tsType = GetTsType(ptype);
            StringBuilder strBuilder = new StringBuilder();
            strBuilder.AppendLine($"/*{(string.IsNullOrEmpty(ptype.Summary) ? tsType : ptype.Summary)} QueryObj 分页查询对象*/");
            strBuilder.AppendLine($"export class { tsType }QueryObj extends { tsType } implements IPage {{");
            strBuilder.AppendLine("  pageIndex: number;");
            strBuilder.AppendLine("  pageSize: number;");
            strBuilder.AppendLine("  sort: string;");
            strBuilder.AppendLine("  order: string;");
            strBuilder.AppendLine("  constructor() {");
            strBuilder.AppendLine("    super();");
            strBuilder.AppendLine("  }");
            strBuilder.AppendLine("}");
            strBuilder.AppendLine();
            return strBuilder.ToString();
        }


        /// <summary>
        /// 生成TsService
        /// </summary>
        private TsServiceModel GetTsServiceModel(ControllerModel controller)
        {
            TsServiceModel tsService = new TsServiceModel();
            StringBuilder jcCodeBuilder = new StringBuilder();
            StringBuilder commonCodeBuilder = new StringBuilder();
            StringBuilder headerCodeBuilder = new StringBuilder();
            headerCodeBuilder.AppendLine("import {Injectable} from '@angular/core';");
            headerCodeBuilder.AppendLine("import {Observable} from 'rxjs/Observable';");
            headerCodeBuilder.AppendLine();

            jcCodeBuilder.AppendLine("import {Util} from '@core/util'");
            jcCodeBuilder.AppendLine();
            jcCodeBuilder.AppendLine("@Injectable()");
            jcCodeBuilder.AppendLine($"export class {controller.ControllerName}Service {{");
            jcCodeBuilder.AppendLine();

            commonCodeBuilder.AppendLine("import {HttpClient} from '@angular/common/http';");
            commonCodeBuilder.AppendLine();
            commonCodeBuilder.AppendLine("@Injectable()");
            commonCodeBuilder.AppendLine($"export class {controller.ControllerName} {{");
            commonCodeBuilder.AppendLine();
            commonCodeBuilder.AppendLine("  constructor(private http: HttpClient) {");
            commonCodeBuilder.AppendLine("  }");
            commonCodeBuilder.AppendLine();

            for (int i = 0; i < controller.ActionList.Count; i++)
            {
                ActionModel action = controller.ActionList[i];
                jcCodeBuilder.AppendLine(GetTsServiceJcCode(action));
                commonCodeBuilder.AppendLine(GetTsServiceCommonCode(action));
            }
            jcCodeBuilder.AppendLine("}");
            commonCodeBuilder.AppendLine("}");

            tsService.JcCode = headerCodeBuilder.ToString() + jcCodeBuilder.ToString();
            tsService.CommonCode = headerCodeBuilder.ToString() + commonCodeBuilder.ToString();
            tsService.ApiCode = GetControllerApiCode(controller);
            return tsService;
        }

        /// <summary>
        /// 获取Controller .Net Api Code
        /// </summary>
        /// <param name="controller"></param>
        /// <returns></returns>
        private string GetControllerApiCode(ControllerModel controller)
        {
            StringBuilder codeBuilder = new StringBuilder();
            codeBuilder.AppendLine("using System;");
            codeBuilder.AppendLine("using System.Linq;");
            codeBuilder.AppendLine("using System.Collections.Generic;");
            codeBuilder.AppendLine("using Jc;");
            codeBuilder.AppendLine();

            codeBuilder.AppendLine($"namespace {controller.ModuleName.Replace(".dll","")}.ApiHelper");
            codeBuilder.AppendLine("{");

            string controllerSummary = "";
            #region 设置ControllerSummary
            if (!string.IsNullOrEmpty(controller.Summary))
            {   // 读取的Summary中,多行时,存在较长空格,需要替换处理.
                List<string> summaryList = new List<string>();
                if (controller.Summary.Contains("\r\n"))
                {
                    summaryList = controller.Summary.Split("\r\n").Select(a => a.Trim()).ToList();
                }
                else if (controller.Summary.Contains("\n"))
                {
                    summaryList = controller.Summary.Split("\n").Select(a => a.Trim()).ToList();
                }
                else
                {
                    summaryList.Add(controller.Summary);
                }
                foreach (string summary in summaryList)
                {
                    controllerSummary += $"    /// {summary}\r\n";
                }
            }
            else
            {
                controllerSummary = $"    /// {controller.ControllerName}Api\r\n";
            }
            #endregion

            codeBuilder.AppendLine(
                $"    /// <summary>\r\n" +
                $"{controllerSummary}" +
                $"    /// </summary>");

            codeBuilder.AppendLine($"    public class {controller.ControllerName}Api");
            codeBuilder.AppendLine("    {");
            for (int i = 0; i < controller.ActionList.Count; i++)
            {
                ActionModel action = controller.ActionList[i];
                string actionCode = GetClientApiCode(action);
                codeBuilder.AppendLine(actionCode);
            }
            codeBuilder.AppendLine("    }");
            codeBuilder.AppendLine("}");
            string code = codeBuilder.ToString();
            return code;
        }

        #region 获取Ts Service CodeModel
        /// <summary>
        /// 生成TsService
        /// </summary>
        private TsServiceModel GetTsServiceModel(ActionModel action)
        {
            TsServiceModel tsService = new TsServiceModel()
            {
                JcCode = GetTsServiceJcCode(action),
                CommonCode = GetTsServiceCommonCode(action),
                ApiCode = GetClientApiCode(action),
            };
            return tsService;
        }

        /// <summary>
        /// 生成TsService
        /// </summary>
        private string GetTsServiceJcCode(ActionModel action)
        {
            StringBuilder strBuilder = new StringBuilder();
            string actionRouteName = (string.IsNullOrEmpty(action.AreaName) ? "" : $"{action.AreaName}/")
                                        + $"{action.ControllerName}/{action.ActionName}";
            string inputParamStr = "";
            string ajaxParamStr = "";
            string returnParamTypeStr = "";
            if (action.InputParameters != null && action.InputParameters.Count > 0)
            {
                if (action.InputParameters.Count == 1 && action.InputParameters[0].HasPiList == true)
                {
                    inputParamStr = $"{action.InputParameters[0].Name}:{GetTsType(action.InputParameters[0].PType)}";
                    ajaxParamStr = $",{action.InputParameters[0].Name}";
                }
                else if (action.InputParameters.Any(param=>param.Name.ToLower().Contains("index"))
                         && action.InputParameters.Any(param => param.Name.ToLower().Contains("size")))
                {   //处理分页查询方法
                    string queryObjTypeName = "PgQueryObj";
                    if (action.ReturnParameter.PType.PiList?.Count > 0)
                    {
                        for (int i = 0; i < action.ReturnParameter.PType.PiList.Count; i++)
                        {
                            if (action.ReturnParameter.PType.PiList[i].IsIEnumerable)
                            {
                                PTypeModel enumPType = JcApiHelper.GetPTypeModel(action.ReturnParameter.PType.PiList[i].EnumItemId);
                                queryObjTypeName = GetTsType(enumPType) + "QueryObj";
                                break;
                            }
                        }
                    }
                    inputParamStr = $"{FirstToLower(queryObjTypeName)}: {queryObjTypeName}";
                    ajaxParamStr = $",{FirstToLower(queryObjTypeName)}";
                }
                else
                {
                    ajaxParamStr = ",{";
                    for (int i = 0; i < action.InputParameters.Count; i++)
                    {
                        if (i > 0)
                        {
                            inputParamStr += ",";
                            ajaxParamStr += ",";
                        }
                        inputParamStr += $"{action.InputParameters[i].Name}: {GetTsType(action.InputParameters[i].PType)}";
                        ajaxParamStr += $"{action.InputParameters[i].Name}: {action.InputParameters[i].Name}";
                    }
                    ajaxParamStr += "}";
                }
            }
            returnParamTypeStr = GetTsType(action.ReturnParameter.PType);

            strBuilder.AppendLine($"  /*{(string.IsNullOrEmpty(action.Summary) ? action.ActionName : action.Summary)}*/");
            strBuilder.AppendLine($"  public { FirstToLower(action.ActionName)}({inputParamStr}): Observable<{returnParamTypeStr}>{{");
            strBuilder.AppendLine($"    return Util.ajax('{actionRouteName}'{ajaxParamStr});");
            strBuilder.AppendLine("  }");
            return strBuilder.ToString();
        }

        /// <summary>
        /// 生成TsService
        /// </summary>
        private string GetTsServiceCommonCode(ActionModel action)
        {
            StringBuilder strBuilder = new StringBuilder();
            string actionRouteName = (string.IsNullOrEmpty(action.AreaName) ? "" : $"{action.AreaName}/")
                                        + $"{action.ControllerName}/{action.ActionName}";
            string inputParamStr = "";
            string ajaxParamStr = "";
            string returnParamTypeStr = "";
            if (action.InputParameters != null && action.InputParameters.Count > 0)
            {
                if (action.InputParameters.Count == 1 && action.InputParameters[0].HasPiList == true)
                {
                    inputParamStr = $"{action.InputParameters[0].Name}:{GetTsType(action.InputParameters[0].PType)}";
                    ajaxParamStr = $",{action.InputParameters[0].Name}";
                }
                else if (action.InputParameters.Any(param => param.Name.ToLower().Contains("index"))
                         && action.InputParameters.Any(param => param.Name.ToLower().Contains("size")))
                {   //处理分页查询方法
                    string queryObjTypeName = "PgQueryObj";
                    if (action.ReturnParameter.PType.PiList?.Count > 0)
                    {
                        for (int i = 0; i < action.ReturnParameter.PType.PiList.Count; i++)
                        {
                            if (action.ReturnParameter.PType.PiList[i].IsIEnumerable)
                            {
                                PTypeModel enumPType = JcApiHelper.GetPTypeModel(action.ReturnParameter.PType.PiList[i].EnumItemId);
                                queryObjTypeName = GetTsType(enumPType) + "QueryObj";
                                break;
                            }
                        }
                    }
                    inputParamStr = $"{FirstToLower(queryObjTypeName)}: {queryObjTypeName}";
                    ajaxParamStr = $",{FirstToLower(queryObjTypeName)}";
                }
                else
                {
                    ajaxParamStr = ",{";
                    for (int i = 0; i < action.InputParameters.Count; i++)
                    {
                        if (i > 0)
                        {
                            inputParamStr += ",";
                            ajaxParamStr += ",";
                        }
                        inputParamStr += $"{action.InputParameters[i].Name}: {GetTsType(action.InputParameters[i].PType)}";
                        ajaxParamStr += $"{action.InputParameters[i].Name}: {action.InputParameters[i].Name}";
                    }
                    ajaxParamStr += "}";
                }
            }
            returnParamTypeStr = GetTsType(action.ReturnParameter.PType);

            strBuilder.AppendLine($"  /*{(string.IsNullOrEmpty(action.Summary) ? action.ActionName : action.Summary)}*/");
            strBuilder.AppendLine($"  public { FirstToLower(action.ActionName)}({inputParamStr}): Observable<{returnParamTypeStr}>{{");
            strBuilder.AppendLine($"    return this.http.post('{actionRouteName}'{ajaxParamStr});");
            strBuilder.AppendLine("  }");
            return strBuilder.ToString();
        }

        /// <summary>
        /// 生成C# Api 调用接口
        /// </summary>
        private string GetClientApiCode(ActionModel action)
        {
            StringBuilder strBuilder = new StringBuilder();
            string actionRouteName = (string.IsNullOrEmpty(action.AreaName) ? "" : $"{action.AreaName}/")
                                        + $"{action.ControllerName}/{action.ActionName}";
            string inputParamName = "";
            string inputParamStr = "";
            string ajaxParamStr = "";
            string returnParamTypeStr = "";
            string requestType = "HttpContentType.Form";
            string needLogin = "true";
            List<ParamModel> inputParams = action.InputParameters;

            #region 处理输入参数
            if (inputParams.Count > 0)
            {
                if (inputParams.Count == 1 && !inputParams[0].PType.IsValueType
                    && inputParams[0].PType.TypeName.ToLower() != "string")
                {   // 如果输入参数为引用类型,直接使用对象作为请求参数
                    ParamModel inputParam = inputParams[0];
                    inputParamStr = $"{GetNetType(inputParam)} {inputParam.Name}";
                    inputParamName = inputParam.Name;
                    if (inputParam.IsIEnumerable)
                    {   // 如果参数类型为可枚举类型,设置请求类型为Json格式
                        requestType = "HttpContentType.Json";
                    }
                }
                else
                {
                    inputParamName = "data";
                    ajaxParamStr = $"Dictionary<string, object?> {inputParamName} = new Dictionary<string, object?>()";
                    ajaxParamStr += "\r\n            {\r\n";
                    for (int i = 0; i < action.InputParameters.Count; i++)
                    {
                        if (i > 0)
                        {
                            inputParamStr += ", ";
                            ajaxParamStr += "\r\n";
                        }
                        inputParamStr += $"{GetNetType(action.InputParameters[i])} {action.InputParameters[i].Name}";
                        if (action.InputParameters[i].HasDefaultValue)
                        {
                            string? defaultValue = action.InputParameters[i].DefaultValue == null ? "null" : action.InputParameters[i].DefaultValue!.ToString();
                            inputParamStr += $" = {defaultValue}";
                        }
                        ajaxParamStr += $"                {{\"{action.InputParameters[i].Name}\", {action.InputParameters[i].Name}}},";
                    }
                    ajaxParamStr += "\r\n            }";
                    if (action.InputParameters.Any(param => param.Name.ToLower().Contains("index"))
                             && action.InputParameters.Any(param => param.Name.ToLower().Contains("size")))
                    {   //处理分页查询方法                    
                        inputParamStr += $", Dictionary<string,object?>? queryParams = null";
                        ajaxParamStr += $"\r\n            if (queryParams != null)\r\n" +
                                        $"            {{\r\n" +
                                        $"                data = data.Concat(queryParams).ToDictionary(kv => kv.Key, kv => kv.Value);\r\n" +
                                        $"            }}";
                    }
                }
            }
            else
            {
                inputParamName = "null";
            }
            #endregion

            returnParamTypeStr = GetNetType(action.ReturnParameter);
            if(action.CustomAttrList.Any(a=>a.Name == "AllowAnonymous"))
            {
                needLogin = "false";
            }
            string actionSummary = "";
            #region 设置ActionSummary
            if (!string.IsNullOrEmpty(action.Summary))
            {   // 读取的Summary中,多行时,存在较长空格,需要替换处理.
                List<string> summaryList = new List<string>();
                if (action.Summary.Contains("\r\n"))
                {
                    summaryList = action.Summary.Split("\r\n").Select(a => a.Trim()).ToList();
                }
                else if (action.Summary.Contains("\n"))
                {
                    summaryList = action.Summary.Split("\n").Select(a => a.Trim()).ToList();
                }
                else
                {
                    summaryList.Add(action.Summary);
                }
                foreach (string summary in summaryList)
                {
                    actionSummary += $"        /// {summary}\r\n";
                }
            }
            else
            {
                actionSummary = $"        /// {action.ActionName}\r\n";
            }
            #endregion

            strBuilder.AppendLine(
                $"        /// <summary>\r\n" +
                $"{actionSummary}" +
                $"        /// </summary>");
            strBuilder.AppendLine($"        public static {returnParamTypeStr} {action.ActionName}({inputParamStr})");
            strBuilder.AppendLine("        {");
            if (!string.IsNullOrWhiteSpace(ajaxParamStr))
            {
                strBuilder.AppendLine($"            {ajaxParamStr}");
            }
            strBuilder.AppendLine($"            {returnParamTypeStr} result = ApiHelper.Post<{returnParamTypeStr}>(\"{actionRouteName}\", {inputParamName}, {requestType}, {needLogin});");
            strBuilder.AppendLine($"            return result;");
            strBuilder.AppendLine("        }");
            return strBuilder.ToString();
        }

        #endregion

        #region Other Methods
        /// <summary>
        /// 首字母小写
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        private string FirstToLower(string str)
        {
            if (!string.IsNullOrEmpty(str))
            {
                str = str.Substring(0, 1).ToLower() + str.Substring(1);
            }
            return str;
        }

        /// <summary>
        /// c#中的数据类型与TsType对照
        /// </summary>
        /// <param name="ptype"></param>
        /// <returns></returns>
        private string GetTsType(PTypeModel ptype)
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
        private string GetTsType(string typeName)
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



        /// <summary>
        /// c#中的数据类型
        /// </summary>
        /// <param name="paramModel"></param>
        /// <returns></returns>
        private string GetNetType(ParamModel paramModel)
        {
            PTypeModel ptype = paramModel.PType;
            if (ptype == null)
            {
                return "void";
            }
            string netTypeStr = "";
            Type type = ptype.SourceType;

            if (type == typeof(IActionResult))
            {
                netTypeStr = "object";
            }
            else if (ptype.IsIEnumerable)
            {   //列表类型特殊处理
                PTypeModel enumPType = JcApiHelper.GetPTypeModel(ptype.EnumItemId);
                netTypeStr = $"List<{GetNetType(enumPType.TypeName)}>";
            }
            else
            {
                netTypeStr = GetNetType(ptype.TypeName);
            }
            return netTypeStr;
        }

        /// <summary>
        /// c#中的数据类型与TsType对照
        /// </summary>
        /// <param name="typeName">类型名称</param>
        /// <returns></returns>
        private string GetNetType(string typeName)
        {
            string netTypeStr = typeName;

            List<string> numberTypeList =
                ("int,int?,int16,int16?,int32,int32?,int64,int64?,decimal,decimal?," +
                "double,double?,byte,byte?,long,long?,single,single?").Split(',').ToList();

            List<string> boolTypeList = ("bool,bool?,boolean,boolean?").Split(',').ToList();

            List<string> stringTypeList =
                ("string,string?").Split(',').ToList();
            List<string> voidTypeList =
                ("void").Split(',').ToList();
            List<string> objectTypeList =
                ("object,object?").Split(',').ToList();
            List<string> guidTypeList =
                ("guid,guid?").Split(',').ToList();
            List<string> dateTimeTypeList =
                ("datetime,datetime?").Split(',').ToList();

            if (numberTypeList.Contains(typeName.ToLower()))
            {
                if (typeName.Contains("Int32"))
                {
                    netTypeStr = typeName.ToLower().Replace("int32", "int");
                }
                else if (typeName.Contains("Int64"))
                {
                    netTypeStr = typeName.ToLower().Replace("int64", "long");
                }
                else
                {
                    netTypeStr = typeName.ToLower();
                }
            }
            else if (stringTypeList.Contains(typeName.ToLower()))
            {
                netTypeStr = typeName.ToLower();
            }
            else if (voidTypeList.Contains(typeName.ToLower()))
            {
                netTypeStr = typeName.ToLower();
            }
            else if (objectTypeList.Contains(typeName.ToLower()))
            {
                netTypeStr = typeName.ToLower();
            }
            else if (boolTypeList.Contains(typeName.ToLower()))
            {
                netTypeStr = "bool";
            }
            else
            {
                netTypeStr = typeName;
            }
            return netTypeStr;
        }

        #endregion
    }
}
