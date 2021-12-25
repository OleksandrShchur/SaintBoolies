using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SaintBoolies.Core.IServices;
using SaintBoolies.Shared.Models;
using SaintBoolies.Shared.ViewModels;

namespace SaintBoolies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class GroupController : ControllerBase
    {
        private readonly IGroupService _groupService;

        public GroupController(IGroupService groupService)
        {
            _groupService = groupService;
        }

        [HttpGet]
        [Route("GetUserGroups")]
        public IEnumerable<Group> GetGroups(int userId)
        {
            var result = _groupService.GetAllGroups(userId);

            return result;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetGroup(int id)
        {
            var group = await _groupService.GetOneGroup(id);

            return group == null
                ? NotFound()
                : Ok(group);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutGroup(int id, Group group)
        {
            if (id != group.Id)
            {
                return BadRequest();
            }

            if (!_groupService.IfGroupExists(id))
            {
                return NotFound();
            }

            await _groupService.PutOneGroup(id, group);

            return NoContent();
        }

        [HttpPost]
        public async Task<Group> PostGroup(GroupCreateViewModel group)
        {
            var result = await _groupService.PostOneGroup(group);

            return result;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGroup(int id)
        {
            await _groupService.DeleteOneGroup(id);

            return NoContent();
        }
    }
}
