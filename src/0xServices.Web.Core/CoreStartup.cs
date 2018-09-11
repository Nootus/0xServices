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
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.DependencyInjection;
    using Nootus.Fabric.Web.Core;

    public class CoreStartup : ModuleStartup<CoreDbContext>
    {
        public override void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            base.ConfigureServices(services);
        }

        public override void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseCors(builder =>
                builder.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader());
            base.Configure(app, env);
        }

        public override void ConfigureDependencyInjection(IServiceCollection services)
        {
            services.AddTransient<UserDomain>();
            services.AddTransient<CoreRepository>();
        }
    }
}
