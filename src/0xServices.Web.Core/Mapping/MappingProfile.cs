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
            this.CreateMap<RegisterUserModel, UserEntity>(MemberList.Source)
                .ForSourceMember(src => src.ConfirmPassword, opt => opt.Ignore())
                .ForMember(dest => dest.EmailAddress, opt => opt.MapFrom(src => src.UserName));
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
