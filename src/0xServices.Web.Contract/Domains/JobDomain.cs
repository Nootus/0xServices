//-------------------------------------------------------------------------------------------------
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

    public class JobDomain
    {
        private ContractRepository contractRepository;

        public JobDomain(ContractRepository contractRepository)
        {
            this.contractRepository = contractRepository;
        }

        public async Task<JobDomainDataModel> JobDomainData()
        {
            JobDomainDataModel model = new JobDomainDataModel
            {
                ContractCategoris = await this.contractRepository.ContractCategoryListItems(),
            };

            return model;
        }
    }
}
