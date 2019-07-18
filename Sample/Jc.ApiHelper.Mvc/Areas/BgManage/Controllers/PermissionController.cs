using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

using Jc.Core;
using Jc.ApiHelper.Mvc.Models;

namespace Jc.ApiHelper.Mvc.Controllers
{
    /// <summary>
    /// 权限管理
    /// </summary>
    [Area("BgManage")]
    public class PermissionController : Controller
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
        public PageResult<PermissionDto> QueryPermissionList(int pageIndex = 1, int pageSize = 10, string sort = null, string order = null)
        {
            IQuery<PermissionDto> query = Dbc.Db.IQuery<PermissionDto>(Request.Form)
                .AutoOrderBy(sort, order, a => a.Id, Sorting.Asc)
                .Page(pageIndex, pageSize);
            PageResult<PermissionDto> result = query.ToPageList();
            return result;
        }

        /// <summary>
        /// 获取记录
        /// </summary>
        /// <param name="id">id</param>
        /// <returns>PermissionDto</returns>
        [HttpPost]
        public PermissionDto GetPermission(Guid id)
        {
            ExHelper.ThrowIf(id == Guid.Empty, "无效的查询参数");
            PermissionDto dto = Dbc.Db.GetById<PermissionDto>(id);
            return dto;
        }

        /// <summary>
        /// 保存记录
        /// </summary>
        /// <returns>bool</returns>
        [HttpPost]
        private bool SetPermission(PermissionDto dto)
        {
            CheckPermission(dto);//检查用户输入
            if (dto.Id != Guid.Empty)
            {
                PermissionDto dbDto = Dbc.Db.GetById<PermissionDto>(dto.Id);
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
        private void CheckPermission(PermissionDto dto)
        {
        }

        /// <summary>
        /// 删除记录
        /// </summary>
        /// <param name="id">id</param>
        /// <returns>bool</returns>
        [HttpPost]
        public bool DeletePermission(Guid id)
        {
            ExHelper.ThrowIf(id == Guid.Empty, "无效的记录Id");
            Dbc.Db.DeleteById<PermissionDto>(id);
            return true;
        }
        #endregion 

    }
}
