﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;

namespace Jc.ApiHelper
{
    /// <summary>
    /// JcApiHelper 使用前请调用Init方法进行初始化
    /// </summary>
    public static partial class JcApiHelper
    {
        #region Fields
        private static List<ControllerModel> controllerList = new List<ControllerModel>();

        /// <summary>
        /// 类型字典
        /// </summary>
        private static Dictionary<string, PTypeModel> PTypeDic { get; set; } = new Dictionary<string, PTypeModel>();

        /// <summary>
        /// 注释NoteDic
        /// </summary>
        private static Dictionary<string, AssemblyNoteModel> AssemblyNoteDic { get; set; } = new Dictionary<string, AssemblyNoteModel>();

        #endregion

        #region Methods

        #region Init Methods

        /// <summary>
        /// 初始化Helper 参数actionProvider.在Controller构造方法中注入IActionDescriptorCollectionProvider
        /// </summary>
        /// <param name="actionProvider"></param>
        public static void Init(IActionDescriptorCollectionProvider actionProvider)
        {
            if (controllerList.Count <= 0)
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
                    ControllerActionDescriptor? actionDescriptor = actionDescList[i] as ControllerActionDescriptor;
                    if (actionDescriptor != null)
                    {
                        ControllerModel controller = controllerList.Where(a =>
                            a.Id == TypeHelper.GetModuleMark(actionDescriptor.ControllerTypeInfo)).FirstOrDefault()!;
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
                        action.Index = controller.ActionList.Count + 1;
                        controller.ActionList.Add(action);
                    }
                }
                #endregion

