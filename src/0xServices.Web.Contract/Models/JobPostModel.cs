//-------------------------------------------------------------------------------------------------
// <copyright file="JobPostModel.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  Model for job posting
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Contract.Models
{
    public class JobPostModel
    {
        public int ContractId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }
    }
}
