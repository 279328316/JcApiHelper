using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Text;

namespace Jc.ApiHelper
{
    /// <summary>
    /// JcApiHelperUIExpand
    /// 扩展IApplicationBuilder
    /// 使用JcApiHelperUI
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
            JcApiHelper.UseJcApiHelper();
            return app;
        }
    }
}
