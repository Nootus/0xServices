//-------------------------------------------------------------------------------------------------
// <copyright file="ContractStatusEnum.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  Categories for creating jobs/contracts
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Contract.Models
{
    public enum ContractStatusEnum
    {
        /// <summary>Job</summary>
        Job = 1,

        /// <summary>Contract</summary>
        Contract = 2,

        /// <summary>Closed status</summary>
        Closed = 3,
    }
}