using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Jc.ApiHelper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.ActionConstraints;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;

namespace Jc.ApiHelper
{
    /// <summary>
    /// Help文档
    /// </summary>
    [Route("[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class ApiHelperController:ControllerBase
    {
        /// <summary>
        /// Ctor
        /// </summary>
        /// <param name="actionProvider">actionProvider</param>
        public ApiHelperController(IActionDescriptorCollectionProvider actionProvider)
        {
            JcApiHelper.Init(actionProvider);
        }

        /// <summary>
        /// Index
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [HttpPost]
        [AllowAnonymous]
        public IActionResult Index()
        {
            return Redirect("ApiHelper/index.html");
        }

        /// <summary>
        /// 获取所有Controller
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("[action]")]
        public IActionResult GetControllerList()
        {
            return new JsonResult(JcApiHelper.GetControllerList());
        }

        /// <summary>
        /// 根据controllerId获取Controller
        /// </summary>
        /// <param name="controllerId">controllerId</param>
        /// <returns></returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("[action]")]
        public IActionResult GetController([FromForm]string controllerId)
        {
            if (string.IsNullOrEmpty(controllerId))
            {
                throw new Exception("参数controllerId不能为空");
            }
            return new JsonResult(JcApiHelper.GetController(controllerId));
        }

        /// <summary>
        /// 根据actionFullName获取Action
        /// </summary>
        /// <param name="actionId">Action Id</param>
        /// <returns></returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("[action]")]
        public IActionResult GetAction([FromForm]string actionId)
        {
            if (string.IsNullOrEmpty(actionId))
            {
                throw new Exception("参数Id不能为空");
            }
            return new JsonResult(JcApiHelper.GetAction(actionId));
        }

        /// <summary>
        /// 根据Id获取TypeModel
        /// </summary>
        /// <param name="typeId">PTypeModel Id</param>
        /// <returns></returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("[action]")]
        public IActionResult GetPType([FromForm]string typeId)
        {
            if (string.IsNullOrEmpty(typeId))
            {
                throw new Exception("参数typeId不能为空");
            }
            return new JsonResult(JcApiHelper.GetPTypeModel(typeId));
        }

        /// <summary>
        /// 生成Item对应TsResultModel
        /// </summary>
        /// <param name="itemId">Item Id</param>
        /// <param name="itemType">ItemType 1 Controller 2 Action 3 PType</param>
        /// <returns></returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("[action]")]
        public IActionResult GetTsModel([FromForm]string itemId, [FromForm]string itemType)
        {
            if (string.IsNullOrEmpty(itemId))
            {
                throw new Exception("参数typeId不能为空");
            }
            if (string.IsNullOrEmpty(itemType))
            {
                throw new Exception("参数itemType不能为空");
            }
            TsCreator creator = new TsCreator();
            TsResultModel tsResult = creator.GetTsResultModel(itemId, itemType);
            return new JsonResult(tsResult);
        }
    }

}