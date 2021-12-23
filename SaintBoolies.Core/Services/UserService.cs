using AutoMapper;
using Microsoft.EntityFrameworkCore;
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
        private readonly IMapper _mapper;
        public UserService(
            AppDbContext context,
            IMapper mapper)
            : base(context)
        {
            _mapper = mapper;
        }

        public async Task<User> Create(UserRegistrationViewModel user)
        {
            if (UserExistence(user.Email))
            {
                throw new Exception("User already exist in database");
            }

            var userToAdd = _mapper.Map<UserRegistrationViewModel, User>(user);

            (userToAdd.Password, userToAdd.Salt) = PasswordHasher.GenerateHash(user.Password);

            var result = await InsertAsync(userToAdd);

            if (result.Email != user.Email)
            {
                throw new Exception("Adding failed");
            }

            return result;
        }

        public User GetByEmail(string email)
        {
            var user = _context.Users
                .Include(u => u.Groups)
                .FirstOrDefault(u => u.Email == email);

            return user;
        } 

        public List<UserListViewModel> GetAllUsers()
        {
            var users = _context.Users
                .Select(u => _mapper.Map<User, UserListViewModel>(u))
                .ToList();

            return users;
        }

        public UserProfileViewModel Authenticate(UserLoginViewModel user)
        {
            var userFromDb = GetByEmail(user.Email);

            if (userFromDb.Password != PasswordHasher.HashPassword(user.Password, userFromDb.Salt))
            {
                throw new Exception("Passwords does not match");
            }

            var mappedUser = _mapper.Map<User, UserProfileViewModel>(userFromDb);

            return mappedUser;
        }

        private bool UserExistence(string email) =>
            GetByEmail(email) != null && !string.IsNullOrEmpty(email);
    }
}
