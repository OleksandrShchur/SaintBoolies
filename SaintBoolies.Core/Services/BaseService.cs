using Microsoft.EntityFrameworkCore;
using SaintBoolies.Core.IServices;
using SaintBoolies.Db.Contexts;
using System;
using System.Threading.Tasks;

namespace SaintBoolies.Core.Services
{
    public class BaseService<T> : IBaseService<T>
        where T : class
    {
        protected readonly AppDbContext _context;

        public BaseService(AppDbContext context)
        {
            _context = context;
        }

        protected DbSet<T> Entities { get => _context.Set<T>(); }

        public async Task<T> InsertAsync(T entity)
        {
            if (entity == null)
            {
                throw new NotImplementedException();
            }

            Entities.Add(entity);
            await _context.SaveChangesAsync();

            return entity;
        }
    }
}
