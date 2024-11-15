using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Jc;

namespace Jc.ApiHelper.Model
{
    /// <summary>
    /// 通知对象类型
    /// </summary>
    [DisplayName("通知对象类型")]
    public enum NotifyObjType
    {
        /// <summary>
        /// 用户
        /// </summary>
        [DisplayName("用户")]
        User = 1,
        /// <summary>
        /// 角色类型
        /// </summary>
        [DisplayName("角色类型")]
        RoleType = 2,
        /// <summary>
        /// 角色组
        /// </summary>
        [DisplayName("角色组")]
        RoleGroup = 3,
    }

    /// <summary>
    /// Mns消息类型
    /// </summary>
    [DisplayName("Mns消息类型")]
    public enum MnsMsgType
    {
        /// <summary>
        /// 默认消息类型
        /// </summary>
        [DisplayName("默认消息类型")]
        Default = 0,
        /// <summary>
        /// 通知消息
        /// </summary>
        [DisplayName("通知消息")]
        NotifyMsg = 101,
    }

    /// <summary>
    /// Mns消息类型
    /// </summary>
    [DisplayName("Mns消息类型")]
    public enum MnsMsgState
    {
        /// <summary>
        /// 待处理
        /// </summary>
        [DisplayName("待处理")]
        Waitting = 0,
        /// <summary>
        /// 已处理
        /// </summary>
        [DisplayName("已处理")]
        Handled = 1,
        /// <summary>
        /// 错误
        /// </summary>
        [DisplayName("错误")]
        Error = 2
    }

    /// <summary>
    /// 系统通知Type
    /// 使用Code
    /// </summary>
    [DisplayName("系统通知")]
    public enum SystemNotify
    {
        /// <summary>
        /// 任务执行失败
        /// </summary>
        [DisplayName("任务执行失败")]
        TaskRunError,
    }

    /// <summary>
    /// 通知参数类型
    /// </summary>
    [DisplayName("通知参数类型")]
    public enum NotifyParamType
    {
        /// <summary>
        /// 字符串
        /// </summary>
        [DisplayName("String")]
        String = 1,
        /// <summary>
        /// 日期时间
        /// </summary>
        [DisplayName("DateTime")]
        DateTime = 2,
        /// <summary>
        /// 数字
        /// </summary>
        [DisplayName("Number")]
        Number = 3
    }

    /// <summary>
    /// 通知类型
    /// </summary>
    [DisplayName("NotifyType")]
    public enum NotifyType
    {
        /// <summary>
        /// 系统通知
        /// </summary>
        [DisplayName("系统")]
        System = 1,
        /// <summary>
        /// 平台,所有平台运营人员
        /// </summary>
        [DisplayName("平台")]
        Platform = 2,
        /// <summary>
        /// 机构,所有机构人员
        /// </summary>
        [DisplayName("机构")]
        Institution = 3,
        /// <summary>
        /// 平台用户
        /// </summary>
        [DisplayName("平台用户")]
        PlatformUser = 4,
        /// <summary>
        /// 机构用户
        /// </summary>
        [DisplayName("机构用户")]
        InstitutionUser = 5,
        /// <summary>
        /// 用户
        /// </summary>
        [DisplayName("用户")]
        User = 6
    }

    /// <summary>
    /// 通知及时性类型
    /// </summary>
    [DisplayName("InTimeType")]
    public enum InTimeType
    {
        /// <summary>
        /// 即时通知
        /// </summary>
        [DisplayName("即时")]
        Immediate = 1,
        /// <summary>
        /// 定时通知
        /// </summary>
        [DisplayName("定时")]
        Regular = 2
    }

    /// <summary>
    /// 通知状态
    /// </summary>
    [DisplayName("通知状态")]
    public enum NotifyState
    {
        /// <summary>
        /// 待通知
        /// </summary>
        [DisplayName("待通知")]
        Waiting = 0,
        /// <summary>
        /// 已通知
        /// </summary>
        [DisplayName("已通知")]
        Notified = 1,
        /// <summary>
        /// 错误
        /// </summary>
        [DisplayName("错误")]
        Error = 2
    }
}