using SaintBoolies.Shared.Models;
using System;
using System.Collections.Generic;

namespace SaintBoolies.Shared.ViewModels
{
    public class UserProfileViewModel
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Login { get; set; }
        public IList<Group> Groups { get; set; }
    }
}
