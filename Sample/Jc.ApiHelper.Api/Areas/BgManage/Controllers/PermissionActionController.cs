using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

using Jc.Core;
using Jc.ApiHelper.Api.Models;

namespace Jc.ApiHelper.Api.Controllers
{
    /// <summary>
    /// 权限Action映射管理
    /// </summary>
    [Area("BgManage")]
    public class PermissionActionController : ControllerBase
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
        public PageResult<PermissionactionDto> QueryPermissionactionList(int pageIndex = 1, int pageSize = 10, string sort = null, string order = null)
        {
            IQuery<PermissionactionDto> query = Dbc.Db.IQuery<PermissionactionDto>(Request.Form)
                .AutoOrderBy(sort, order, a => a.Id, Sorting.Asc)
                .Page(pageIndex, pageSize);
            PageResult<PermissionactionDto> result = query.ToPageList();
            return result;
        }

        /// <summary>
        /// 获取记录
        /// </summary>
        /// <param name="id">id</param>
        /// <returns>PermissionactionDto</returns>
        [HttpPost]
        public PermissionactionDto GetPermissionaction(Guid id)
        {
            ExHelper.ThrowIf(id == Guid.Empty, "无效的查询参数");
            PermissionactionDto dto = Dbc.Db.GetById<PermissionactionDto>(id);
            return dto;
        }

        /// <summary>
        /// 保存记录
        /// </summary>
        /// <returns>bool</returns>
        [HttpPost]
        public bool SetPermissionaction(PermissionactionDto dto)
        {
            CheckPermissionaction(dto);//检查用户输入
            if (dto.Id != Guid.Empty)
            {
                PermissionactionDto dbDto = Dbc.Db.GetById<PermissionactionDto>(dto.Id);
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
        private void CheckPermissionaction(PermissionactionDto dto)
        {
        }

        /// <summary>
        /// 删除记录
        /// </summary>
        /// <param name="id">id</param>
        /// <returns>bool</returns>
        [HttpPost]
        public bool DeletePermissionaction(Guid id)
        {
            ExHelper.ThrowIf(id == Guid.Empty, "无效的记录Id");
            Dbc.Db.DeleteById<PermissionactionDto>(id);
            return true;
        }
        #endregion 

    }
}
