using System.Collections.Generic;
using System.Threading.Tasks;
using SaintBoolies.Shared.Models;
using SaintBoolies.Shared.ViewModels;

namespace SaintBoolies.Core.IServices
{
    public interface IUserService
    {
        Task<UserProfileViewModel> Create(UserRegistrationViewModel user);

        User GetByEmail(string email);

        UserProfileViewModel Authenticate(UserLoginViewModel user);
    }
}
