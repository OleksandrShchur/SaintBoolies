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
        Task<ActionResult<IEnumerable<Group>>> GetGroups();
        Task<ActionResult<Group>> GetGroup(int id);
        Task<IActionResult> PutGroup(int id, Group @group);
        Task<ActionResult<Group>> PostGroup(Group @group);
        Task<IActionResult> DeleteGroup(int id);
        bool GroupExists(int id);
    }
}
