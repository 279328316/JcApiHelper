using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace Jc.ApiHelper.Model
{
    /// <summary>
    /// Node Type
    /// </summary>
    public enum NodeType
    {
        /// <summary>
        /// TsModel
        /// </summary>
        TsModel = 101,

        /// <summary>
        /// TsPage
        /// </summary>
        TsPage = 102,

        /// <summary>
        /// TsService
        /// </summary>
        TsService = 103,

        /// <summary>
        /// DotNet Dto
        /// </summary>
        DotNetDto = 201,

        /// <summary>
        /// DotNet Api
        /// </summary>
        DotNetApi = 202
    }

    /// <summary>
    /// TreeNode
    /// </summary>
    public class CodeTreeNode
    {
        /// <summary>
        /// 标题
        /// </summary>
        public string Title { get; set; } = string.Empty;

        /// <summary>
        /// Key
        /// </summary>
        public string Key { get; set; } = string.Empty;

        /// <summary>
        /// 是否叶子节点
        /// </summary>
        public bool IsLeaf { get; set; }

        /// <summary>
        /// 是否展开(叶子节点无效)
        /// </summary>
        public bool? Expanded { get; set; }

        /// <summary>
        /// 是否选中节点本身
        /// </summary>
        public bool? Selected { get; set; }

        /// <summary>
        /// 是否选中检查框
        /// </summary>
        public bool? Checked { get; set; }

        /// <summary>
        /// 标签
        /// </summary>
        public string? Icon { get; set; }

        /// <summary>
        /// 子节点
        /// </summary>
        public List<CodeTreeNode>? Children { get; set; }

        /// <summary>
        /// 数据类型
        /// </summary>
        public NodeType NodeType { get; set; }

        /// <summary>
        /// 数据
        /// </summary>
        [JsonIgnore]
        public object? Data { get; set; }
    }
}