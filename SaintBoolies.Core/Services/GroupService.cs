using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SaintBoolies.Core.IServices;
using SaintBoolies.Db.Contexts;
using SaintBoolies.Shared.Models;
using SaintBoolies.Shared.ViewModels;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaintBoolies.Core.Services
{
    public class GroupService: BaseService<Group>, IGroupService
    {
        private readonly IMapper _mapper;
		private readonly INoteService _noteService;
        public GroupService(
            AppDbContext context,
            IMapper mapper,
			INoteService noteService)
            : base(context)
        {
            _mapper = mapper;
			_noteService = noteService;
        }

		public async Task DeleteOneGroup(int id)
		{
			var group = await _context.Groups.FindAsync(id);

			if (group != null)
			{
				var notesInGroup = _noteService.GetAllNotesInGroup(group.Id);

				foreach (var note in notesInGroup)
				{
					await _noteService.DeleteOneNote(note.Id);
				}

				_context.Groups.Remove(group);
				await _context.SaveChangesAsync();
			}
		}

		public IEnumerable<Group> GetAllGroups(int userId)
		{
			var groups = _context.Groups
				.Where(g => g.UserId == userId)
				.ToList();

			return groups; 
		}

		public async Task<Group> GetOneGroup(int id)
		{
			var group = await _context.Groups.FindAsync(id);

			return group;
		}

		public bool IfGroupExists(int id)
		{
			return _context.Groups.Any(e => e.Id == id);
		}

		public async Task<Group> PostOneGroup(GroupCreateViewModel groupViewModel)
		{
			var group = _mapper.Map<GroupCreateViewModel, Group>(groupViewModel);

			_context.Groups.Add(group);
			await _context.SaveChangesAsync();

			return group;
		}

		public async Task PutOneGroup(int id, Group group)
		{
			_context.Entry(group).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				throw;
			}

		}
	}
}
