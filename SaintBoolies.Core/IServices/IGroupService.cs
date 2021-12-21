using Microsoft.AspNetCore.Mvc;
using SaintBoolies.Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SaintBoolies.Core.IServices
{
    public interface IGroupService
    {
        Task<IEnumerable<Group>> GetAllGroups();

        Task<Group> GetOneGroup(int id);

        Task PutOneGroup(int id, Group group);

        Task PostOneGroup(Group group);

        Task DeleteOneGroup(int id);

        bool IfGroupExists(int id);
    }
}
