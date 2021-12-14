using Microsoft.AspNetCore.Mvc;
using SaintBoolies.Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SaintBoolies.Core.IServices
{
    public interface INoteService
    {
        Task<IEnumerable<Note>> GetAllNotes();

        Task<Note> GetOneNote(int id);

        Task PutOneNote(int id, Note note);

        Task PostOneNote(Note note);

        Task DeleteOneNote(int id);

        bool IfNoteExists(int id);
    }
}
