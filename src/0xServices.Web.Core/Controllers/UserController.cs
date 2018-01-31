//-------------------------------------------------------------------------------------------------
// <copyright file="UserController.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  ASP controller that handles Angular http requests
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Core.Controllers
{
    using System.Threading.Tasks;
    using _0xServices.Web.Core.Common;
    using _0xServices.Web.Core.Domains;
    using Microsoft.AspNetCore.Mvc;
    using Nootus.Fabric.Web.Core.Helpers.Web;
    using Nootus.Fabric.Web.Core.Models.Web;
    using Nootus.Fabric.Web.Security.Models;

    public class UserController : Controller
    {
        private UserDomain domain;

        public UserController(UserDomain domain)
        {
            this.domain = domain;
        }

        [HttpPost]
        public async Task<AjaxModel<ProfileModel>> Register([FromBody] RegisterUserModel model)
        {
            return await AjaxHelper.GetAsync(m => this.domain.Register(model), Messages.RegisterUserSuccess);
        }
    }
}
