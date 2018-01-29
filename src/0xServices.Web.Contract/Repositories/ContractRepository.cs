//-------------------------------------------------------------------------------------------------
// <copyright file="ContractRepository.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  Contract related database operations
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Contract.Repositories
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using _0xServices.Web.Contract.Entities;
    using Nootus.Fabric.Web.Core.Models;
    using Nootus.Fabric.Web.Core.Repositories;

    public class ContractRepository : BaseRepository<ContractDbContext>
    {
        public ContractRepository(ContractDbContext dbContext)
        {
            this.DbContext = dbContext;
        }

        public async Task<List<ListItem<int, string>>> ContractCategoryListItemsGet()
        {
            return await this.GetListItemsAsync<ContractCategoryEntity>(e => new ListItem<int, string> { Key = e.ContractCategoryId, Item = e.Name }, s => s.Name);
        }
    }
}
