//-------------------------------------------------------------------------------------------------
// <copyright file="ContractStartup.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  Startup for Contract module
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Contract
{
    using _0xServices.Web.Contract.Domains;
    using _0xServices.Web.Contract.Repositories;
    using Microsoft.Extensions.DependencyInjection;
    using Nootus.Fabric.Web.Core;

    public class ContractStartup : ModuleStartup<ContractDbContext>
    {
        public override void ConfigureDependencyInjection(IServiceCollection services)
        {
            services.AddTransient<ContractDomain>();
            services.AddTransient<ContractRepository>();
        }
    }
}
