using System;

namespace Jc.ApiHelper.Api
{
    /// <summary>
    /// 系统角色类型
    /// 0超级系统管理员 1系统管理员 2用户
    /// </summary>
    public enum RoleType
    {
        /// <summary>
        /// 超级系统管理员
        /// </summary>
        SuperAdmin = 0,

        /// <summary>
        /// 系统管理员
        /// </summary>
        SysAdmin = 1,

        /// <summary>
        /// 普通用户
        /// </summary>
        User = 2
    }

    /// <summary>
    /// 属性类型
    /// </summary>
    public enum PropertyType
    {
        /// <summary>
        /// 常规属性
        /// </summary>
        Common = 0,
        /// <summary>
        /// Lambda属性
        /// </summary>
        Lambda = 1
    }

    /// <summary>
    /// 登录方式
    /// </summary>
    public enum LoginType
    {
        /// <summary>
        /// 用户名密码登录
        /// </summary>
        UserPwd = 0,
        /// <summary>
        /// 验证码登录
        /// </summary>
        PhoneCaptcha = 1,
        /// <summary>
        /// QQ登录
        /// </summary>
        QQ = 2,
        /// <summary>
        /// 微信登录
        /// </summary>
        Wechat = 3,
        /// <summary>
        /// 支付宝登录
        /// </summary>
        Alipay = 4,
        /// <summary>
        /// 淘宝登陆
        /// </summary>
        Taobao = 5
    }
}
