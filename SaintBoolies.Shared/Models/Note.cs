using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SaintBoolies.Shared.Models
{
    public class Note
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateCreated { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public int GroupId { get; set; }
        public Group Group { get; set; }
        public IList<Image> Images { get; set; }

    }
}
