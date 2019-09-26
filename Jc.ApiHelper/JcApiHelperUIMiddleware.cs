using System.Reflection;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
using System.Linq;
using System.Text;
using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.FileProviders;
using Microsoft.AspNetCore.StaticFiles;

namespace Jc.ApiHelper
{
    /// <summary>
    /// JcApiHelperUI中间件
    /// </summary>
    internal class JcApiHelperUIMiddleware
    {
        private const string embeddedFileNamespace = "Jc.ApiHelper.Html";
        private readonly StaticFileMiddleware staticFileMiddleware;

        /// <summary>
        /// Ctor
        /// </summary>
        /// <param name="next">A function that can process an HTTP request</param>
        /// <param name="hostingEnv">运行环境</param>
        /// <param name="loggerFactory">logger</param>
        public JcApiHelperUIMiddleware(RequestDelegate next,IWebHostEnvironment hostingEnv,ILoggerFactory loggerFactory)
        {
            StaticFileOptions staticFileOptions = new StaticFileOptions
            {
                RequestPath = "/ApiHelper",
                FileProvider = new EmbeddedFileProvider(typeof(JcApiHelperUIMiddleware).GetTypeInfo().Assembly, embeddedFileNamespace),
            };
            staticFileMiddleware = new StaticFileMiddleware(next, hostingEnv,
                Options.Create(staticFileOptions), loggerFactory);
        }

        /// <summary>
        /// StaticFileMiddleware Invoke
        /// </summary>
        /// <param name="httpContext">HttpRequest</param>
        /// <returns></returns>
        public async Task Invoke(HttpContext httpContext)
        {
            string httpMethod = httpContext.Request.Method;
            string path = httpContext.Request.Path.Value;

            if (httpMethod == "GET" && Regex.IsMatch(path, $"JcApiHelper/index.html"))
            {   //index.html特殊处理
                await RespondWithIndexHtml(httpContext.Response);
                return;
            }
            await staticFileMiddleware.Invoke(httpContext);
        }

        /// <summary>
        /// 首页信息
        /// </summary>
        /// <param name="response"></param>
        /// <returns></returns>
        private async Task RespondWithIndexHtml(HttpResponse response)
        {
            response.StatusCode = 200;
            response.ContentType = "text/html;charset=utf-8";

            using (Stream stream = typeof(JcApiHelperUIMiddleware).GetTypeInfo().Assembly.GetManifestResourceStream($"{embeddedFileNamespace}.index.html"))
            {
                // Inject arguments before writing to response
                StringBuilder htmlBuilder = new StringBuilder(new StreamReader(stream).ReadToEnd());

                //处理index.html baseUrl 以兼容非根目录以及Nginx代理转发情况
                htmlBuilder.Replace("<base href=\"/\">", $"<base href=\"/ApiHelper/\">");
                await response.WriteAsync(htmlBuilder.ToString(), Encoding.UTF8);
            }
        }
    }
}
