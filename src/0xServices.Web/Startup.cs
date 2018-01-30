//-------------------------------------------------------------------------------------------------
// <copyright file="Startup.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  Startup which inherits Fabric startup
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web
{
    using System.Collections.Generic;
    using _0xServices.Web.Contract;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Configuration;
    using Nootus.Fabric.Web;
    using Nootus.Fabric.Web.Core;

    public class Startup : WebStartup
    {
        private List<IModuleStartup> appModules = new List<IModuleStartup>
        {
            new ContractStartup(),
        };

        public Startup(IConfiguration configuration, IHostingEnvironment env)
            : base(configuration, env)
        {
            base.Startup(this.appModules);
        }
    }
}
