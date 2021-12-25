using AutoMapper;
using SaintBoolies.Shared.Models;
using SaintBoolies.Shared.ViewModels;

namespace SaintBoolies.Mapping
{
    public class GroupMapperProfile : Profile
    {
        public GroupMapperProfile()
        {
            CreateMap<GroupCreateViewModel, Group>()
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Title));
        }
    }
}
