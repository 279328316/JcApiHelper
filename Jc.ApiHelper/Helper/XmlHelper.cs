using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using System.Xml;

namespace Jc.ApiHelper
{
    /// <summary>
    /// Xml文件操作Helper
    /// </summary>
    internal class XmlHelper
    {   //Xml 转义字符 < &lt;    > &gt;    & &amp;

        #region Properties
        /// <summary>
        /// xml文件路径
        /// </summary>
        private string filePath = null;

        /// <summary>
        /// xml文档
        /// </summary>
        private XmlDocument xmlDoc;

        /// <summary>
        /// xml根节点
        /// </summary>
        private XmlElement root;
        #endregion

        #region Ctor
        /// <summary>
        /// Ctor
        /// </summary>
        /// <param name="xmlFilePath">Xml文件路径</param>
        public XmlHelper(string xmlFilePath)
        {
            filePath = xmlFilePath;
            InitXmlDocument();
        }
        #endregion

        #region Methods
        /// <summary>
        /// 初始化Xml文档
        /// </summary>
        private void InitXmlDocument()
        {
            xmlDoc = new XmlDocument();
            if (File.Exists(filePath))
            {
                XmlReaderSettings settings = new XmlReaderSettings();
                settings.IgnoreComments = true;
                XmlReader reader = XmlReader.Create(filePath, settings);
                xmlDoc.Load(reader);
            }
            root = xmlDoc.DocumentElement;
        }

        /// <summary>
        /// 获取指定nodePath表达式的节点对象
        /// </summary>        
        /// <param name="nodePath">nodePath表达式
        /// 范例1: @"UserList/User", 等效于 @"//UserList/User"
        /// 范例2: @"User[UserName='a']" , []表示筛选,UserName是User下的一个子节点.
        /// 范例3: @"UserList/User[@userName='a']",@userName是User节点的属性.
        /// </param>
        public XmlNode GetNode(string nodePath)
        {
            return root?.SelectSingleNode(nodePath);
        }

        /// <summary>
        /// 获取指定nodePath表达式的节点对象
        /// </summary>        
        /// <param name="node">当前Node</param>
        /// <param name="nodePath">nodePath表达式</param>
        public XmlNode GetNode(XmlNode node, string nodePath)
        {
            return node?.SelectSingleNode(nodePath);
        }

        /// <summary>
        /// 获取指定nodePath表达式节点的值
        /// </summary>
        /// <param name="nodePath">nodePath表达式
        /// </param>
        public string GetValue(string nodePath)
        {
            return root?.SelectSingleNode(nodePath)?.InnerText;
        }

        /// <summary>
        /// 获取Node,指定nodePath表达式节点的值
        /// </summary>
        /// <param name="node">当前Node</param>
        /// <param name="nodePath">nodePath表达式</param>
        public string GetNodeValue(XmlNode node, string nodePath)
        {
            return node?.SelectSingleNode(nodePath)?.InnerText;
        }

        /// <summary>
        /// 获取指定nodePath表达式节点的属性值
        /// </summary>
        /// <param name="nodePath">nodePath表达式
        /// </param>
        /// <param name="attributeName">属性名</param>
        public string GetAttributeValue(string nodePath, string attributeName)
        {
            return root?.SelectSingleNode(nodePath)?.Attributes[attributeName]?.Value;
        }

        /// <summary>
        /// 1. 功能：新增节点
        /// 2. 使用条件：将任意节点插入到当前Xml文件中
        /// </summary>
        /// <param name="xmlNode">要插入的Xml节点</param>
        public void AppendNode(XmlNode xmlNode)
        {
            XmlNode node = xmlDoc.ImportNode(xmlNode, true);
            root?.AppendChild(node);     //将节点插入到根节点下
        }

        /// <summary>
        /// 删除指定nodePath表达式的节点
        /// </summary>        
        /// <param name="nodePath">nodePath表达式</param>
        public void RemoveNode(string nodePath)
        {
            XmlNode node = xmlDoc.SelectSingleNode(nodePath);  //获取要删除的节点            
            root.RemoveChild(node);     //删除节点
        }

        /// <summary>
        /// 自xml文件读取对象
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="xmlPath"></param>
        /// <returns></returns>
        public IEnumerable<T> DeserializeNodeCollection<T>(string xmlPath) where T : class, new()
        {
            XmlNode node = null;
            if (xmlPath != null)
            {
                node = GetNode(xmlPath);
                if (node == null)
                {
                    //throw new Exception("无效的xmlPath");
                    return null;
                }
            }
            return DeserializeNodeCollection<T>(node);
        }

