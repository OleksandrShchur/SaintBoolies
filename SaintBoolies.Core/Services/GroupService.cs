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
        public GroupService(
            AppDbContext context,
            IMapper mapper)
            : base(context)
        {
            _mapper = mapper;
        }

		public async Task DeleteOneGroup(int id)
		{
			var group = await _context.Groups.FindAsync(id);
			if (group != null)
			{
				_context.Groups.Remove(group);
				await _context.SaveChangesAsync();
			}

		}

		public IEnumerable<Group> GetAllGroups()
		{
			var groups = _context.Groups
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
