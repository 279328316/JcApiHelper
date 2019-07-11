using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Data;
using System.Text.RegularExpressions;

using System.Reflection;
using Mi.BeautyMedical.Base;
using System.Collections.Specialized;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Jc.Core.Helper;
using Microsoft.AspNetCore.Http;
using Jc.Core;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Authorization;
using Jc.ApiHelper.Api.Models;

namespace Jc.ApiHelper.Api
{
    /// <summary>
    /// ControllerBase
    /// </summary>
    public class WebControllerBase : Controller
    {
        //缓存Helper
        private static ICacheHelper cacheHelper = new MemoryCacheHelper();

        /// <summary>
        /// 缓存Helper
        /// </summary>
        public static ICacheHelper CacheHelper { get { return cacheHelper; } }

        /// <summary>
        /// 当前用户
        /// </summary>
        public UserDto CurUser { get; set; }

        public WebControllerBase()
        {
        }

        /// <summary>
        /// 当动作执行中
        /// </summary>
        /// <param name="filterContext"></param>
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            CurUser = GetCurrentUser(this.HttpContext);

            // 判断是否检查登陆
            bool allowAnonymous = false;
            if (filterContext.ActionDescriptor is ControllerActionDescriptor controllerActionDescriptor)
            {
                allowAnonymous = controllerActionDescriptor.MethodInfo.GetCustomAttributes(inherit: true)
                  .Any(a => a.GetType().Equals(typeof(AllowAnonymousAttribute)));
            }
            if (!allowAnonymous)
            {
                string controller = filterContext.RouteData.Values["controller"].ToString();
                string action = filterContext.RouteData.Values["action"].ToString();

                if (CurUser == null)
                {
                    Robj<bool> robj = new Robj<bool>();
                    robj.Code = RCode.NeedLogin;
                    robj.Message = "尚未登录或登录已超时,请重新登录.";
                    filterContext.Result = new ContentResult() { Content = JsonHelper.ObjToJson(robj) };
                }
                else
                {
                    base.OnActionExecuting(filterContext);
                }
            }
            else
            {
                base.OnActionExecuting(filterContext);
            }
        }

        /// <summary>
        /// 获取当前用户
        /// </summary>
        /// <param name="httpContext"></param>
        /// <returns></returns>
        private UserDto GetCurrentUser(HttpContext httpContext)
        {
            string tokenKey = Consts.Sys_TokenKey;
            string token = httpContext.Request.Headers[tokenKey];
            UserDto user = null;

            if (httpContext.Request.Headers.Keys.Select(k => k.ToLower()).Contains(Consts.Sys_TokenKey))
            {
                token = httpContext.Request.Headers[Consts.Sys_TokenKey];
            }
            if (string.IsNullOrEmpty(token))
            {   //尝试自链接中获取token 以便get请求
                if (httpContext.Request.Query.Keys.Contains(Consts.Sys_TokenKey))
                {
                    token = httpContext.Request.Query[Consts.Sys_TokenKey];
                }
            }
            if (string.IsNullOrEmpty(token))
            {   //尝试自表单数据中获取token
                if (!string.IsNullOrEmpty(httpContext.Request.ContentType)
                    && httpContext.Request.ContentType.ToLower() == "application/x-www-form-urlencoded"
                    && httpContext.Request.Form.Keys.Contains(Consts.Sys_TokenKey))
                {
                    token = httpContext.Request.Form[Consts.Sys_TokenKey];
                }
            }
            if (!string.IsNullOrEmpty(token))
            {
                user = CacheHelper.Get<UserDto>(token);
            }
            return user;
        }

    }
}
