using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SaintBoolies.Core.IServices;
using SaintBoolies.Db.Contexts;
using SaintBoolies.Shared.Models;

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
        public async Task<ActionResult<IEnumerable<Group>>> GetGroups()
        {
            return Ok(await _groupService.GetAllGroups());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Group>> GetGroup(int id)
        {
            var group = _groupService.GetOneGroup(id);
            if (group == null)
                return NotFound();

            return Ok(group);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutGroup(int id, Group @group)
        {
            if (id != @group.Id)
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
        public async Task<ActionResult<Group>> PostGroup(Group @group)
        {
            await _groupService.PostOneGroup(group);

            return CreatedAtAction("GetGroup", new { id = @group.Id }, @group);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGroup(int id)
        {
            await _groupService.DeleteOneGroup(id);

            return NoContent();
        }

        [NonAction]
        private bool GroupExists(int id)
        {
            return _groupService.IfGroupExists(id);
        }
    }
}
