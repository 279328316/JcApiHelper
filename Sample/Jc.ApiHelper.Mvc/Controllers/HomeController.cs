using Jc.ApiHelper.Dto;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Diagnostics;

namespace Jc.ApiHelper.Mvc.Controllers
{
    /// <summary>
    /// Home
    /// </summary>
    public class HomeController : Controller
    {
        /// <summary>
        /// Index
        /// </summary>
        /// <returns></returns>
        public IActionResult Index()
        {
            return Redirect("ApiHelper/index.html");
        }

        /// <summary>
        /// Test Method
        /// </summary>
        /// <returns></returns>
        public Dictionary<string, string> ATest()
        {
            return null;
        }
    }
}