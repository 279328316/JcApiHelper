﻿using System;
using System.Linq;
using Jc.Core;
using Jc.Core.Helper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Jc.ApiHelper.Mvc
{
    /// <summary>
    /// 标识不对返回的结果进行封装处理
    /// </summary>
    public class NoPackageResultAttribute : Attribute
    {
    }

    /// <summary>
    /// ApiResult封装
    /// </summary>
    public class ApiResultFilter : ActionFilterAttribute
    {
        /// <summary>
        /// Action执行完成,返回结果处理
        /// </summary>
        /// <param name="actionExecutedContext"></param>
        public override void OnActionExecuted(ActionExecutedContext actionExecutedContext)
        {
            ControllerActionDescriptor actionDescriptor = actionExecutedContext.ActionDescriptor as ControllerActionDescriptor;
            object[] noPackageList = actionDescriptor.MethodInfo.GetCustomAttributes(typeof(NoPackageResultAttribute), false);
            if (noPackageList.Any())
            {
                base.OnActionExecuted(actionExecutedContext);
                return;
            }
            if (actionExecutedContext.Exception == null)
            {   //执行成功 取得由 API 返回的资料
                ObjectResult result = actionExecutedContext.Result as ObjectResult;
                if (result != null)
                {   // 重新封装回传格式
                    Robj<object> robj = new Robj<object>();
                    robj.Success(result.Value);
                    ObjectResult objectResult = new ObjectResult(robj);
                    actionExecutedContext.Result = objectResult;
                }
            }
            base.OnActionExecuted(actionExecutedContext);
        }
    }
}