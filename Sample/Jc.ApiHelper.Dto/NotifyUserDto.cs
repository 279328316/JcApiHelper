using System;

namespace Jc.ApiHelper.Dto
{
    /// <summary>
    /// NotifyUserModel
    /// </summary>
    public class NotifyUserDto
    {
        #region Properties

        /// <summary>
        /// Id
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// UserName
        /// </summary>
        public string? UserName { get; set; }

        /// <summary>
        /// NickName
        /// </summary>
        public string? NickName { get; set; }

        /// <summary>
        /// PhoneNo
        /// </summary>
        public string? PhoneNo { get; set; }

        /// <summary>
        /// Email
        /// </summary>
        public string? Email { get; set; }

        /// <summary>
        /// WechatOpenId
        /// </summary>
        public string? WechatOpenId { get; set; }
        #endregion
    }
}
