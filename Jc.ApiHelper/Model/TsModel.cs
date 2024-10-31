using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Jc.ApiHelper
{
    /// <summary>
    /// Ts生成方式
    /// </summary>
    internal enum TsCreateType
    {
        /// <summary>
        /// Controller
        /// </summary>
        Controller = 1,

        /// <summary>
        /// Action
        /// </summary>
        Action = 2,

        /// <summary>
        /// PType
        /// </summary>
        PType = 3,
    }

    /// <summary>
    /// TsResult生成返回对象
    /// </summary>
    public class TsResultModel
    {
        /// <summary>
        /// 结果对象Id ControllerId,ActionId,PTypeId
        /// </summary>
        public string Id { get; set; } = string.Empty;

        /// <summary>
        /// 结果对象名 ControllerName,ActionName,PTypeName
        /// </summary>
        public string Name { get; set; } = string.Empty;

        /// <summary>
        /// 备注描述
        /// </summary>
        public string? Summary { get; set; } = string.Empty;

        /// <summary>
        /// Model List
        /// </summary>
        public List<TsModel>? TsModelList { get; set; }

        /// <summary>
        /// TsCode
        /// </summary>
        public TsCodeModel? TsCode { get; set; }
    }

    /// <summary>
    /// TsModel对象
    /// </summary>
    public class TsModel
    {
        /// <summary>
        /// PTypeId
        /// </summary>
        public string Id { get; set; } = string.Empty;

        /// <summary>
        /// 参数名
        /// </summary>
        public string Name { get; set; } = string.Empty;

        /// <summary>
        /// Summary
        /// </summary>
        public string Summary { get; set; } = string.Empty;

        /// <summary>
        /// 类属性列表
        /// </summary>
        public List<TsPi> PiList { get; set; } = new List<TsPi>();
    }

    /// <summary>
    /// Ts类属性Model
    /// </summary>
    public class TsPi
    {
        /// <summary>
        /// 参数名
        /// </summary>
        public string Name { get; set; } = string.Empty;

        /// <summary>
        /// Ts参数类型
        /// </summary>
        public string TsType { get; set; } = string.Empty;

        /// <summary>
        /// Summary
        /// </summary>
        public string Summary { get; set; } = string.Empty;

        /// <summary>
        /// 属性类型是否为枚举类型
        /// </summary>
        public bool IsEnum { get; set; }
    }

    /// <summary>
    /// Ts Code Model 包含TsModel Code,Ts Service Code,ApiCode
    /// </summary>
    public class TsCodeModel
    {
        /// <summary>
        /// Ts Model Code
        /// </summary>
        public string TsModelCode { get; set; } = string.Empty;

        /// <summary>
        /// Ts Service Code
        /// </summary>
        public string TsServiceCode { get; set; } = string.Empty;

        /// <summary>
        /// Common C# Api Code
        /// </summary>
        public string ApiCode { get; set; } = string.Empty;
    }
}