using System.Collections.Generic;
using System.Threading.Tasks;
using SaintBoolies.Shared.Models;
using SaintBoolies.Shared.ViewModels;

namespace SaintBoolies.Core.IServices
{
    public interface IUserService
    {
        Task<User> Create(UserRegistrationViewModel user);

        User GetByEmail(string email);

        List<User> GetAllUsers();

        User Authenticate(UserLoginViewModel user);
    }
}
