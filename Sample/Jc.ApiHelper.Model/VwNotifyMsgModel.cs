using System;
using Jc;

namespace Jc.ApiHelper.Model
{
    /// <summary>
    /// 通知消息 Model
    /// </summary>
    public class VwNotifyMsgModel
    {
        #region Properties
        /// <summary>
        /// Id
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// 通知Id
        /// </summary>
        public Guid NotifyId { get; set; }

        /// <summary>
        /// 通知用户组Id
        /// </summary>
        public Guid? NotifyGroupId { get; set; }

        /// <summary>
        /// 通知组名称
        /// </summary>
        public string NotifyGroupName { get; set; } = string.Empty;

        /// <summary>
        /// 通知Code
        /// </summary>
        public string NotifyCode { get; set; } = string.Empty;

        /// <summary>
        /// 通知类型
        /// </summary>
        public NotifyType NotifyType { get; set; }

        /// <summary>
        /// 即时类型
        /// </summary>
        public InTimeType InTimeType { get; set; }

        /// <summary>
        /// 通知日期
        /// </summary>
        public DateTime NotifyDate { get; set; }

        /// <summary>
        /// 平台Id
        /// </summary>
        public Guid? PlatformId { get; set; }

        /// <summary>
        /// 平台名称
        /// </summary>
        public string PlatformName { get; set; } = string.Empty;

        /// <summary>
        /// 机构Id
        /// </summary>
        public Guid? InstitutionId { get; set; }

        /// <summary>
        /// NotifyUserId 当通知类型为User时,使用UserId
        /// </summary>
        public Guid? NotifyUserId { get; set; }

        /// <summary>
        /// 机构名称
        /// </summary>
        public string InstitutionName { get; set; } = string.Empty;

        /// <summary>
        /// 消息内容
        /// </summary>
        public string NotifyData { get; set; } = string.Empty;

        /// <summary>
        /// 通知短信内容
        /// </summary>
        public string NotifySms { get; set; } = string.Empty;

        /// <summary>
        /// 通知Email内容
        /// </summary>
        public string NotifyEmail { get; set; } = string.Empty;

        /// <summary>
        /// 通知微信消息内容
        /// </summary>
        public string NotifyWechat { get; set; } = string.Empty;

        /// <summary>
        /// 通知用户列表
        /// </summary>
        public string NotifyUsers { get; set; } = string.Empty;

        /// <summary>
        /// 通知状态
        /// </summary>
        public NotifyState NotifyState { get; set; }

        /// <summary>
        /// 处理日期
        /// </summary>
        public DateTime HandleDate { get; set; }

        /// <summary>
        /// 描述
        /// </summary>
        public string Note { get; set; } = string.Empty;

        /// <summary>
        /// 添加日期
        /// </summary>
        public DateTime AddDate { get; set; }
        #endregion
    }
}
