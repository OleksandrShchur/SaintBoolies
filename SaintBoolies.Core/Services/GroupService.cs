using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SaintBoolies.Core.IServices;
using SaintBoolies.Db.Contexts;
using SaintBoolies.Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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

		public async Task<IEnumerable<Group>> GetAllGroups()
		{
			return await _context.Groups.ToListAsync();
		}

		public async Task<Group> GetOneGroup(int id)
		{
			var group = await _context.Groups.FindAsync(id);

			if (group == null)
			{
				return null;
			}

			return group;
		}

		public bool IfGroupExists(int id)
		{
			return _context.Groups.Any(e => e.Id == id);
		}

		public async Task PostOneGroup(Group group)
		{
			_context.Groups.Add(group);
			await _context.SaveChangesAsync();
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
