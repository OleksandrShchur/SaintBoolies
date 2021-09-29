﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SaintBoolies.Shared.Models
{
    public class User
    {
        public int Id { get; set; }
        public string  Email { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string Salt { get; set; }
        public IList<Group> Groups { get; set; }
    }
}
