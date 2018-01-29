//-------------------------------------------------------------------------------------------------
// <copyright file="ContractCategoryModel.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  Categories for creating jobs/contracts
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Contract.Models
{
    public class ContractCategoryModel
    {
        public int ContractCategoryId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
