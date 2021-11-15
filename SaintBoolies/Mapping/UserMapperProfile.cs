using AutoMapper;
using SaintBoolies.Shared.Models;
using SaintBoolies.Shared.ViewModels;

namespace SaintBoolies.Mapping
{
    public class UserMapperProfile : Profile
    {
        public UserMapperProfile()
        {
            CreateMap<User, UserRegistrationViewModel>();

            CreateMap<UserRegistrationViewModel, User>();

            CreateMap<User, UserLoginViewModel>();

            CreateMap<UserLoginViewModel, User>();

            CreateMap<User, UserProfileViewModel>();

            CreateMap<UserProfileViewModel, User>();
        }
    }
}
