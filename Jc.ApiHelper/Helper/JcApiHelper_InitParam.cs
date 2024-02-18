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
    /// JcApiHelper
    /// 使用前请调用Init方法进行初始化
    /// </summary>
    public static partial class JcApiHelper
    {
        #region 构造参数Model

        /// <summary>
        /// 获取枚举字段属性列表
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        private static List<ParamModel> GetEnumPiList(Type type)
        {
            List<ParamModel> list = new List<ParamModel>();

            List<MemberInfo> memberList = type.GetMembers().ToList();
            //去掉枚举value__属性
            List<FieldInfo> fieldList = memberList
                .Where(a => a.MemberType == MemberTypes.Field)
                .Where(a => a.Name!= "value__")
                .Select(a => a as FieldInfo).ToList();

            if (fieldList?.Count > 0)
            {
                for (int i = 0; i < fieldList.Count; i++)
                {
                    ParamModel param = GetParam(fieldList[i], i);
                    list.Add(param);
                }
            }
            return list;
        }
        
        /// <summary>
        /// 获取类对象属性列表
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        private static List<ParamModel> GetClassObjPiList(Type type)
        {
            List<ParamModel> list = new List<ParamModel>();

            if (type.GenericTypeArguments.Length > 0)
            {
                #region 处理GenericTypeArguments>0情况
                if (type.GenericTypeArguments.Length > 1)
                {   //字典类型
                    for (int i = 0; i < type.GenericTypeArguments.Length; i++)
                    {
                        ParamModel param = GetParam(type.GenericTypeArguments[i], i);
                        list.Add(param);
                    }
                    return list;
                }
                else if (type.GenericTypeArguments.Length == 1)
                {   //单属性时,使用普通方法处理 PageResult<T>等格式
                    List<PropertyInfo> piList = type.GetMembers()
                        .Where(a => a.MemberType == MemberTypes.Property)
                        .Select(a => a as PropertyInfo).ToList();

                    if (piList?.Count > 0)
                    {
                        for (int i = 0; i < piList.Count; i++)
                        {
                            ParamModel param = GetParam(piList[i], i);
                            list.Add(param);
                        }
                    }
                }
                #endregion
            }
            else
            {
                List<MemberInfo> memberList = type.GetMembers().ToList();
                List<PropertyInfo> piList = memberList
                    .Where(a => a.MemberType == MemberTypes.Property)
                    .Select(a => a as PropertyInfo).ToList();
                if (piList?.Count > 0)
                {
                    for (int i = 0; i < piList.Count; i++)
                    {
                        ParamModel param = GetParam(piList[i], i);
                        list.Add(param);
                    }
                }
            }
            return list;
        }

        /// <summary>
        /// Ctor
        /// Attribute使用
        /// 根据AttributeData
        /// 构造CustomAttrModel
        /// </summary>
        private static CustomAttrModel GetCustomAttribute(CustomAttributeData customAttribute, int index = 0)
        {
            PTypeModel ptype = GetPType(customAttribute.AttributeType);
            CustomAttrModel model = new CustomAttrModel()
            {
                Name = ptype.TypeName.Replace("Attribute",""),
                PType = ptype,
                Position = index,
                ConstructorArgumentsList = customAttribute.ConstructorArguments.Select((a,i)=> { return GetParam(a, i); }).ToList(),
                NamedArgumentsList = customAttribute.NamedArguments.Select((a, i) => { return GetParam(a, i); }).ToList()
            };
            return model;
        }

        /// <summary>
        /// Ctor
        /// Attribute使用
        /// 根据AttributeData
        /// 构造CustomAttrModel
        /// </summary>
        private static CustomAttrModel GetCustomAttribute(Attribute customAttribute, int index = 0)
        {
            PTypeModel ptype = GetPType(customAttribute.GetType());
            CustomAttrModel model = new CustomAttrModel()
            {
                Name = ptype.TypeName.Replace("Attribute", ""),
                PType = ptype,
                Position = index,
                //ConstructorArgumentsList = customAttribute.ConstructorArguments.Select((a, i) => { return GetParam(a, i); }).ToList(),
                //NamedArgumentsList = customAttribute.NamedArguments.Select((a, i) => { return GetParam(a, i); }).ToList()
            };
            return model;
        }

        /// <summary>
        /// Ctor
        /// Attribute使用
        /// 根据AttributeData
        /// 构造CustomAttrModel
        /// </summary>
        private static CustomAttrModel GetCustomAttribute(Type customAttributeType, int index = 0)
        {
            PTypeModel ptype = GetPType(customAttributeType);
            CustomAttrModel model = new CustomAttrModel()
            {
                Name = ptype.TypeName.Replace("Attribute", ""),
                PType = ptype,
                Position = index,
                //ConstructorArgumentsList = customAttribute.ConstructorArguments.Select((a, i) => { return GetParam(a, i); }).ToList(),
                //NamedArgumentsList = customAttribute.NamedArguments.Select((a, i) => { return GetParam(a, i); }).ToList()
            };
            return model;
        }

        /// <summary>
        /// Ctor
        /// Attribute使用
        /// 根据Attribute TypedArgument 构造方法参数
        /// 构造constructorArguments参数ParamModel
        /// </summary>
        /// <param name="typedArgument"></param>
        /// <param name="index">序号</param>
        private static ParamModel GetParam(CustomAttributeTypedArgument typedArgument, int index = 0)
        {
            PTypeModel ptype = GetPType(typedArgument.ArgumentType);
            ParamModel param = new ParamModel()
            {
                Name = $"p{index + 1}",
                PType = ptype,
                ParamValue = typedArgument.Value,
                Position = index
            };
            return param;
        }

        /// <summary>
        /// Ctor
        /// Attribute使用
        /// 根据Attribute NamedArgument 命名参数
        /// 构造命名参数ParamModel
        /// </summary>
        /// <param name="namedArgument"></param>
        /// <param name="index">序号</param>
        private static ParamModel GetParam(CustomAttributeNamedArgument namedArgument, int index = 0)
        {
            PTypeModel ptype = GetPType(namedArgument.TypedValue.ArgumentType);
            ParamModel param = new ParamModel()
            {
                Name = $"p{index + 1}",
                PType = ptype,
                ParamValue = namedArgument.TypedValue.Value,
                Position = index
            };
            return param;
        }

        /// <summary>
        /// Ctor
        /// 根据参数信息 输入输出参数
        /// 构造ParamModel
        /// </summary>
        /// <param name="paramInfo">参数信息</param>
        private static ParamModel GetParam(ParameterInfo paramInfo)
        {
            PTypeModel ptype = GetPType(paramInfo.ParameterType);
            ParamModel param = new ParamModel()
            {
                Name = paramInfo.Name ?? string.Empty,
                PType = ptype,
                HasDefaultValue = paramInfo.HasDefaultValue,
                DefaultValue = paramInfo.DefaultValue,
                CustomAttrList = paramInfo.GetCustomAttributes().Select(a => GetCustomAttribute(a)).ToList(),
                Position = paramInfo.Position + 1
            };
            return param;
        }

        /// <summary>
        /// Ctor
        /// 根据数据类型 自定义参数名
        /// 构造ParamModel
        /// </summary>
        /// <param name="type">类型</param>
        /// <param name="index">序号</param>
        private static ParamModel GetParam(Type type,int index = 0)
        {
            PTypeModel ptype = GetPType(type);
            ParamModel param = new ParamModel()
            {
                Name = $"p{index + 1}",
                PType = ptype,
                Position = index + 1
            };
            return param;
        }

        /// <summary>
        /// Ctor
        /// 枚举属性使用
        /// 性构造ParamModel
        /// </summary>
        /// <param name="fi">FieldInfo</param>
        /// <param name="index"></param>
        private static ParamModel GetParam(FieldInfo fi, int index = 0)
        {
            PTypeModel ptype = GetPType(fi.FieldType);
            int? value = null;
            if (fi.FieldType.IsEnum)
            {
                try
                {
                    value = Convert.ToInt32(Enum.Parse(fi.FieldType, fi.Name));
                }
                catch
                {   //如转换失败,忽略不做处理
                }
            }

            string fiId = null;
            if (fi.DeclaringType != null)
            {
                fiId = $"F:{fi.DeclaringType.ToString()}.{fi.Name}";
            }

            ParamModel param = new ParamModel()
            {
                Name = fi.Name,
                Id = fiId,
                PType = ptype,
                ParamValue = value,
                CustomAttrList = fi.CustomAttributes.Select(a => GetCustomAttribute(a)).ToList(),
                Position = index + 1
            };

            if (fi.CustomAttributes.Count() > 0)
            {

            }
            return param;
        }

        /// <summary>
        /// Ctor
        /// 类属性使用
        /// 构造ParamModel
        /// </summary>
        /// <param name="pi">参数信息</param>
        /// <param name="index"></param>
        private static ParamModel GetParam(PropertyInfo pi, int index = 0)
        {
            PTypeModel ptype = GetPType(pi.PropertyType);

            string piId = null;
            if (pi.DeclaringType != null)
            {
                string declaringTypeName = pi.DeclaringType.ToString();
                if (declaringTypeName.IndexOf("`") != -1)
                {   //泛型属性Id结构如下:P:Jc.Core.Robj`1.Result
                    declaringTypeName = declaringTypeName.Substring(0, declaringTypeName.IndexOf("`") + 2);
                }
                piId = $"P:{declaringTypeName}.{pi.Name}";
            }

            ParamModel param = new ParamModel()
            {
                Name = pi.Name,
                Id = piId,
                PType = ptype,
                CustomAttrList = pi.CustomAttributes.Select(a => GetCustomAttribute(a)).ToList(),
                Position = index + 1
            };
            if(pi.CustomAttributes.Count()>0)
            {

            }
            return param;
        }

        /// <summary>
        /// 获取PType
        /// </summary>
        /// <param name="type"></param>
        private static PTypeModel GetPType(Type type)
        {
            PTypeModel ptype = new PTypeModel();
            string id = TypeHelper.GetModuleMark(type);
            if (PTypeDic.Keys.Contains(id))
            {
                ptype = PTypeDic[id];
            }
            else
            {
                ptype = new PTypeModel(type);
                PTypeDic.Add(ptype.Id, ptype);
                if (!IsIgnoreType(type))
                {   //忽略系统类型 忽略类型,不生成属性列表 自定义特性列表忽略
                    //ptype.CustomAttrList = GetCustomAttributes(type);
                    if (type.IsEnum)
                    {
                        ptype.PiList = GetEnumPiList(type);
                    }
                    else if(ptype.IsIEnumerable)
                    {   //实现了枚举方法 使用子类属性
                        if (!IsIgnoreType(type.GenericTypeArguments[0]))
                        {
                            PTypeModel enumPType = GetPType(type.GenericTypeArguments[0]);
                            ptype.PiList = enumPType.PiList;
                        }
                    }
                    else
                    {
                        ptype.PiList = GetClassObjPiList(type);
                    }
                }
            }
            return ptype;
        }

        /// <summary>
        /// 是否为忽略类型
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        private static bool IsIgnoreType(Type type)
        {
            bool result = false;
            try
            {
                string typeName = TypeHelper.GetTypeName(type);
                typeName = typeName.Replace("[]", "");  //获取数组 元类型

                //基类为ValueType的值类型 或Type,*Attribute
                result = type.BaseType?.Name == "ValueType" 
                            || typeName == "Type" 
                            || typeName.EndsWith("Attribute");
                
                if (!result)
                {   //排除 系统基本类型
                    result = Enum.IsDefined(typeof(TypeCode), typeName);
                }
            }
            catch (Exception ex)
            {
            }
            return result;
        }


        #endregion

    }
}
