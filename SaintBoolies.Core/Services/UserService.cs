using SaintBoolies.Core.Infrustructure;
using SaintBoolies.Core.IServices;
using SaintBoolies.Db.Contexts;
using SaintBoolies.Shared.Models;
using SaintBoolies.Shared.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaintBoolies.Core.Services
{
    public class UserService : BaseService<User>, IUserService
    {
        public UserService(
            AppDbContext context)
            : base(context)
        {

        }

        public async Task<User> Create(UserRegistrationViewModel user)
        {
            if (UserExistence(user.Email))
            {
                throw new Exception("User already exist in database");
            }

            var newUser = new User();
            newUser.Login = user.NickName;
            (newUser.Password, newUser.Salt) = PasswordHasher.GenerateHash(user.Password);

            var result = await InsertAsync(newUser);

            if (result.Email != user.Email || result.Id == 0 || result.Id == null)
            {
                throw new Exception("Adding failed");
            }

            return result;
        }

        public User GetByEmail(string email) => _context.Users.FirstOrDefault(u => u.Email == email);

        public List<User> GetAllUsers() => _context.Users.ToList();

        public User Authenticate(UserLoginViewModel user)
        {
            var userFromDb = GetByEmail(user.Email);

            if (userFromDb.Password != PasswordHasher.HashPassword(user.Password, userFromDb.Salt))
            {
                throw new Exception("Passwords does not match");
            }

            return userFromDb;
        }

        private bool UserExistence(string email) =>
            GetByEmail(email) != null && !string.IsNullOrEmpty(email);
    }
}
