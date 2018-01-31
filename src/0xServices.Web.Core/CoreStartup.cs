//-------------------------------------------------------------------------------------------------
// <copyright file="CoreStartup.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  Startup for Contract module
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Core
{
    using _0xServices.Web.Core.Domains;
    using _0xServices.Web.Core.Repositories;
    using Microsoft.Extensions.DependencyInjection;
    using Nootus.Fabric.Web.Core;

    public class CoreStartup : ModuleStartup<CoreDbContext>
    {
        public override void ConfigureDependencyInjection(IServiceCollection services)
        {
            services.AddTransient<UserDomain>();
            services.AddTransient<CoreRepository>();
        }
    }
}
