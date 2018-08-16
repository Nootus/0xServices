//-------------------------------------------------------------------------------------------------
// <copyright file="ContractDbContext.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  EF database context for Contract tables
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Contract.Repositories
{
    using _0xServices.Web.Contract.Entities;
    using Microsoft.EntityFrameworkCore;
    using Nootus.Fabric.Web.Core.Repositories;

    public class ContractDbContext : BaseDbContext<ContractDbContext>
    {
        public ContractDbContext(DbContextOptions<ContractDbContext> options)
            : base(options)
        {
        }

        public DbSet<ContractCategoryEntity> ContractCategories { get; set; }

        public DbSet<ContractEntity> Contracts { get; set; }
    }
}
