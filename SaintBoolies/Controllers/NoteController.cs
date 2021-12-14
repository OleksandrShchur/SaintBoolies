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
    public class NoteController : ControllerBase
    {
        private readonly INoteService _noteService;

        public NoteController(INoteService noteService)
        {
            _noteService = noteService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Note>>> GetNotes()
        {
            return Ok(await _noteService.GetAllNotes());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Note>> GetNote(int id)
        {
            var note = await _noteService.GetOneNote(id);
            if (note == null)
                return NotFound();

            return Ok(note);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutNote(int id, Note note)
        {
            if (id != note.Id)
            {
                return BadRequest();
            }

            if (!_noteService.IfNoteExists(id))
            {
                return NotFound();
            }

            await _noteService.PutOneNote(id, note);

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Note>> PostNote(Note note)
        {
            await _noteService.PostOneNote(note);

            return CreatedAtAction("GetNote", new { id = note.Id }, note);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNote(int id)
        {
            await _noteService.DeleteOneNote(id);

            return Ok();
        }

        [NonAction]
        private bool NoteExists(int id)
        {
            return _noteService.IfNoteExists(id);
        }
    }
}
