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
    /// TsResult生成返回对象
    /// </summary>
    public class CodeTreeModel
    {
        /// <summary>
        /// Controller对象
        /// </summary>
        public ControllerModel Controller { get; set; } = new ControllerModel();

        /// <summary>
        /// Angular Code Tree
        /// </summary>
        public AngularTreeModel? AngularTree { get; set; }

        /// <summary>
        /// .Net Code Tree
        /// </summary>
        public DotNetTreeModel? DotNetTree { get; set; }
    }
}