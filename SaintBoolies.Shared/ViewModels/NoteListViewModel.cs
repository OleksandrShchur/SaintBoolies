using System;

namespace SaintBoolies.Shared.ViewModels
{
    public class NoteListViewModel
    {
        public int Id { get; set; }

        public DateTime DateCreated { get; set; }

        public string Title { get; set; }

        public string Text { get; set; }

        public string GroupName { get; set; }
    }
}
