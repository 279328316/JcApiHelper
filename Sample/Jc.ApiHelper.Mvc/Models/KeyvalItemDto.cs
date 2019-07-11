using System;
using Jc.Core;

namespace Jc.ApiHelper.Mvc.Models
{
    /// <summary>
    /// Keyvalue配置 Dto
    /// </summary>
    [Table(Name ="s_keyvalitem",DisplayText ="Keyvalue配置")]
    public class KeyvalItemDto
    {
        #region Properties
        /// <summary>
        /// Id
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// ItemCode
        /// </summary>
        public string Code { get; set; }

        /// <summary>
        /// PId
        /// </summary>
        public Guid? PId { get; set; }

        /// <summary>
        /// 类型 0根节点 1子Item
        /// </summary>
        public int? ItemType { get; set; }

        /// <summary>
        /// Item值
        /// </summary>
        public string ItemValue { get; set; }

        /// <summary>
        /// Item简写
        /// </summary>
        public string ItemShort { get; set; }

        /// <summary>
        /// Item显示文本
        /// </summary>
        public string ItemText { get; set; }

        /// <summary>
        /// 序号
        /// </summary>
        public int? OrderNo { get; set; }

        /// <summary>
        /// 是否可见
        /// </summary>
        public int? Visible { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        public string Note { get; set; }

        /// <summary>
        /// 添加人
        /// </summary>
        public Guid? AddUser { get; set; }

        /// <summary>
        /// 任务添加时间
        /// </summary>
        public DateTime? AddDate { get; set; }

        /// <summary>
        /// 修改人
        /// </summary>
        public Guid? LastUpdateUser { get; set; }

        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime? LastUpdateDate { get; set; }
        #endregion
    }
}
