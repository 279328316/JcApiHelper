using Jc.ApiHelper.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Jc.ApiHelper
{
    internal class CodeGenerator
    {
        ControllerModel controller;

        public CodeGenerator(ControllerModel controller)
        {
            this.controller = controller;
        }

        /// <summary>
        /// 获取Code File Tree
        /// </summary>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        public CodeTreeModel GetCodeTree()
        {
            CodeTreeModel codeTree = new CodeTreeModel()
            {
                Controller = controller,
            };

            GetAngularTree();

            return codeTree;
        }

        public AngularTreeModel GetAngularTree()
        {
            AngularTreeModel tree = new AngularTreeModel()
            {
                Models = GetModelsNode(),
                Pages = GetPagesNode(),
                Services = GetServicesNode()
            };
            return tree;
        }

        /// <summary>
        /// 获取Models Tree Node
        /// </summary>
        /// <returns></returns>
        public CodeTreeNode GetModelsNode()
        {
            CodeTreeNode modelsNode = new CodeTreeNode()
            {
                Key = "models",
                Title = "models",
                NodeType = NodeType.TsModel,
                Expanded = true
            };

            List<TsModel> models = new List<TsModel>();
            if (models.Count > 0)
            {
                List<CodeTreeNode> modelLeafs = new List<CodeTreeNode>();
                foreach (TsModel model in models)
                {
                    string title = TsHelper.GetTsModelTitle(model.Name);
                    CodeTreeNode? existsNode = modelLeafs.FirstOrDefault(a => a.Title == title);
                    if (existsNode != null)
                    {
                        TsModel tsModel = (existsNode.Data as TsModel)!;
                        if (tsModel.PiList.Count < model.PiList.Count)
                        {
                            existsNode.Data = model;
                            existsNode.Key = model.Id;
                        }
                    }
                    else
                    {
                        CodeTreeNode node = new CodeTreeNode()
                        {
                            Title = title,
                            Key = model.Id,
                            NodeType = NodeType.TsModel,
                            Data = model
                        };
                        modelLeafs.Add(node);
                    }
                }
                modelsNode.Children = modelLeafs;
            }
            return modelsNode;
        }

        /// <summary>
        /// 获取Pages Tree Node
        /// </summary>
        /// <returns></returns>
        public CodeTreeNode GetPagesNode()
        {
            CodeTreeNode pagesNode = new CodeTreeNode()
            {
                Key = "pages",
                Title = "pages",
                Expanded = true
            };
            List<CodeTreeNode> pageNodes = new List<CodeTreeNode>();

            pagesNode.Children = pageNodes;
            return pagesNode;
        }

        /// <summary>
        /// 获取Services Tree Node
        /// </summary>
        /// <returns></returns>
        public CodeTreeNode GetServicesNode()
        {
            CodeTreeNode servicesNode = new CodeTreeNode()
            {
                Key = "services",
                Title = "services",
                Expanded = true,
                Children = new List<CodeTreeNode>()
                {
                    new CodeTreeNode()
                    {
                        Title = $"{TsHelper.GetTsServiceTitle(controller.ControllerName)}.ts",
                        Key = $"{controller.Id}_service",
                        NodeType = NodeType.TsService
                    }
                }
            };
            return servicesNode;
        }
    }
}