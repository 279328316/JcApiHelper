using System;
using Jc.Core;

namespace Jc.ApiHelper.Mvc.Models
{
    /// <summary>
    /// 角色权限配置 Dto
    /// </summary>
    [Table(Name ="s_rolesetting",DisplayText ="角色权限配置")]
    public class RoleSettingDto
    {
        #region Properties
        /// <summary>
        /// Id
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// 角色Id
        /// </summary>
        public Guid? RoleId { get; set; }

        /// <summary>
        /// 权限Id
        /// </summary>
        public Guid? PermId { get; set; }

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
