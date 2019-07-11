using System;
using Jc.Core;

namespace Jc.ApiHelper.Api.Models
{
    /// <summary>
    /// 系统配置 Dto
    /// </summary>
    [Table(Name ="s_globalsetting",DisplayText ="系统配置")]
    public class GlobalsettingDto
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
        /// 组Code
        /// </summary>
        public string GroupCode { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 值
        /// </summary>
        public string Value { get; set; }

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
