using System;

namespace Jc.ApiHelper.Dto
{
    /// <summary>
    /// Action权限配置 Dto
    /// </summary>
    public class PermissionactionDto
    {
        #region Properties
        /// <summary>
        /// Id
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// Controller
        /// </summary>
        public string Controller { get; set; }

        /// <summary>
        /// Action
        /// </summary>
        public string Action { get; set; }

        /// <summary>
        /// Action说明
        /// </summary>
        public string ActionName { get; set; }

        /// <summary>
        /// PermissionId
        /// </summary>
        public Guid? PermissionId { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        public string Note { get; set; }
        #endregion
    }
}
