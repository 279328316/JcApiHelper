using Jc.ApiHelper.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Jc.ApiHelper
{
    /// <summary>
    /// DotNetTreeModel
    /// </summary>
    public class DotNetTreeModel
    {
        /// <summary>
        /// Dtos
        /// </summary>
        public CodeTreeNode? Dtos { get; set; }

        /// <summary>
        /// Pages
        /// </summary>
        public CodeTreeNode? Pages { get; set; }

        /// <summary>
        /// Apis
        /// </summary>
        public CodeTreeNode? Apis { get; set; }
    }
}