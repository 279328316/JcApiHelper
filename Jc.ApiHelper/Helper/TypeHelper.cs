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
                typeName = typeName.Substring(0,typeName.IndexOf("`"));
                if(typeName== "Nullable")
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
        #endregion
    }
}
