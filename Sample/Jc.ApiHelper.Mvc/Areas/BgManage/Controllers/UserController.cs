using Jc.ApiHelper.Dto;
using Jc.Database;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Jc.ApiHelper.Mvc.Controllers
{
    /// <summary>
    /// 用户信息管理
    /// </summary>
    [Area("BgManage")]
    public class UserController : WebControllerBase
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
        public PageResult<UserDto> QueryUserList(int pageIndex = 1, int pageSize = 10, string sort = null, string order = null)
        {
            IQuery<UserDto> query = Dbc.Db.IQuery<UserDto>(Request.Form)
                .And(a => a.IsDelete == false)
                .AutoOrderBy(sort, order, a => a.Id, Sorting.Asc)
                .Page(pageIndex, pageSize);
            PageResult<UserDto> result = query.ToPageList();
            return result;
        }

        /// <summary>
        /// 获取记录
        /// </summary>
        /// <param name="id">id</param>
        /// <returns>UserDto</returns>
        public UserDto GetUser(Guid id)
        {
            ExHelper.ThrowIf(id == Guid.Empty, "无效的查询参数");
            UserDto dto = Dbc.Db.GetById<UserDto>(id);
            return dto;
        }

        /// <summary>
        /// 保存记录
        /// </summary>
        /// <returns>bool</returns>
        [HttpPost]
        public bool SetUser([FromBody] UserDto dto)
        {
            CheckUser(dto);//检查用户输入
            if (dto.Id != Guid.Empty)
            {
                UserDto dbDto = Dbc.Db.GetById<UserDto>(dto.Id);
                ExHelper.ThrowIfNull(dbDto, "查找更新记录失败.");
                dbDto.CopyTo(dto, a => a.Id);
            }
            else
            {
                dto.IsDelete = false;
            }
            Dbc.Db.Set(dto);
            return true;
        }

        /// <summary>
        /// 检查校验Save对象
        /// </summary>
        /// <param name="dto">Dto 对象</param>
        /// <returns></returns>
        private void CheckUser(UserDto dto)
        {
        }

        /// <summary>
        /// 删除记录
        /// </summary>
        /// <param name="id">id</param>
        /// <returns>bool</returns>
        [HttpPost]
        public bool DeleteUser(Guid id)
        {
            ExHelper.ThrowIf(id == Guid.Empty, "无效的记录Id");
            UserDto dto = Dbc.Db.GetById<UserDto>(id);
            ExHelper.ThrowIfNull(dto, "查找记录失败.");
            dto.IsDelete = true;
            Dbc.Db.Set(dto, a => a.IsDelete);
            return true;
        }

        #endregion
    }
}