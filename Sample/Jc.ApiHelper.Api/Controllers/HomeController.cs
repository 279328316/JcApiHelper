using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Jc.ApiHelper.Mvc.Controllers
{
    /// <summary>
    /// Home
    /// </summary>
    [Route("[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class HomeController : Controller
    {
        /// <summary>
        /// Index
        /// </summary>
        /// <returns></returns>
        [AllowAnonymous]
        [Route("[action]")]
        public IActionResult Index()
        {
            return Redirect("ApiHelper/index.html");
        }
    }
}
