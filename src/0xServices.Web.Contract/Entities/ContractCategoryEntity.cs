//-------------------------------------------------------------------------------------------------
// <copyright file="ContractCategoryEntity.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  DB Object for the ContractCategory
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Contract.Entities
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using Nootus.Fabric.Web.Core.Entities;

    [Table("ContractCategory", Schema = "0x")]
    public class ContractCategoryEntity : BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ContractCategoryId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
