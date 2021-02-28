
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
    /// Action 对象
    /// </summary>
    public class ActionModel
    {
        /// <summary>
        /// Id
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Area
        /// </summary>
        public string AreaName { get; set; }
        /// <summary>
        /// Controller
        /// </summary>
        public string ControllerName { get; set; }
        /// <summary>
        /// ActionName
        /// </summary>
        public string ActionName { get; set; }

        /// <summary>
        /// ActionFullName
        /// </summary>
        public string ActionFullName { get; set; }

        /// <summary>
        /// RouteTemplate
        /// </summary>
        public string RouteTemplate { get; set; }

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
        public List<CustomAttrModel> CustomAttrList { get; set; }

        /// <summary>
        /// 参数列表
        /// </summary>
        public List<ParamModel> InputParameters { get; set; }

        /// <summary>
        /// 返回参数
        /// </summary>
        public ParamModel ReturnParameter { get; set; }
    }
}
