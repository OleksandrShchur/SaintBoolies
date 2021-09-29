using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SaintBoolies.Db.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SaintBoolies.Db
{
    public static class DependencyInjectionExtension
    {
        public static IServiceCollection AddDataBase(this IServiceCollection services, string connectionString)
        {
            services.AddDbContext<AppDbContext>(options =>
            {
                options.UseSqlServer(connectionString);
            });
            return services;
        }
    }
}
