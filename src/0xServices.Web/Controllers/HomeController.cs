//-------------------------------------------------------------------------------------------------
// <copyright file="HomeController.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  Default controller
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Controllers
{
    using System.Diagnostics;
    using Microsoft.AspNetCore.Mvc;

    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return this.View();
        }
    }
}
