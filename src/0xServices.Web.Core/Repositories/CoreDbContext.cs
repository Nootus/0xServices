//-------------------------------------------------------------------------------------------------
// <copyright file="CoreDbContext.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  EF database context for Contract tables
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Core.Repositories
{
    using _0xServices.Web.Core.Entities;
    using Microsoft.EntityFrameworkCore;
    using Nootus.Fabric.Web.Core.Repositories;

    public class CoreDbContext : BaseDbContext<CoreDbContext>
    {
        public CoreDbContext(DbContextOptions<CoreDbContext> options)
            : base(options)
        {
        }

        public DbSet<UserEntity> Users { get; set; }
    }
}
