﻿//-------------------------------------------------------------------------------------------------
// <copyright file="JobDomainDataModel.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  Categories for creating jobs/contracts
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Contract.Models
{
    using System.Collections.Generic;
    using Nootus.Fabric.Web.Core.Models;

    public class JobDomainDataModel
    {
        public List<ListItem<int, string>> ContractCategoris { get; set; }
    }
}