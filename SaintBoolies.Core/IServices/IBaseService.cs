using System.Threading.Tasks;

namespace SaintBoolies.Core.IServices
{
    public interface IBaseService<T>
        where T : class
    {
        Task<T> InsertAsync(T entity);

        //T Update(T entity); // TODO

        //T Delete(T entity); // TODO
    }
}
