using Jc.Database;
using Microsoft.Extensions.Primitives;
using System.Collections.Generic;

namespace Jc.ApiHelper.Mvc
{
    /// <summary>
    /// DbCenter
    /// </summary>
    public class Dbc
    {
        /// <summary>
        /// Db
        /// </summary>
        public static DbContext Db = DbContext.CreateDbContext("CodeCreator");

        /// <summary>
        /// 获取DbIQuery
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static IQuery<T> GetIQuery<T>(IEnumerable<KeyValuePair<string, StringValues>> collection) where T : class, new()
        {
            return Db.IQuery<T>(collection);
        }
    }
}