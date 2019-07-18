using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

using Jc.Core;
using Jc.ApiHelper.Api.Models;

namespace Jc.ApiHelper.Api.Controllers
{
    /// <summary>
    /// 菜单管理
    /// </summary>
    [Area("BgManage")]
    public class MenuController : ControllerBase
    {
        #region Methods

        /// <summary>
        /// 查询列表
        /// </summary>
        /// <param name="pageIndex">页序号</param>
        /// <param name="pageSize">页大小</param>
        /// <param name="sort">排序字段</param>
        /// <param name="order">排序方向</param>
        /// <returns>robj</returns>
        [HttpPost]
        public PageResult<MenuDto> QueryMenuList(int pageIndex = 1, int pageSize = 10, string sort = null, string order = null)
        {
            IQuery<MenuDto> query = Dbc.Db.IQuery<MenuDto>(Request.Form)
                .AutoOrderBy(sort, order, a => a.Id, Sorting.Asc)
                .Page(pageIndex, pageSize);
            PageResult<MenuDto> result = query.ToPageList();
            return result;
        }

        /// <summary>
        /// 获取记录
        /// </summary>
        /// <param name="id">id</param>
        /// <returns>MenuDto</returns>
        [HttpPost]
        public MenuDto GetMenu(Guid id)
        {
            ExHelper.ThrowIf(id == Guid.Empty, "无效的查询参数");
            MenuDto dto = Dbc.Db.GetById<MenuDto>(id);
            return dto;
        }

        /// <summary>
        /// 保存记录
        /// </summary>
        /// <returns>bool</returns>
        [HttpPost]
        private bool SetMenu(MenuDto dto)
        {
            CheckMenu(dto);//检查用户输入
            if (dto.Id != Guid.Empty)
            {
                MenuDto dbDto = Dbc.Db.GetById<MenuDto>(dto.Id);
                ExHelper.ThrowIfNull(dbDto,"查找更新记录失败.");
                dbDto.CopyTo(dto, a => a.Id);
            }
            Dbc.Db.Set(dto);
            return true;
        }

        /// <summary>
        /// 检查校验Save对象
        /// </summary>
        /// <param name="dto">Dto 对象</param>
        /// <returns></returns>
        private void CheckMenu(MenuDto dto)
        {
        }

        /// <summary>
        /// 删除记录
        /// </summary>
        /// <param name="id">id</param>
        /// <returns>bool</returns>
        [HttpPost]
        public bool DeleteMenu(Guid id)
        {
            ExHelper.ThrowIf(id == Guid.Empty, "无效的记录Id");
            Dbc.Db.DeleteById<MenuDto>(id);
            return true;
        }
        #endregion 

    }
}
