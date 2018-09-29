//-------------------------------------------------------------------------------------------------
// <copyright file="JobDomain.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  Business logic or pass through DB Layer
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Contract.Domains
{
    using System.Threading.Tasks;
    using _0xServices.Web.Contract.Models;
    using _0xServices.Web.Contract.Repositories;
    using Nootus.Fabric.Web.Core.Models;

    public class JobDomain
    {
        private readonly ContractRepository contractRepository;

        public JobDomain(ContractRepository contractRepository)
        {
            this.contractRepository = contractRepository;
        }

        public async Task<JobPostDomainDataModel> JobDomainData()
        {
            JobPostDomainDataModel model = new JobPostDomainDataModel
            {
                ContractCategories = await this.contractRepository.ContractCategoryListItems(),
            };

            return model;
        }

        public async Task PostJob(JobPostModel model)
        {
            await this.contractRepository.PostJob(model);
        }
    }
}
