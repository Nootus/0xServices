//-------------------------------------------------------------------------------------------------
// <copyright file="ContractEntity.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  DB Object for the Contract
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Contract.Entities
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using Nootus.Fabric.Web.Core.Entities;

    [Table("Contract", Schema = "0x")]
    public class ContractEntity : BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ContractId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string AcceptanceCriteria { get; set; }

        public int PublicStatusId { get; set; }

        public int ContractStatusId { get; set; }

        public double? AwardAmount { get; set; }

        public double? BudgetAmount { get; set; }

        public double? MinBidAmount { get; set; }

        public string UserId { get; set; }

        public DateTime? PostedDate { get; set; }

        public string EthContractAddress { get; set; }

        public int ContractCategoryId { get; set; }

        public DateTime? FulfillDate { get; set; }
    }
}
