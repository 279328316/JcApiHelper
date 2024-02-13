using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Security.AccessControl;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Jc.ApiHelper
{
    /// <summary>
    /// 参数对象
    /// </summary>
    public class PTypeModel
    {
        #region Properties

        /// <summary>
        /// 模块路径 类型:全路径 命名空间+所在类+属性名
        /// 例如:P:Jc.ApiHelper.Controllers.PTypeModel.Id
        /// </summary>
        public string Id { get; set; } = string.Empty;

        /// <summary>
        /// 类型名称
        /// </summary>
        public string TypeName { get; set; } = string.Empty;

        /// <summary>
        /// 类型全称
        /// </summary>
        [JsonIgnore]
        public string? TypeFullName { get { return SourceType.FullName; } }
        
        /// <summary>
        /// 是否为枚举类型
        /// </summary>
        public bool IsEnum { get { return SourceType.IsEnum; } }

        /// <summary>
        /// 是否为泛型
        /// </summary>
        public bool IsGeneric { get { return SourceType.IsGenericType; } }

        /// <summary>
        /// 是否可为空
        /// </summary>
        public bool IsNullable
        {
            get 
            {
                bool result = false;
                result = SourceType.CustomAttributes.Any(a => a.AttributeType.Name.Contains("NullableAttribute"));
                return result; 
            }
        }

        /// <summary>
        /// 是否为值类型
        /// </summary>
        public bool IsValueType
        { 
            get 
            {
                bool result = false;
                result = SourceType.IsValueType;
                return result; 
            } 
        }

        /// <summary>
        /// 是否实现了IEnumerable接口
        /// </summary>
        public bool IsIEnumerable { get; set; }

        /// <summary>
        /// 枚举Item类型Id
        /// </summary>
        public string EnumItemId { get; set; } = string.Empty;

        /// <summary>
        /// 枚举Item类型Name
        /// </summary>
        public string EnumItemName { get; set; } = string.Empty;

        /// <summary>
        /// 功能组件名称 dll名称
        /// </summary>
        [JsonIgnore]
        public string ModuleName { get { return SourceType.Module.Name; } }

        /// <summary>
        /// 注释,备注
        /// </summary>
        public string Summary { get; set; } = string.Empty;

        /// <summary>
        /// 属性列表
        /// </summary>
        public List<ParamModel> PiList { get; set; } = new List<ParamModel>();

        /// <summary>
        /// 类型信息对象
        /// </summary>
        [JsonIgnore]
        public Type SourceType { get; set; } = typeof(object);

        #endregion

        #region Ctor

        /// <summary>
        /// Ctor
        /// </summary>
        public PTypeModel()
        {
        }

        /// <summary>
        /// Ctor
        /// </summary>
        public PTypeModel(Type type)
        {
            SourceType = type;
            Id = TypeHelper.GetModuleMark(type);
            TypeName = TypeHelper.GetTypeName(type);
            //IsIEnumerable = type.GetInterface("IEnumerable") != null;
            //if (TypeName == "String")
            //{
            //}
            if (type.GetInterface("IEnumerable") != null && type.GenericTypeArguments.Length > 0)
            {   //枚举类型 并未所有的 IsIEnumerable都有GenericTypeArguments
                //String类型 实现了IEnumerable接口.但 type.GenericTypeArguments.Length = 0
                IsIEnumerable = true;
                EnumItemId = TypeHelper.GetModuleMark(type.GenericTypeArguments[0]);
                EnumItemName = TypeHelper.GetTypeName(type.GenericTypeArguments[0]);
            }
        }
        #endregion
    }

}
