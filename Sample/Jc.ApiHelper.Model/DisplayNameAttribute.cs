using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;

namespace Jc.ApiHelper.Model
{
    /// <summary>
    /// DisplayNameAttribute
    /// </summary>
    public class DisplayNameAttribute : Attribute
    {
        private string name;

        /// <summary>
        /// 显示名称
        /// </summary>
        public string DisplayName 
        { 
            get { return name; } 
            set { name = value; } 
        }

        /// <summary>
        /// 显示名称
        /// </summary>
        public string Name
        {
            get { return name; }
            set { name = value; }
        }


        public DisplayNameAttribute()
        {
        }

        public DisplayNameAttribute(string displayName)
        {
            this.DisplayName = displayName;
        }
    }
}
