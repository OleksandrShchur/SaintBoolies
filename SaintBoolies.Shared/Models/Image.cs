﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SaintBoolies.Shared.Models
{
    public class Image
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public int NoteId { get; set; }
        public Note Note { get; set; }

    }
}
