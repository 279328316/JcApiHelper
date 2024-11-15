
using Jc.Database;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Linq;

namespace Jc.ApiHelper.Api
{
    /// <summary>
    /// 登录权限Filter
    /// </summary>
    public class AuthorizationFilter : ActionFilterAttribute
    {
        /// <summary>
        /// 当动作执行中
        /// </summary>
        /// <param name="filterContext"></param>
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {

            // 判断是否检查登陆
            bool allowAnonymous = false;
            if (filterContext.ActionDescriptor is ControllerActionDescriptor controllerActionDescriptor)
            {
                allowAnonymous = controllerActionDescriptor.MethodInfo.GetCustomAttributes(inherit: true)
                  .Any(a => a.GetType().Equals(typeof(AllowAnonymousAttribute)));
            }
            if (!allowAnonymous)
            {
                Robj<bool> robj = new Robj<bool>();
                HttpContext httpContext = filterContext.HttpContext;
                string token = "";
                if (httpContext.Request.Headers.Keys.Select(k => k.ToLower()).Contains(Consts.Sys_TokenKey))
                {
                    token = httpContext.Request.Headers[Consts.Sys_TokenKey];
                }
                if (string.IsNullOrEmpty(token))
                {   //尝试自链接中获取token 以便get请求
                    if (filterContext.HttpContext.Request.Query.Keys.Contains(Consts.Sys_TokenKey))
                    {
                        token = filterContext.HttpContext.Request.Query[Consts.Sys_TokenKey];
                    }
                }
                if (string.IsNullOrEmpty(token))
                {   //尝试自表单数据中获取token
                    if (!string.IsNullOrEmpty(filterContext.HttpContext.Request.ContentType) 
                        && filterContext.HttpContext.Request.ContentType.ToLower() == "application/x-www-form-urlencoded" 
                        && filterContext.HttpContext.Request.Form.Keys.Contains(Consts.Sys_TokenKey))
                    {
                        token = filterContext.HttpContext.Request.Form[Consts.Sys_TokenKey];
                    }
                }

                RCode rcode = RCode.Exception;
                string controller = filterContext.RouteData.Values["controller"].ToString();
                string action = filterContext.RouteData.Values["action"].ToString();
                try
                {
                    if (string.IsNullOrEmpty(token))
                    {   //开发使用
                        rcode = RCode.NeedLogin;
                        throw new Exception("你尚未登录系统,请先登录.");  //未登录系统抛出异常
                    }
                    else
                    {
                        //UserDto user = CacheHelper.Get<UserDto>(token);
                        //if (user == null)
                        //{
                        //    rcode = RCode.NeedLogin;
                        //    throw new Exception("登录无效或登录已超时,请重新登录.");
                        //}
                    }
                    base.OnActionExecuting(filterContext);
                }
                catch (Exception ex)
                {
                    robj.Code = rcode;
                    robj.Message = ex.Message;
                    filterContext.Result = new ContentResult() { Content = JsonHelper.ObjToJson(robj) };
                }
            }
            else
            {
                base.OnActionExecuting(filterContext);
            }
        }
    }
}
