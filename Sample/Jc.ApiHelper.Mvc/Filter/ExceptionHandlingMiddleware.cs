using Jc.Database;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System;
using System.Threading.Tasks;

namespace Jc.ApiHelper.Mvc
{
    /// <summary>
    /// 异常处理扩展
    /// </summary>
    public static class ExceptionHandlingExtensions
    {
        public static IApplicationBuilder UseErrorHandling(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ExceptionHandlingMiddleware>();
        }
    }

    /// <summary>
    /// 异常处理中间件
    /// </summary>
    public class ExceptionHandlingMiddleware
    {
        private readonly RequestDelegate next;

        public ExceptionHandlingMiddleware(RequestDelegate next)
        {
            this.next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await next(context);
            }
            catch (Exception ex)
            {
                string msg = ex.InnerException == null ? ex.Message : ex.InnerException.Message;
                int statusCode = context.Response.StatusCode;
                if (ex is ArgumentException)
                {
                    statusCode = 200;
                }
                if (ex.InnerException != null)
                {
                    msg = ex.InnerException.Message;
                }
                await HandleExceptionAsync(context, statusCode, msg);
            }
            finally
            {
                int statusCode = context.Response.StatusCode;
                string msg = "";
                switch (statusCode)
                {
                    case 401:
                        msg = "未授权";
                        break;
                    case 404:
                        msg = "未找到服务";
                        break;
                    case 405:
                        msg = "请求方法不允许";
                        break;
                    case 500:
                        msg = "内部服务器错误";
                        break;
                    case 502:
                        msg = "请求错误";
                        break;
                    default:
                        if (statusCode != 200)
                        {
                            msg = $"未知错误:{statusCode}";
                        }
                        break;
                }
                if (!string.IsNullOrWhiteSpace(msg))
                {
                    await HandleExceptionAsync(context, statusCode, msg);
                }
            }
        }

        /// <summary>
        /// 异常处理
        /// </summary>
        /// <param name="context"></param>
        /// <param name="statusCode"></param>
        /// <param name="msg"></param>
        /// <returns></returns>
        private static Task HandleExceptionAsync(HttpContext context, int statusCode, string msg)
        {
            Robj<string> robj = new Robj<string>();
            if (statusCode == 401)
            {
                robj.Code = RCode.NeedLogin;
            }
            else
            {
                robj.Code = RCode.Exception;
            }
            robj.Message = msg;

            context.Response.ContentType = "application/json;charset=utf-8";
            return context.Response.WriteAsync(JsonHelper.ObjToJson(robj));
        }
    }
}