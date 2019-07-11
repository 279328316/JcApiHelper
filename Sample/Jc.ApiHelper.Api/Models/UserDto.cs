using System;
using Jc.Core;

namespace Jc.ApiHelper.Api.Models
{
    /// <summary>
    /// 用户信息 Dto
    /// </summary>
    [Table(Name ="t_user",DisplayText ="用户信息")]
    public class UserDto
    {
        #region Properties
        /// <summary>
        /// Id
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// 用户名
        /// </summary>
        public string UserName { get; set; }

        /// <summary>
        /// 密码
        /// </summary>
        public string UserPwd { get; set; }

        /// <summary>
        /// 昵称
        /// </summary>
        public string NickName { get; set; }

        /// <summary>
        /// Email
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// 头像
        /// </summary>
        public string Avatar { get; set; }

        /// <summary>
        /// 联系方式
        /// </summary>
        public string PhoneNo { get; set; }

        /// <summary>
        /// 微信OpenId
        /// </summary>
        public string WeChatOpenId { get; set; }

        /// <summary>
        /// 角色Id
        /// </summary>
        public Guid? RoleId { get; set; }

        /// <summary>
        /// 角色类型 0超级系统管理员 1系统管理员 2用户
        /// </summary>
        public int? RoleType { get; set; }

        /// <summary>
        /// 是否删除
        /// </summary>
        public bool? IsDelete { get; set; }

        /// <summary>
        /// 状态 0停用 1启用
        /// </summary>
        public int? UserStatus { get; set; }

        /// <summary>
        /// 添加人
        /// </summary>
        public Guid? AddUser { get; set; }

        /// <summary>
        /// 任务添加时间
        /// </summary>
        public DateTime? AddDate { get; set; }

        /// <summary>
        /// 最后登录Token
        /// </summary>
        public Guid? LastLoginToken { get; set; }

        /// <summary>
        /// Last业务Id
        /// </summary>
        public string LastBussinessId { get; set; }

        /// <summary>
        /// Last登录时间
        /// </summary>
        public DateTime? LastLoginTime { get; set; }

        /// <summary>
        /// Last登录IP
        /// </summary>
        public string LastLoginIp { get; set; }

        /// <summary>
        /// Last登录地址
        /// </summary>
        public string LastLoginAddress { get; set; }

        /// <summary>
        /// 登录次数
        /// </summary>
        public int? TotalLoginAmount { get; set; }
        #endregion
    }
}
