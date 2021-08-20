using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using System.Xml;

namespace Jc.ApiHelper
{
    /// <summary>
    /// JcApiHelper
    /// 使用前请调用Init方法进行初始化
    /// </summary>
    public static partial class JcApiHelper
    {
        #region Fields
        private static bool useJcApiHelper = false; //是否启用JcApiHelper标识
        private static List<ControllerModel> controllerList = new List<ControllerModel>();

        /// <summary>
        /// 类型字典
        /// </summary>
        private static Dictionary<string, PTypeModel> PTypeDic { get; set; } = new Dictionary<string, PTypeModel>();

        #endregion

        #region Methods

        #region Init Methods

        /// <summary>
        /// 是否使用JcApiHelper
        /// </summary>
        public static void UseJcApiHelper()
        {
            useJcApiHelper = true;
        }

        /// <summary>
        /// 初始化Helper
        /// 参数actionProvider.在Controller构造方法中注入IActionDescriptorCollectionProvider
        /// </summary>
        /// <param name="actionProvider"></param>
        public static void Init(IActionDescriptorCollectionProvider actionProvider)
        {
            if (controllerList.Count<=0 && useJcApiHelper)
            {
                InitController(actionProvider);
            }
        }

        /// <summary>
        /// 初始化ControllerList
        /// </summary>
        /// <param name="actionProvider"></param>
        private static void InitController(IActionDescriptorCollectionProvider actionProvider)
        {
            lock (controllerList)
            {
                if (controllerList.Count > 0)
                {
                    return;
                }
                #region 获取Controller,Action,TypeModel信息
                List<ActionDescriptor> actionDescList = actionProvider.ActionDescriptors.Items.ToList();
                for (int i = 0; i < actionDescList.Count; i++)
                {
                    ControllerActionDescriptor actionDescriptor = actionDescList[i] as ControllerActionDescriptor;

                    ControllerModel controller = controllerList.Where(a =>
                        a.Id == TypeHelper.GetModuleMark(actionDescriptor.ControllerTypeInfo)).FirstOrDefault();
                    if (controller == null)
                    {
                        controller = GetControllerModel(actionDescriptor);
                        if (controller.ControllerName == "ApiHelper")
                        {
                            continue;
                        }
                        controllerList.Add(controller);
                    }
                    ActionModel action = GetActionModel(actionDescriptor);
                    controller.ActionList.Add(action);
                }
                #endregion

                #region Controller,Action 排序
                for (int i = 0; i < controllerList.Count; i++)
                {
                    controllerList[i].ActionList.Sort((a1, a2) =>
                    {
                        return a1.ActionName.CompareTo(a2.ActionName);
                    });
                }
                controllerList.Sort((a1, a2) =>
                {
                    return a1.ControllerName.CompareTo(a2.ControllerName);
                });
                #endregion
            }
        }

        /// <summary>
        /// 获取ControllerModel
        /// </summary>
        /// <param name="actionDescriptor"></param>
        /// <returns></returns>
        private static ControllerModel GetControllerModel(ControllerActionDescriptor actionDescriptor)
        {
            TypeInfo controllerTypeInfo = actionDescriptor.ControllerTypeInfo;
            ControllerModel controller = new ControllerModel()
            {
                Id = TypeHelper.GetModuleMark(controllerTypeInfo),
                FullName = controllerTypeInfo.FullName,
                CustomAttrList = controllerTypeInfo.CustomAttributes.Select(a => GetCustomAttribute(a)).ToList(),
                ModuleName = controllerTypeInfo.Module.Name,
                AreaName = actionDescriptor.RouteValues.Keys.Contains("area") ?
                                    actionDescriptor.RouteValues["area"] : null,
                ControllerName = actionDescriptor.RouteValues["controller"]
            };
            return controller;
        }

