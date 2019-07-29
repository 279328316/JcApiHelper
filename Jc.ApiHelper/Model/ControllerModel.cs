using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Jc.ApiHelper
{
    /// <summary>
    /// Controller对象
    /// </summary>
    internal class ControllerModel
    {
        /// <summary>
        /// Id
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// AreaName
        /// </summary>
        public string AreaName { get; set; }

        /// <summary>
        /// ControllerName
        /// </summary>
        public string ControllerName { get; set; }

        /// <summary>
        /// FullName
        /// </summary>
        [JsonIgnore]
        public string FullName { get; set; }

        /// <summary>
        /// Assembly名称
        /// </summary>
        [JsonIgnore]
        public string AssemblyName { get; set; }

        /// <summary>
        /// 模块名称
        /// </summary>
        [JsonIgnore]
        public string ModuleName { get; set; }

        /// <summary>
        /// Summary
        /// </summary>
        public string Summary { get { return NoteModel?.Summary; } }

        /// <summary>
        /// 注释,备注
        /// </summary>
        [JsonIgnore]
        public MemberNoteModel NoteModel { get; set; }

        /// <summary>
        /// 特性参数列表
        /// </summary>
        public List<CustomerAttrModel> CustomerAttrList { get; set; }

        /// <summary>
        /// Action 列表
        /// </summary>
        public List<ActionModel> ActionList { get; set; } = new List<ActionModel>();
    }
}
