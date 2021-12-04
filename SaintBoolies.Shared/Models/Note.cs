using System;
using System.Collections.Generic;

namespace SaintBoolies.Shared.Models
{
    public class Note
    {
        public int Id { get; set; }

        public DateTime DateCreated { get; set; }

        public string Title { get; set; }

        public string Text { get; set; }

        public int GroupId { get; set; }

        public IList<Image> Images { get; set; }

    }
}
