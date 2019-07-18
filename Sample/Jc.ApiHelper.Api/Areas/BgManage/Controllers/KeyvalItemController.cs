using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

using Jc.Core;
using Jc.ApiHelper.Api.Models;

namespace Jc.ApiHelper.Api.Controllers
{
    /// <summary>
    /// 配置码表管理
    /// </summary>
    [Area("BgManage")]
    public class KeyvalItemController : ControllerBase
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
        public PageResult<KeyvalItemDto> QueryKeyvalitemList(int pageIndex = 1, int pageSize = 10, string sort = null, string order = null)
        {
            IQuery<KeyvalItemDto> query = Dbc.Db.IQuery<KeyvalItemDto>(Request.Form)
                .AutoOrderBy(sort, order, a => a.Id, Sorting.Asc)
                .Page(pageIndex, pageSize);
            PageResult<KeyvalItemDto> result = query.ToPageList();
            return result;
        }

        /// <summary>
        /// 获取记录
        /// </summary>
        /// <param name="id">id</param>
        /// <returns>KeyvalItemDto</returns>
        [HttpPost]
        public KeyvalItemDto GetKeyvalitem(Guid id)
        {
            ExHelper.ThrowIf(id == Guid.Empty, "无效的查询参数");
            KeyvalItemDto dto = Dbc.Db.GetById<KeyvalItemDto>(id);
            return dto;
        }

        /// <summary>
        /// 保存记录
        /// </summary>
        /// <returns>bool</returns>
        [HttpPost]
        private bool SetKeyvalitem(KeyvalItemDto dto)
        {
            CheckKeyvalitem(dto);//检查用户输入
            if (dto.Id != Guid.Empty)
            {
                KeyvalItemDto dbDto = Dbc.Db.GetById<KeyvalItemDto>(dto.Id);
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
        private void CheckKeyvalitem(KeyvalItemDto dto)
        {
        }

        /// <summary>
        /// 删除记录
        /// </summary>
        /// <param name="id">id</param>
        /// <returns>bool</returns>
        [HttpPost]
        public bool DeleteKeyvalitem(Guid id)
        {
            ExHelper.ThrowIf(id == Guid.Empty, "无效的记录Id");
            Dbc.Db.DeleteById<KeyvalItemDto>(id);
            return true;
        }
        #endregion 

    }
}
