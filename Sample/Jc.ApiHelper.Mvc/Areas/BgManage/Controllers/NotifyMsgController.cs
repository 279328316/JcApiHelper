using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Jc;
using System.Text.RegularExpressions;
using Jc.ApiHelper.Dto;
using Jc.ApiHelper.Model;

namespace Jc.ApiHelper.Mvc.Controllers
{
    /// <summary>
    /// 通知消息
    /// </summary>
    public class NotifyMsgController : Controller
    {
        /// <summary>
        /// 查询通知消息列表
        /// </summary>
        /// <param name="pageIndex">页序号</param>
        /// <param name="pageSize">页大小</param>
        /// <param name="sort">排序字段</param>
        /// <param name="order">排序方向</param>
        /// <returns>robj</returns>
        [HttpPost]
        public PageResult<NotifyMsgDto> QueryNotifyMsgList(int pageIndex = 1, int pageSize = 10, string sort = null, string order = null)
        {
            PageResult<NotifyMsgDto> pgMsgDto = new PageResult<NotifyMsgDto>();
            return pgMsgDto;
        }
    }
}
