using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

using Jc.Core;
using Jc.ApiHelper.Mvc.Models;
using Microsoft.AspNetCore.Authorization;

namespace Jc.ApiHelper.Mvc.Controllers
{
    /// <summary>
    /// 系统全局设置管理
    /// </summary>
    [Area("BgManage")]
    public class GlobalsettingController : Controller
    {
        #region Methods

        /// <summary>
        /// 查询列表
        /// </summary>
        /// <param name="pageIndex">页序号</param>
        /// <param name="pageSize">页大小</param>
        /// <param name="sort">排序字段</param>
        /// <param name="order">排序方向</param>
        /// <param name="pid">TestStr Test
        ///     Test回车换行测试
        /// </param>
        /// <returns>robj</returns>
        [HttpPost]
        public PageResult<GlobalsettingDto> QueryGlobalsettingList(int pageIndex = 1, int pageSize = 10,int? pid = 10, string? sort = null, string? order = "asc", string testStr = "a")
        {
            IQuery<GlobalsettingDto> query = Dbc.GetIQuery<GlobalsettingDto>(Request.Form)
                .AutoOrderBy(sort, order, a => a.Id, Sorting.Asc)
                .Page(pageIndex, pageSize);
            return query.ToPageList();
        }

        /// <summary>
        /// 获取记录Count
        /// </summary>
        /// <param name="id">id</param>
        /// <returns>GlobalsettingDto</returns>
        [HttpPost]
        [AllowAnonymous]
        public int? GetGlobalsettingCount()
        {
            return null;
        }

        /// <summary>
        /// 获取记录名称
        /// </summary>
        /// <param name="id">id</param>
        /// <returns>GlobalsettingDto</returns>
        [HttpPost]
        [AllowAnonymous]
        public string? GetGlobalsettingName()
        {
            return null;
        }

        /// <summary>
        /// 获取记录Id
        /// </summary>
        /// <param name="id">id</param>
        /// <returns>GlobalsettingDto</returns>
        [HttpPost]
        [AllowAnonymous]
        public Guid? GetGlobalsettingId()
        {
            return null;
        }
        /// <summary>
        /// 获取记录
        /// </summary>
        /// <param name="id">id</param>
        /// <param name="sort">sort1</param>
        /// <param name="order">order1</param>
        /// <param name="testStr">TestStr Test
        ///     Test回车换行测试
        /// </param>
        /// <returns>GlobalsettingDto</returns>
        [HttpPost]
        [AllowAnonymous]
        public GlobalsettingDto? GetGlobalsetting(Guid? id,string? sort = null,string? order = "asc",string testStr = "a")
        {
            ExHelper.ThrowIf(id == Guid.Empty, "无效的查询参数");
            GlobalsettingDto? dto = Dbc.Db.GetById<GlobalsettingDto>(id);
            return dto;
        }

        /// <summary>
        /// 获取记录
        /// 非空参数验证
        /// SummaryTest
        /// TTTT
        /// 123456
        /// SummaryTest2
        /// </summary>
        /// <param name="id">id</param>
        /// <returns>GlobalsettingDto</returns>
        [HttpPost]
        [AllowAnonymous]
        public GlobalsettingDto GetGlobalsettingById(Guid id)
        {
            ExHelper.ThrowIf(id == Guid.Empty, "无效的查询参数");
            GlobalsettingDto dto = Dbc.Db.GetById<GlobalsettingDto>(id);
            return dto;
        }

        /// <summary>
        /// 保存记录
        /// </summary>
        /// <returns>bool</returns>
        [HttpPost]
        public bool SetGlobalsetting(GlobalsettingDto dto)
        {
            CheckGlobalsetting(dto);//检查用户输入
            if (dto.Id != Guid.Empty)
            {
                GlobalsettingDto dbDto = Dbc.Db.GetById<GlobalsettingDto>(dto.Id);
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
        private void CheckGlobalsetting(GlobalsettingDto dto)
        {
        }

        /// <summary>
        /// 删除记录
        /// </summary>
        /// <param name="id">id</param>
        /// <returns>bool</returns>
        [HttpPost]
        public bool DeleteGlobalsetting(Guid id)
        {
            ExHelper.ThrowIf(id == Guid.Empty, "无效的记录Id");
            Dbc.Db.DeleteById<GlobalsettingDto>(id);
            return true;
        }
        #endregion 

    }
}
