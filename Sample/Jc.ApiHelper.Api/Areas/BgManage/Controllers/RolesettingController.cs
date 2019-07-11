using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

using Jc.Core;
using Jc.ApiHelper.Api.Models;

namespace Jc.ApiHelper.Api.Controllers
{
    /// <summary>
    /// 角色配置管理
    /// </summary>
    [Area("BgManage")]
    public class RoleSettingController : ControllerBase
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
        public PageResult<RoleSettingDto> QueryRolesettingList(int pageIndex = 1, int pageSize = 10, string sort = null, string order = null)
        {
            IQuery<RoleSettingDto> query = Dbc.Db.IQuery<RoleSettingDto>(Request.Form)
                .AutoOrderBy(sort, order, a => a.Id, Sorting.Asc)
                .Page(pageIndex, pageSize);
            PageResult<RoleSettingDto> result = query.ToPageList();
            return result;
        }

        /// <summary>
        /// 获取记录
        /// </summary>
        /// <param name="id">id</param>
        /// <returns>RoleSettingDto</returns>
        [HttpPost]
        public RoleSettingDto GetRolesetting(Guid id)
        {
            ExHelper.ThrowIf(id == Guid.Empty, "无效的查询参数");
            RoleSettingDto dto = Dbc.Db.GetById<RoleSettingDto>(id);
            return dto;
        }

        /// <summary>
        /// 保存记录
        /// </summary>
        /// <returns>bool</returns>
        [HttpPost]
        private bool SetRolesetting(RoleSettingDto dto)
        {
            CheckRolesetting(dto);//检查用户输入
            if (dto.Id != Guid.Empty)
            {
                RoleSettingDto dbDto = Dbc.Db.GetById<RoleSettingDto>(dto.Id);
                ExHelper.ThrowIfNull(dbDto,"查找更新记录失败.");
                dbDto.MapTo(dto, a => a.Id);
            }
            Dbc.Db.Set(dto);
            return true;
        }

        /// <summary>
        /// 检查校验Save对象
        /// </summary>
        /// <param name="dto">Dto 对象</param>
        /// <returns></returns>
        private void CheckRolesetting(RoleSettingDto dto)
        {
        }

        /// <summary>
        /// 删除记录
        /// </summary>
        /// <param name="id">id</param>
        /// <returns>bool</returns>
        [HttpPost]
        public bool DeleteRolesetting(Guid id)
        {
            ExHelper.ThrowIf(id == Guid.Empty, "无效的记录Id");
            Dbc.Db.DeleteById<RoleSettingDto>(id);
            return true;
        }
        #endregion 

    }
}
