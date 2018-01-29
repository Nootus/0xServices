﻿//-------------------------------------------------------------------------------------------------
// <copyright file="ContractController.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  ASP controller that handles Angular http requests
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Contract.Controllers
{
    using System.Threading.Tasks;
    using _0xServices.Web.Contract.Domains;
    using _0xServices.Web.Contract.Models;
    using Microsoft.AspNetCore.Mvc;
    using Nootus.Fabric.Web.Core.Helpers.Web;
    using Nootus.Fabric.Web.Core.Models.Web;

    public class ContractController : Controller
    {
        private ContractDomain domain;

        public ContractController(ContractDomain domain)
        {
            this.domain = domain;
        }

        [HttpGet]
        public async Task<AjaxModel<JobDomainDataModel>> JobDomainDataGet()
        {
            return await AjaxHelper.GetAsync(m => this.domain.JobDomainDataGet());
        }
    }
}