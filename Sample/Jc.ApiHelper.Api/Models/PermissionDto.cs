using System;
using Jc.Core;

namespace Jc.ApiHelper.Api.Models
{
    /// <summary>
    /// 权限 Dto
    /// </summary>
    [Table(Name ="s_permission",DisplayText ="权限")]
    public class PermissionDto
    {
        #region Properties
        /// <summary>
        /// Id
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// PId
        /// </summary>
        public Guid? PId { get; set; }

        /// <summary>
        /// ItemCode
        /// </summary>
        public string Code { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 类型
        /// </summary>
        public string PType { get; set; }

        /// <summary>
        /// 序号
        /// </summary>
        public int? OrderNo { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        public string Note { get; set; }
        #endregion
    }
}
