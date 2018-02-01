//-------------------------------------------------------------------------------------------------
// <copyright file="UserDomain.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  Business logic or pass through DB Layer
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Core.Domains
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using _0xServices.Web.Core.Repositories;
    using Nootus.Fabric.Web.Core.Models;
    using Nootus.Fabric.Web.Security.Domain;
    using Nootus.Fabric.Web.Security.Models;

    public class UserDomain
    {
        private AccountDomain accountDomain;
        private CoreRepository coreRepository;

        public UserDomain(AccountDomain accountDomain, CoreRepository coreRepository)
        {
            this.accountDomain = accountDomain;
            this.coreRepository = coreRepository;
        }

        public async Task<ProfileModel> Register(RegisterUserModel model)
        {
            ProfileModel profile = await this.accountDomain.Register(model);
            await this.coreRepository.UserSave(model);
            return profile;
        }
    }
}
