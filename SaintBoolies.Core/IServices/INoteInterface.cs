using Microsoft.AspNetCore.Mvc;
using SaintBoolies.Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SaintBoolies.Core.IServices
{
    public interface INoteInterface
    {
        Task<ActionResult<IEnumerable<Note>>> GetNotes();
        Task<ActionResult<Note>> GetNote(int id);
        Task<IActionResult> PutNote(int id, Note note);
        Task<ActionResult<Note>> PostNote(Note note);
        Task<IActionResult> DeleteNote(int id);
        bool NoteExists(int id);
    }
}
