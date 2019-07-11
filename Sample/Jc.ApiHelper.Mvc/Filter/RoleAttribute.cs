using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Jc.ApiHelper.Mvc
{
    /// <summary>
    /// 角色Attribute
    /// </summary>
    public class RoleAttribute : ActionFilterAttribute
    {
        /// <summary>
        /// 角色名称
        /// </summary>
        public string Role { get; set; }

        /// <summary>
        /// Action执行
        /// </summary>
        /// <param name="filterContext"></param>
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (!string.IsNullOrEmpty(Role))
            {
                bool isAuthenticated = filterContext.HttpContext.User.IsInRole(Role);
                if (!isAuthenticated)
                {
                    throw new UnauthorizedAccessException("You have no right to view the page!");
                }
            }
            else
            {
                throw new InvalidOperationException("No Role Specified!");
            }
        }
    }
}