        /// <summary>
        /// 自xml文件读取对象
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public IEnumerable<T> DeserializeNodeCollection<T>(XmlNode node = null) where T : class, new()
        {
            List<T> result = new List<T>();
            XmlNode firstChild;
            if (node == null)
            {
                node = root;
            }
            firstChild = node.FirstChild;
            while (firstChild != null)
            {
                result.Add(DeserializeNode<T>(firstChild));                
                firstChild = firstChild.NextSibling;
            }
            return result;
        }

        /// <summary>
        /// 自xml文件读取对象
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="xmlPath"></param>
        /// <returns></returns>
        public T DeserializeNode<T>(string xmlPath) where T : class, new()
        {
            XmlNode node = null;
            if (xmlPath != null)
            {
                node = GetNode(xmlPath);
                if (node == null)
                {
                    //throw new Exception("无效的xmlPath");
                    return null;
                }
            }
            return DeserializeNode<T>(node);
        }

        /// <summary>
        /// 自xml文件读取对象
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="node"></param>
        /// <returns></returns>
        public T DeserializeNode<T>(XmlNode node = null) where T : class, new()
        {
            T model = new T();
            XmlNode firstChild;
            if (node == null)
            {
                node = root;
            }
            firstChild = node.FirstChild;

            Dictionary<string, string> dict = new Dictionary<string, string>();

            XmlAttributeCollection xmlAttribute = node.Attributes;
            if (node.Attributes.Count > 0)
            {
                for (int i = 0; i < node.Attributes.Count; i++)
                {
                    if (!dict.Keys.Contains(node.Attributes[i].Name))
                    {
                        dict.Add(node.Attributes[i].Name, node.Attributes[i].Value);
                    }
                }
            }
            if (!dict.Keys.Contains(firstChild.Name))
            {
                dict.Add(firstChild.Name, firstChild.InnerText);
            }
            XmlNode next = firstChild.NextSibling;
            while (next != null)
            {
                if (!dict.Keys.Contains(next.Name))
                {
                    dict.Add(next.Name, next.InnerText);
                }
                else
                {
                    throw new Exception($"重复的属性Key:{next.Name}");
                }
                next = next.NextSibling;
            }


            #region 为对象赋值

            Type modelType = typeof(T);
            List<PropertyInfo> piList = modelType.GetProperties().Where(pro => (pro.PropertyType.Equals(typeof(string)) || pro.PropertyType.IsValueType) && pro.CanRead && pro.CanWrite).ToList();

            foreach (PropertyInfo pi in piList)
            {
                string dictKey = dict.Keys.FirstOrDefault(key => key.ToLower() == pi.Name.ToLower());
                if (!string.IsNullOrEmpty(dictKey))
                {
                    string value = dict[dictKey];
                    TypeConverter typeConverter = TypeDescriptor.GetConverter(pi.PropertyType);
                    if (typeConverter != null)
                    {
                        if (typeConverter.CanConvertFrom(typeof(string)))
                            pi.SetValue(model, typeConverter.ConvertFromString(value));
                        else
                        {
                            if (typeConverter.CanConvertTo(pi.PropertyType))
                                pi.SetValue(model, typeConverter.ConvertTo(value, pi.PropertyType));
                        }
                    }
                }
            }
            #endregion
            return model;
        }

        /// <summary>
        /// 保存XML文件
        /// </summary>        
        public void Save()
        {
            xmlDoc.Save(this.filePath); //保存XML文件
        }
        #endregion

        #region Static Methods

        /// <summary>
        /// 创建根节点对象
        /// </summary>
        /// <param name="xmlFilePath">Xml文件路径</param>        
        private static XmlElement CreateRootElement(string xmlFilePath)
        {
            if (!File.Exists(xmlFilePath))
            {
                throw new Exception("文件不存在");
            }
            XmlDocument xmlDocument = new XmlDocument();
            xmlDocument.Load(xmlFilePath);
            return xmlDocument.DocumentElement;
        }

