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
    /// AssemblyHelper
    /// </summary>
    internal static class AssemblyHelper
    {
        private static Dictionary<string, AssemblyNoteModel> fileAssemblyDic 
                                    = new Dictionary<string, AssemblyNoteModel>();

        /// <summary>
        /// 获取AssemblyNote
        /// </summary>
        /// <param name="xmlFilePath">xml文件路径</param>
        /// <returns></returns>
        public static AssemblyNoteModel GetAssemblyNote(string xmlFilePath)
        {
            if (fileAssemblyDic.ContainsKey(xmlFilePath))
            {
                return fileAssemblyDic[xmlFilePath];
            }
            FileInfo fileInfo = new FileInfo(xmlFilePath);
            if (!File.Exists(xmlFilePath))
            {
                return null;
            }
            AssemblyNoteModel assemblyNoteModel = null;
            lock (fileAssemblyDic)
            {
                if (fileAssemblyDic.ContainsKey(xmlFilePath))
                {
                    return fileAssemblyDic[xmlFilePath];
                }

                XmlHelper xmlHelper = new XmlHelper(xmlFilePath);
                assemblyNoteModel = xmlHelper.DeserializeNode<AssemblyNoteModel>("assembly");
                assemblyNoteModel.ModuleName = fileInfo.Name.Replace(".xml", ".dll");

                XmlNode memberListNode = xmlHelper.GetNode("members");
                XmlNode memberNode = memberListNode.FirstChild;
                while (memberNode != null)
                {
                    MemberNoteModel memberModel = GetMember(memberNode);
                    assemblyNoteModel.MemberList.Add(memberModel);
                    memberNode = memberNode.NextSibling;
                }
                if (!fileAssemblyDic.ContainsKey(xmlFilePath))
                {
                    fileAssemblyDic.Add(xmlFilePath, assemblyNoteModel);
                }
            }
            return assemblyNoteModel;
        }

        /// <summary>
        /// 解析memberNode获取Member
        /// </summary>
        /// <param name="memberNode">member节点</param>
        /// <returns></returns>
        private static MemberNoteModel GetMember(XmlNode memberNode)
        {
            MemberNoteModel memberModel = new MemberNoteModel();
            if (memberNode.Attributes != null)
            {
                foreach (XmlAttribute xmlAttribute in memberNode.Attributes)
                {
                    if (xmlAttribute.Name == "name")
                    {
                        memberModel.Name = xmlAttribute.Value;
                        break;
                    }
                }
            }
            XmlNode nextNode = memberNode.FirstChild;
            while (nextNode != null)
            {
                string nodeText = nextNode.InnerText.Trim();
                switch (nextNode.Name)
                {
                    case "summary":
                        memberModel.Summary = nodeText;
                        break;
                    case "param":
                        string paramName = null;
                        foreach (XmlAttribute xmlAttribute in nextNode.Attributes)
                        {
                            if (xmlAttribute.Name == "name")
                            {
                                paramName = xmlAttribute.Value;
                                break;
                            }
                        }
                        if (!string.IsNullOrEmpty(paramName)
                            && !memberModel.ParamList.Keys.Contains(paramName))
                        {
                            memberModel.ParamList.Add(paramName, nodeText);
                        }
                        break;
                    case "returns":
                        memberModel.Returns = nodeText;
                        break;
                }
                nextNode = nextNode.NextSibling;
            }
            return memberModel;
        }
        // Member Node 样例
        //<member name="M:Jc.ApiHelper.Areas.SysConfig.Controllers.GlobalSettingController.QueryGlobalSettingList(System.Int32,System.Int32,System.String,System.String)">
        //    <summary>
        //    查询列表
        //    </summary>
        //    <param name="pageIndex">页序号</param>
        //    <param name="pageSize">页大小</param>
        //    <param name="sort">排序字段</param>
        //    <param name="order">排序方向</param>
        //    <returns>robj</returns>
        //</member>
    }
}
