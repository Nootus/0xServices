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
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Configuration;
    using Nootus.Fabric.Web;

    public class Startup : WebStartup
    {
        public Startup(IConfiguration configuration, IHostingEnvironment env)
            : base(configuration, env)
        {
        }
    }
}