        /// <summary>
        /// 获取ActionModel
        /// </summary>
        /// <param name="actionDescriptor"></param>
        private static ActionModel GetActionModel(ControllerActionDescriptor actionDescriptor)
        {
            ActionModel action = new ActionModel()
            {
                Id = TypeHelper.GetMethodModuleMark(actionDescriptor.MethodInfo),
                AreaName = actionDescriptor.RouteValues.Keys.Contains("area") ?
                                    actionDescriptor.RouteValues["area"] : null,
                ControllerName = actionDescriptor.ControllerName,
                ActionName = actionDescriptor.ActionName,
                ActionFullName = actionDescriptor.DisplayName,
                RouteTemplate = actionDescriptor.AttributeRouteInfo?.Template,

                CustomAttrList = actionDescriptor.MethodInfo.CustomAttributes.Select((a, index) =>
                                        GetCustomAttribute(a, index)).ToList(),
                InputParameters = actionDescriptor.Parameters.Select((a, index) =>
                                    GetParam(((ControllerParameterDescriptor)a).ParameterInfo)).ToList(),
                ReturnParameter = GetParam(actionDescriptor.MethodInfo.ReturnParameter)
            };
            return action;
        }
        
        #endregion

        #region 公开方法

        /// <summary>
        /// 获取所有Controller
        /// </summary>
        /// <returns></returns>
        public static List<ControllerModel> GetControllerList(bool withActions = false)
        {
            //InitAllControllerNote();
            List<ControllerModel> list = controllerList;
            if (!withActions)
            {
                list = controllerList.Select(a =>
                                new ControllerModel()
                                {
                                    Id = a.Id,
                                    AreaName = a.AreaName,
                                    ControllerName = a.ControllerName
                                }).ToList();
            }
            return list;
        }

        /// <summary>
        /// 初始化AllControllerNote
        /// </summary>
        private static void InitAllControllerNote()
        {
            List<AssemblyNoteModel> noteList = new List<AssemblyNoteModel>();

            #region 处理AssemblyNote
            List<string> moduleList = controllerList.Select(controller => controller.ModuleName).Distinct().ToList();

            string baseDir = AppDomain.CurrentDomain.BaseDirectory;
            DirectoryInfo dirInfo = new DirectoryInfo(baseDir);
            for (int i = 0; i < moduleList.Count; i++)
            {
                string xmlNoteFileName = moduleList[i].Replace(".dll", ".xml");

                FileInfo fileInfo = dirInfo.GetFiles(xmlNoteFileName, SearchOption.AllDirectories).FirstOrDefault();
                if (fileInfo != null)
                {
                    AssemblyNoteModel noteModel = AssemblyHelper.GetAssemblyNote(fileInfo.FullName);
                    noteList.Add(noteModel);
                }
            }
            #endregion

            for (int i = 0; i < controllerList.Count; i++)
            {
                ControllerModel controller = controllerList[i];
                AssemblyNoteModel noteModel = noteList.FirstOrDefault(note => note.ModuleName == controller.ModuleName);
                if (noteModel == null)
                {
                    continue;
                }
                //Controller 注释
                controller.NoteModel = noteModel.MemberList.FirstOrDefault(member => member.Name == controller.Id);
                foreach (ActionModel action in controller.ActionList)
                {   //Action注释
                    action.NoteModel = noteModel.MemberList.FirstOrDefault(member => member.Name == action.Id);

                    if (action.NoteModel != null)
                    {
                        foreach (ParamModel param in action.InputParameters)
                        {   //输入参数注释
                            if (action.NoteModel.ParamList.Keys.Contains(param.Name))
                            {
                                param.Summary = action.NoteModel.ParamList[param.Name];
                            }
                        }
                        //返回参数注释
                        action.ReturnParameter.Summary = action.NoteModel.Returns;
                    }
                }
            }
        }

        /// <summary>
        /// 根据Id获取Controller
        /// </summary>
        /// <param name="controllerId">controllerId</param>
        /// <returns></returns>
        public static ControllerModel GetController(string controllerId)
        {
            ControllerModel controller = controllerList.FirstOrDefault(a=>a.Id== controllerId);
            if (controller != null)
            {
                SetControllerNote(controller);
            }
            return controller;
        }

