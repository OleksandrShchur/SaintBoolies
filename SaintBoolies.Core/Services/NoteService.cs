using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SaintBoolies.Core.IServices;
using SaintBoolies.Db.Contexts;
using SaintBoolies.Shared.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaintBoolies.Core.Services
{
    public class NoteService: BaseService<Note>, INoteService
    {
        public NoteService(AppDbContext context)
            : base(context)
        {
        }

		public async Task DeleteOneNote(int id)
		{
			var note = await _context.Notes.FindAsync(id);
            if (note != null)
            {
				_context.Notes.Remove(note);
				await _context.SaveChangesAsync();
			}
		}

		public async Task<IEnumerable<Note>> GetAllNotes()
		{
			return await _context.Notes.ToListAsync();
		}

		public async Task<Note> GetOneNote(int id)
		{
			var note = await _context.Notes.FindAsync(id);

			if (note != null)
			{
				return note;
			}

			return null;
		}

		public bool IfNoteExists(int id)
		{
			return _context.Notes.Any(e => e.Id == id);
		}

		public async Task<Note> PostOneNote(Note note)
		{
			_context.Notes.Add(note);
			await _context.SaveChangesAsync();

			return note;
		}

		public async Task PutOneNote(int id, Note note)
		{
			_context.Entry(note).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				throw;
			}
		}

		public IList<Note> GetAllNotesInGroup(int groupId)
        {
			var notes = _context.Notes
				.Where(n => n.GroupId == groupId)
				.ToList();

			return notes;
        }
	}
}
