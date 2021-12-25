using SaintBoolies.Shared.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SaintBoolies.Core.IServices
{
    public interface INoteService
    {
        Task<IEnumerable<Note>> GetAllNotes();

        Task<Note> GetOneNote(int id);

        Task PutOneNote(int id, Note note);

        Task<Note> PostOneNote(Note note);

        Task DeleteOneNote(int id);

        bool IfNoteExists(int id);

        IList<Note> GetAllNotesInGroup(int groupId);
    }
}