        /// <summary>
        /// 获取指定nodePath表达式节点的值
        /// </summary>
        /// <param name="xmlFilePath">Xml文件的相对路径</param>
        /// <param name="nodePath">nodePath表达式</param>
        public static string GetValue(string xmlFilePath, string nodePath)
        {
            XmlElement rootElement = CreateRootElement(xmlFilePath);
            return rootElement.SelectSingleNode(nodePath).InnerText;
        }

        /// <summary>
        /// 获取指定nodePath表达式节点的属性值
        /// </summary>
        /// <param name="xmlFilePath">Xml文件的相对路径</param>
        /// <param name="nodePath">nodePath表达式</param>
        /// <param name="attributeName">属性名</param>
        public static string GetAttributeValue(string xmlFilePath, string nodePath, string attributeName)
        {
            XmlElement rootElement = CreateRootElement(xmlFilePath);
            return rootElement.SelectSingleNode(nodePath).Attributes[attributeName].Value;//返回nodePath节点的属性值
        }


        /// <summary>
        /// 序列化List到xml文件
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="list"></param>
        /// <param name="filePath"></param>
        public static void SerializeCollection<T>(IEnumerable<T> list, string filePath) where T : class, new()
        {
            XmlDocument xmlDoc = new XmlDocument();
            Type modelType = typeof(T);
            XmlDeclaration declaration = xmlDoc.CreateXmlDeclaration("1.0", "utf-8", "");
            xmlDoc.AppendChild(declaration);
            XmlElement root = xmlDoc.CreateElement(string.Format("{0}List", modelType.Name));
            xmlDoc.AppendChild(root);

            List<PropertyInfo> piList = modelType.GetProperties().Where(pro => (pro.PropertyType.Equals(typeof(string)) || pro.PropertyType.IsValueType) && pro.CanRead && pro.CanWrite).ToList();
            foreach (T item in list)
            {
                XmlNode xmlNode = xmlDoc.CreateNode(XmlNodeType.Element, modelType.Name, "");
                root.AppendChild(xmlNode);

                foreach (PropertyInfo pi in piList)
                {
                    object value = pi.GetValue(item);
                    if (value != null)
                    {
                        var propertyNode = xmlDoc.CreateNode(XmlNodeType.Element, pi.Name, "");
                        propertyNode.InnerText = value.ToString();
                        xmlNode.AppendChild(propertyNode);
                    }
                }
            }
            xmlDoc.Save(filePath);
        }

        /// <summary>
        /// 序列化对象到xml文件
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="dto"></param>
        /// <param name="xmlPathName"></param>
        public static void Serialize<T>(T dto, string xmlPathName) where T : class, new()
        {
            XmlDocument xmlDoc = new XmlDocument();
            Type modelType = typeof(T);
            XmlDeclaration declaration = xmlDoc.CreateXmlDeclaration("1.0", "utf-8", "");
            xmlDoc.AppendChild(declaration);
            XmlElement root = xmlDoc.CreateElement(modelType.Name);
            xmlDoc.AppendChild(root);

            List<PropertyInfo> piList = modelType.GetProperties().Where(pro => (pro.PropertyType.Equals(typeof(string)) || pro.PropertyType.IsValueType) && pro.CanRead && pro.CanWrite).ToList();

            foreach (PropertyInfo pi in piList)
            {
                object value = pi.GetValue(dto);
                if (value != null)
                {
                    var propertyNode = xmlDoc.CreateNode(XmlNodeType.Element, pi.Name, "");
                    propertyNode.InnerText = value.ToString();
                    root.AppendChild(propertyNode);
                }
            }
            xmlDoc.Save(xmlPathName);
        }

        /// <summary>
        /// 自xml文件读取对象
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="filePath"></param>
        /// <param name="nodePath"></param>
        /// <returns></returns>
        public static IEnumerable<T> DeserializeCollection<T>(string filePath, string nodePath = null) where T : class, new()
        {
            XmlHelper xmlHelper = new XmlHelper(filePath);
            return xmlHelper.DeserializeNodeCollection<T>(nodePath);
        }

        /// <summary>
        /// 自xml文件读取对象
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="filePath"></param>
        /// <param name="nodePath"></param>
        /// <returns></returns>
        public static T Deserialize<T>(string filePath, string nodePath = null) where T : class, new()
        {
            XmlHelper xmlHelper = new XmlHelper(filePath);
            return xmlHelper.DeserializeNode<T>(nodePath);
        }
        #endregion

    }
}