        /// <summary>
        /// 为Controller设置注释
        /// </summary>
        /// <param name="controller"></param>
        private static void SetControllerNote(ControllerModel controller)
        {
            #region 设置Controller注释
            string baseDir = AppDomain.CurrentDomain.BaseDirectory;
            DirectoryInfo dirInfo = new DirectoryInfo(baseDir);
            string xmlNoteFileName = controller.ModuleName.Replace(".dll", ".xml");

            FileInfo fileInfo = dirInfo.GetFiles(xmlNoteFileName, SearchOption.AllDirectories).FirstOrDefault();
            if (fileInfo != null)
            {
                AssemblyNoteModel noteModel = AssemblyHelper.GetAssemblyNote(fileInfo.FullName);
                if (noteModel != null)
                {   //Controller 注释
                    controller.NoteModel = noteModel.MemberList.FirstOrDefault(member => member.Name == controller.Id);
                    foreach (ActionModel action in controller.ActionList)
                    {   //Action注释
                        action.NoteModel = noteModel.MemberList.FirstOrDefault(member => member.Name == action.Id);

                        if (action.NoteModel != null)
                        {
                            foreach (ParamModel param in action.InputParameters)
                            {   //输入参数注释
                                if (action.NoteModel.ParamList.Keys.Contains(param.Name))
                                {
                                    param.Summary = action.NoteModel.ParamList[param.Name];
                                }
                            }
                            //返回参数注释
                            action.ReturnParameter.Summary = action.NoteModel.Returns;
                        }
                    }
                }
            }
            #endregion
        }

        /// <summary>
        /// 根据actionId获取Action
        /// </summary>
        /// <param name="actionId">actionId</param>
        /// <returns></returns>
        public static ActionModel GetAction(string actionId)
        {
            ActionModel actionModel = null;
            ControllerModel controllerModel = controllerList.FirstOrDefault(controller =>
                controller.ActionList.Any(action => action.Id == actionId));
            if (controllerModel != null)
            {
                SetControllerNote(controllerModel);
                actionModel = controllerModel.ActionList.FirstOrDefault(action => action.Id == actionId);
            }
            return actionModel;
        }

        /// <summary>
        /// 根据Id获取TypeModel
        /// </summary>
        /// <param name="typeId">typeId</param>
        /// <returns></returns>
        public static PTypeModel GetPTypeModel(string typeId)
        {
            PTypeModel ptype = null;
            if (PTypeDic.ContainsKey(typeId))
            {
                PTypeModel sourcePType = PTypeDic[typeId];
                SetPTypeNote(sourcePType);

                //new 新对象,因为属性列表需要过滤 IsJsonIgnore != true
                ptype = new PTypeModel() {
                    Id = sourcePType.Id,
                    TypeName = sourcePType.TypeName,
                    Summary = sourcePType.Summary,
                    SourceType = sourcePType.SourceType,
                    IsIEnumerable = sourcePType.IsIEnumerable,
                    EnumItemId = sourcePType.EnumItemId,
                    EnumItemName = sourcePType.EnumItemName,
                    PiList = sourcePType.PiList?.Where(pi => pi.IsJsonIgnore != true).ToList()
                };
            }
            return ptype;
        }

        /// <summary>
        /// 为ptype设置注释
        /// </summary>
        /// <param name="ptype"></param>
        private static void SetPTypeNote(PTypeModel ptype)
        {
            #region 设置PType注释
            string baseDir = AppDomain.CurrentDomain.BaseDirectory;
            DirectoryInfo dirInfo = new DirectoryInfo(baseDir);
            string xmlNoteFileName = ptype.ModuleName.Replace(".dll", ".xml");

            FileInfo fileInfo = dirInfo.GetFiles(xmlNoteFileName, SearchOption.AllDirectories).FirstOrDefault();
            if (fileInfo != null)
            {
                AssemblyNoteModel noteModel = AssemblyHelper.GetAssemblyNote(fileInfo.FullName);
                if (noteModel != null)
                {   //Controller 注释
                    ptype.Summary = noteModel.MemberList.FirstOrDefault(member => member.Name == ptype.Id)?.Summary;

                    foreach (ParamModel param in ptype.PiList)
                    {
                        param.Summary = noteModel.MemberList.FirstOrDefault(member => member.Name == param.Id)?.Summary;
                    }
                }
            }
            #endregion
        }

        /// <summary>
        /// 获取所有定义类型
        /// </summary>
        /// <returns></returns>
        public static Dictionary<string, PTypeModel> GetPTypeList()
        {
            return PTypeDic;
        }
        #endregion
        
        #endregion
    }
}
