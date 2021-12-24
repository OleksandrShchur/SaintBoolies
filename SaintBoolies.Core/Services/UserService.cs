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
        private readonly IGroupService _groupService;
        private readonly static string defaultGroup = "My notes";
        public UserService(
            AppDbContext context,
            IMapper mapper,
            IGroupService groupService)
            : base(context)
        {
            _mapper = mapper;
            _groupService = groupService;
        }

        public async Task<UserProfileViewModel> Create(UserRegistrationViewModel user)
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

            // create default group for new user
            var groupViewModel = new GroupCreateViewModel()
            {
                UserId = result.Id,
                Title = defaultGroup
            };
            await _groupService.PostOneGroup(groupViewModel);
            var mappedUser = _mapper.Map<User, UserProfileViewModel>(result);

            return mappedUser;
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
