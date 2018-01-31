//-------------------------------------------------------------------------------------------------
// <copyright file="MappingProfile.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  Automapper mapping definitions
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Core.Mapping
{
    using _0xServices.Web.Core.Entities;
    using AutoMapper;
    using Nootus.Fabric.Web.Security.Models;

    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            this.CreateMap<UserEntity, RegisterUserModel>().ReverseMap();
        }

        public override string ProfileName
        {
            get
            {
                return "CoreMappingProfile";
            }
        }
    }
}
