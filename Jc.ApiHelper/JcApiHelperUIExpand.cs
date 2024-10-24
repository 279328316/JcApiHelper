using Microsoft.AspNetCore.Builder;

namespace Jc.ApiHelper
{
    /// <summary>
    /// JcApiHelperUIExpand 扩展IApplicationBuilder 使用JcApiHelperUI
    /// </summary>
    public static class JcApiHelperUIExpand
    {
        /// <summary>
        /// 使用JcApiHelper
        /// </summary>
        /// <param name="app"></param>
        /// <returns></returns>
        public static IApplicationBuilder UseJcApiHelper(this IApplicationBuilder app)
        {
            app.UseMiddleware<JcApiHelperUIMiddleware>();
            return app;
        }
    }
}