using System;
using System.Collections.Generic;
using Jc;
using Jc.ApiHelper.Model;

namespace Jc.ApiHelper.Dto
{
    /// <summary>
    /// NotifyMsgModel
    /// </summary>
    public class NotifyMsgDto:VwNotifyMsgModel
    {
        #region Properties

        /// <summary>
        /// 通知用户List
        /// </summary>
        public List<NotifyUserDto>? NotifyUserList { get; set; }

        #endregion
    }
}
