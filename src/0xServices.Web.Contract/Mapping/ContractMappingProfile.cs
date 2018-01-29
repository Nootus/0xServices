//-------------------------------------------------------------------------------------------------
// <copyright file="ContractMappingProfile.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  Automapper mapping definitions
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Contract.Mapping
{
    using _0xServices.Web.Contract.Entities;
    using _0xServices.Web.Contract.Models;
    using AutoMapper;

    public class ContractMappingProfile : Profile
    {
        public ContractMappingProfile()
        {
            this.CreateMap<ContractCategoryEntity, ContractCategoryModel>().ReverseMap();
        }

        public override string ProfileName
        {
            get
            {
                return "ContractMappingProfile";
            }
        }
    }
}
