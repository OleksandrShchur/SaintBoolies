using AutoMapper;
using SaintBoolies.Db.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace SaintBoolies.Core.Services
{
    public class GroupService: BaseService<Group>
    {
        private readonly IMapper _mapper;
        public GroupService(
            AppDbContext context,
            IMapper mapper)
            : base(context)
        {
            _mapper = mapper;
        }


    }
}
