using System.Collections.Generic;

namespace SaintBoolies.Shared.Models
{
    public class Group
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public IList<Note> Notes { get; set; }
    }
}
