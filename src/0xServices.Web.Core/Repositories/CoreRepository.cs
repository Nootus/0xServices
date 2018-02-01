//-------------------------------------------------------------------------------------------------
// <copyright file="CoreRepository.cs" company="Nootus">
//  Copyright (c) Nootus. All rights reserved.
// </copyright>
// <description>
//  Contract related database operations
// </description>
//-------------------------------------------------------------------------------------------------
namespace _0xServices.Web.Core.Repositories
{
    using System.Threading.Tasks;
    using _0xServices.Web.Core.Entities;
    using AutoMapper;
    using Nootus.Fabric.Web.Core.Context;
    using Nootus.Fabric.Web.Core.Repositories;
    using Nootus.Fabric.Web.Security.Models;

    public class CoreRepository : BaseRepository<CoreDbContext>
    {
        public CoreRepository(CoreDbContext dbContext)
        {
            this.DbContext = dbContext;
        }

        public async Task UserSave(RegisterUserModel model)
        {
            UserEntity entity = Mapper.Map<RegisterUserModel, UserEntity>(model);
            entity.UserId = NTContext.Context.UserId;
            this.DbContext.Users.Add(entity);
            await this.DbContext.SaveChangesAsync();
        }
    }
}