                #region Controller,Action 排序
                //for (int i = 0; i < controllerList.Count; i++)
                //{
                //    controllerList[i].ActionList.Sort((a1, a2) =>
                //    {
                //        return a1.ActionName.CompareTo(a2.ActionName);
                //    });
                //}
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
                FullName = controllerTypeInfo.FullName ?? string.Empty,
                CustomAttrList = controllerTypeInfo.CustomAttributes.Select(a => GetCustomAttribute(a)).ToList(),
                ModuleName = controllerTypeInfo.Module.Name,
                AreaName = actionDescriptor.RouteValues.Keys.Contains("area") ?
                                    actionDescriptor.RouteValues["area"]! : string.Empty,
                ControllerName = actionDescriptor.RouteValues["controller"]!
            };
            return controller;
        }

        /// <summary>
        /// 获取ActionModel
        /// </summary>
        /// <param name="actionDescriptor"></param>
        private static ActionModel GetActionModel(ControllerActionDescriptor actionDescriptor)
        {
            List<CustomAttrModel> customAttrList = actionDescriptor.MethodInfo.CustomAttributes.Select((a, index) =>
                                        GetCustomAttribute(a, index)).ToList();
            List<ParamModel> inputParams = actionDescriptor.Parameters.Select((a, index) =>
                                    GetParam(((ControllerParameterDescriptor)a).ParameterInfo)).ToList();
            ParamModel returnParam = GetParam(actionDescriptor.MethodInfo.ReturnParameter);
            if (customAttrList.Any(a => a.Name == "NullableContext"))
            {
                if (!returnParam.IsNullable)
                {
                    Type attributeType = typeof(Nullable);
                    returnParam.CustomAttrList.Add(GetCustomAttribute(attributeType));
                }
            }
            ActionModel action = new ActionModel()
            {
                Id = TypeHelper.GetMethodModuleMark(actionDescriptor.MethodInfo),
                AreaName = actionDescriptor.RouteValues.Keys.Contains("area") ?
                                    actionDescriptor.RouteValues["area"]! : string.Empty,
                ControllerName = actionDescriptor.ControllerName,
                ActionName = actionDescriptor.ActionName,
                ActionFullName = actionDescriptor.DisplayName ?? string.Empty,
                RouteTemplate = actionDescriptor.AttributeRouteInfo?.Template ?? string.Empty,
                CustomAttrList = customAttrList,
                InputParameters = inputParams,
                ReturnParameter = returnParam
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
            for (int i = 0; i < controllerList.Count; i++)
            {
                ControllerModel controller = controllerList[i];
                AssemblyNoteModel? noteModel = GetAssemblyNote(controller.ModuleName);
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
        public static ControllerModel? GetController(string controllerId)
        {
            ControllerModel? controller = controllerList.FirstOrDefault(a => a.Id == controllerId);
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
            if (controller.NoteModel != null)
            {
                return;
            }

            #region 设置Controller注释
            AssemblyNoteModel? noteModel = GetAssemblyNote(controller.ModuleName);
            if (noteModel != null)
            {
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
            #endregion
        }

        /// <summary>
        /// 根据actionId获取Action
        /// </summary>
        /// <param name="actionId">actionId</param>
        /// <returns></returns>
        public static ActionModel? GetAction(string actionId)
        {
            ActionModel? actionModel = null;
            ControllerModel? controllerModel = controllerList.FirstOrDefault(controller =>
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
            PTypeModel ptype = new PTypeModel();
            if (PTypeDic.ContainsKey(typeId))
            {
                PTypeModel sourcePType = PTypeDic[typeId];
                SetPTypeNote(sourcePType);

                //new 新对象,因为属性列表需要过滤 IsJsonIgnore != true
                ptype = new PTypeModel()
                {
                    Id = sourcePType.Id,
                    TypeName = sourcePType.TypeName,
                    Summary = sourcePType.Summary,
                    SourceType = sourcePType.SourceType,
                    IsIEnumerable = sourcePType.IsIEnumerable,
                    EnumItemId = sourcePType.EnumItemId,
                    EnumItemName = sourcePType.EnumItemName,
                    PiList = sourcePType.PiList.Where(pi => pi.IsJsonIgnore != true).ToList()
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
            var memberNotes = GetAssemblyMemberList(ptype.SourceType);
            if (memberNotes.Count > 0)
            {
                ptype.Summary = memberNotes.FirstOrDefault(member => member.Name == ptype.Id)?.Summary;
                foreach (ParamModel param in ptype.PiList)
                {
                    param.Summary = memberNotes.FirstOrDefault(member => member.Name == param.Id)?.Summary;
                }
            }
            #endregion
        }

        /// <summary>
        /// 根据Type获取关联的MemberNoteModel
        /// </summary>
        /// <returns></returns>
        private static List<MemberNoteModel> GetAssemblyMemberList(Type sourceType)
        {
            List<AssemblyNoteModel> assemblyNotes = GetAssemblyNoteList(sourceType);
            List<MemberNoteModel> memberNotes = new List<MemberNoteModel>();
            foreach (AssemblyNoteModel assemblyNote in assemblyNotes)
            {
                memberNotes = memberNotes.Concat(assemblyNote.MemberList).ToList();
            }
            return memberNotes;
        }

        /// <summary>
        /// 根据ModuleName获取AssemblyNoteModel
        /// </summary>
        /// <returns></returns>
        private static List<AssemblyNoteModel> GetAssemblyNoteList(Type sourceType)
        {
            List<AssemblyNoteModel> assemblyNotes = new List<AssemblyNoteModel>();
            Type? type = sourceType;
            do
            {
                AssemblyNoteModel? assemblyNote = GetAssemblyNote(type.Module.Name);
                if (assemblyNote != null)
                {
                    assemblyNotes.Add(assemblyNote);
                }
                type = type.BaseType;
            } while (type != null && type != typeof(object));
            return assemblyNotes;
        }

        /// <summary>
        /// 根据ModuleName获取AssemblyNoteModel
        /// </summary>
        /// <param name="moduleName"></param>
        /// <returns></returns>
        private static AssemblyNoteModel? GetAssemblyNote(string moduleName)
        {
            AssemblyNoteModel? noteModel = null;
            string xmlNoteFileName = moduleName.Replace(".dll", ".xml");
            if (AssemblyNoteDic.ContainsKey(moduleName))
            {
                noteModel = AssemblyNoteDic[moduleName];
                return noteModel;
            }

            string baseDir = AppDomain.CurrentDomain.BaseDirectory;
            DirectoryInfo dirInfo = new DirectoryInfo(baseDir);

            FileInfo? fileInfo = dirInfo.GetFiles(xmlNoteFileName, SearchOption.AllDirectories).FirstOrDefault();
            if (fileInfo != null)
            {
                noteModel = AssemblyHelper.GetAssemblyNote(fileInfo.FullName);
                if (noteModel != null)
                {
                    AssemblyNoteDic.TryAdd(moduleName, noteModel);
                }
            }
            return noteModel;
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