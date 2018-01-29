﻿//-------------------------------------------------------------------------------------------------
// <copyright file="ContractDomain.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  Business logic or pass through DB Layer
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Contract.Domains
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using _0xServices.Web.Contract.Models;
    using _0xServices.Web.Contract.Repositories;
    using Nootus.Fabric.Web.Core.Models;

    public class ContractDomain
    {
        private ContractRepository contractRepository;

        public ContractDomain(ContractRepository contractRepository)
        {
            this.contractRepository = contractRepository;
        }

        public async Task<List<ListItem<int, string>>> ContractCategoryListItemsGet()
        {
            return await this.contractRepository.ContractCategoryListItemsGet();
        }

        public async Task<JobDomainDataModel> JobDomainDataGet()
        {
            JobDomainDataModel model = new JobDomainDataModel
            {
                ContractCategoris = await this.contractRepository.ContractCategoryListItemsGet(),
            };

            return model;
        }
    }
}