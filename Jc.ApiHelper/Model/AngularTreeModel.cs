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
    /// AngularTreeModel
    /// </summary>
    public class AngularTreeModel
    {
        /// <summary>
        /// Models
        /// </summary>
        public CodeTreeNode? Models { get; set; }

        /// <summary>
        /// Pages
        /// </summary>
        public CodeTreeNode? Pages { get; set; }

        /// <summary>
        /// Services
        /// </summary>
        public CodeTreeNode? Services { get; set; }
    }
}