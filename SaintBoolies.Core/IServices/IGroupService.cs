using SaintBoolies.Shared.Models;
using SaintBoolies.Shared.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SaintBoolies.Core.IServices
{
    public interface IGroupService
    {
        IEnumerable<Group> GetAllGroups(int userId);

        Task<Group> GetOneGroup(int id);

        Task PutOneGroup(int id, Group group);

        Task<Group> PostOneGroup(GroupCreateViewModel group);

        Task DeleteOneGroup(int id);

        bool IfGroupExists(int id);
    }
}
