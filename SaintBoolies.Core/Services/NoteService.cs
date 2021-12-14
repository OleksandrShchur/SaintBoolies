using AutoMapper;
using SaintBoolies.Db.Contexts;
using SaintBoolies.Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SaintBoolies.Core.Services
{
    public class NoteService: BaseService<Note>
    {
        private readonly IMapper _mapper;
        public NoteService(
            AppDbContext context,
            IMapper mapper)
            : base(context)
        {
            _mapper = mapper;
        }
    }
}
