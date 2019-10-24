using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Jc.ApiHelper
{
    /// <summary>
    /// 自定义特性Model
    /// </summary>
    public class CustomerAttrModel
    {
        #region Properties
        
        /// <summary>
        /// 参数名
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 类型Id
        /// </summary>
        public string TypeId { get { return PType.Id; } }

        /// <summary>
        /// 类型名称
        /// </summary>
        public string TypeName { get { return PType.TypeName; } }

        /// <summary>
        /// 包含属性List
        /// </summary>
        public bool? HasPiList { get { return PType.PiList?.Count>0; } }

        /// <summary>
        /// 备注说明
        /// </summary>
        public string Summary { get { return PType.Summary; } }

        /// <summary>
        /// 位置
        /// </summary>
        public int Position { get; set; }

        /// <summary>
        /// ConstructorArguments参数列表
        /// </summary>
        public List<ParamModel> ConstructorArgumentsList { get; set; }

        /// <summary>
        /// NamedArguments 参数列表
        /// </summary>
        public List<ParamModel> NamedArgumentsList { get; set; }

        /// <summary>
        /// 类型信息对象
        /// </summary>
        [JsonIgnore]
        public PTypeModel PType { get; set; }
        #endregion

    }
}
