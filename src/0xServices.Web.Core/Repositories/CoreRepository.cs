//-------------------------------------------------------------------------------------------------
// <copyright file="CoreRepository.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  Contract related database operations
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Core.Repositories
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Nootus.Fabric.Web.Core.Models;
    using Nootus.Fabric.Web.Core.Repositories;

    public class CoreRepository : BaseRepository<CoreDbContext>
    {
        public CoreRepository(CoreDbContext dbContext)
        {
            this.DbContext = dbContext;
        }
    }
}
