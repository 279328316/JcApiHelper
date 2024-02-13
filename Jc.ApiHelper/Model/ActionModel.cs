
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
        public string Id { get; set; } = string.Empty;

        /// <summary>
        /// Area
        /// </summary>
        public string AreaName { get; set; } = string.Empty;

        /// <summary>
        /// Controller
        /// </summary>
        public string ControllerName { get; set; } = string.Empty;

        /// <summary>
        /// ActionName
        /// </summary>
        public string ActionName { get; set; } = string.Empty;

        /// <summary>
        /// ActionFullName
        /// </summary>
        public string ActionFullName { get; set; } = string.Empty;

        /// <summary>
        /// Index
        /// </summary>
        public int Index { get; set; } = 0;

        /// <summary>
        /// RouteTemplate
        /// </summary>
        public string RouteTemplate { get; set; } = string.Empty;

        /// <summary>
        /// Summary
        /// </summary>
        public string Summary { get { return NoteModel.Summary; } }

        /// <summary>
        /// 注释,备注
        /// </summary>
        [JsonIgnore]
        public MemberNoteModel NoteModel { get; set; } = new MemberNoteModel();

        /// <summary>
        /// 特性参数列表
        /// </summary>
        public List<CustomAttrModel> CustomAttrList { get; set; } = new List<CustomAttrModel>();

        /// <summary>
        /// 参数列表
        /// </summary>
        public List<ParamModel> InputParameters { get; set; } = new List<ParamModel>();

        /// <summary>
        /// 返回参数
        /// </summary>
        public ParamModel ReturnParameter { get; set; } = new ParamModel();
    }
}
