using Jc.ApiHelper.Model;
using System;

namespace Jc.ApiHelper.Dto
{
    /// <summary>
    /// 角色 Dto
    /// </summary>
    public class RoleDto
    {
        #region Properties
        /// <summary>
        /// Id
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// 角色编码
        /// </summary>
        public string RoleCode { get; set; }

        /// <summary>
        /// 角色名称
        /// </summary>
        public string RoleName { get; set; }

        /// <summary>
        /// 角色类型 0超级系统管理员 1系统管理员 2用户
        /// </summary>
        public RoleType RoleType { get; set; }

        /// <summary>
        /// 序号
        /// </summary>
        public int? OrderNum { get; set; }

        /// <summary>
        /// 是否启用
        /// </summary>
        public int? IsEnable { get; set; }

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

        /// <summary>
        /// 备注
        /// </summary>
        public string Note { get; set; }
        #endregion
    }
}
