using System;
using Jc.Core;

namespace Jc.ApiHelper.Mvc.Models
{
    /// <summary>
    /// 菜单 Dto
    /// </summary>
    [Table(Name ="s_menu",DisplayText ="菜单")]
    public class MenuDto
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
        /// 菜单名称
        /// </summary>
        public string MenuName { get; set; }

        /// <summary>
        /// 序号
        /// </summary>
        public int? OrderNo { get; set; }

        /// <summary>
        /// 菜单类型 0根节点 1子节点
        /// </summary>
        public int? MenuType { get; set; }

        /// <summary>
        /// 是否可见
        /// </summary>
        public int? Visible { get; set; }

        /// <summary>
        /// Url地址
        /// </summary>
        public string UrlAddress { get; set; }

        /// <summary>
        /// Url参数
        /// </summary>
        public string UrlParams { get; set; }

        /// <summary>
        /// 绑定权限
        /// </summary>
        public Guid? BindRight { get; set; }

        /// <summary>
        /// 打开方式
        /// </summary>
        public string OpenType { get; set; }

        /// <summary>
        /// 图标
        /// </summary>
        public string Icon { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        public string Note { get; set; }

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
