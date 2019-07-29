using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Jc.ApiHelper;
using Jc.ApiHelper.Model;
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
            Robj<List<ControllerModel>> robj = new Robj<List<ControllerModel>>();
            try
            {
                List<ControllerModel> controllerList = JcApiHelper.GetControllerList();
                robj.Result = controllerList;
            }
            catch (Exception ex)
            {
                robj.Error(ex.Message);
            }
            return new JsonResult(robj);
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
            Robj<ControllerModel> robj = new Robj<ControllerModel>();
            try
            {
                if (string.IsNullOrEmpty(controllerId))
                {
                    throw new Exception("参数controllerId不能为空");
                }
                ControllerModel controller = JcApiHelper.GetController(controllerId);
                robj.Result = controller;
            }
            catch (Exception ex)
            {
                robj.Error(ex.Message);
            }
            return new JsonResult(robj);
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
            Robj<ActionModel> robj = new Robj<ActionModel>();
            try
            {
                if (string.IsNullOrEmpty(actionId))
                {
                    throw new Exception("参数Id不能为空");
                }
                ActionModel action = JcApiHelper.GetAction(actionId);
                robj.Result = action;
            }
            catch (Exception ex)
            {
                robj.Error(ex.Message);
            }
            return new JsonResult(robj);
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
            Robj<PTypeModel> robj = new Robj<PTypeModel>();
            try
            {
                if (string.IsNullOrEmpty(typeId))
                {
                    throw new Exception("参数typeId不能为空");
                }
                PTypeModel ptype = JcApiHelper.GetPTypeModel(typeId);
                robj.Result = ptype;
            }
            catch (Exception ex)
            {
                robj.Error(ex.Message);
            }
            return new JsonResult(robj);
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
            Robj<TsResultModel> robj = new Robj<TsResultModel>();
            try
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
                robj.Result = tsResult;
            }
            catch (Exception ex)
            {
                robj.Error(ex.Message);
            }
            return new JsonResult(robj);
        }
    }

}