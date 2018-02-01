//-------------------------------------------------------------------------------------------------
// <copyright file="UserEntity.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  DB Object for the User Entity
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Core.Entities
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using Nootus.Fabric.Web.Core.Entities;

    [Table("User", Schema = "0x")]
    public class UserEntity : BaseEntity
    {
        [Key]
        public string UserId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string EmailAddress { get; set; }

        public string CompanyName { get; set; }

        public string EthAccountAddress { get; set; }

        public string EthPassword { get; set; }

        [Column("0xBalance")]
        public double ZeroXBalance { get; set; } = 0;

        public double EthBalance { get; set; } = 0;

        public string Skills { get; set; }

        public string Bio { get; set; }
    }
}
