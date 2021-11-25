using Microsoft.EntityFrameworkCore;
using SaintBoolies.Db.Contexts;
using System;

namespace SaintBoolies.Test
{
    internal class ConnectionFactory : IDisposable
    {
        private bool disposedValue = false;

        public AppDbContext CreateContextForInMemory()
        {
            var option = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: "notebookdb")
                .Options;

            var context = new AppDbContext(option);

            if (context != null)
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();
            }

            return context;
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                disposedValue = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
        }
    }
}
