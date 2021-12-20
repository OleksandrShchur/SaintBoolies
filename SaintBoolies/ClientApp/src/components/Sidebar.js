import React from "react";
import NoteGroup from "./NoteGroup";
import NoteItself from "./NoteItself"

const Sidebar = () => {
  return (
    <div class='sidebar'>
      <div class="menu">
        <svg width="40" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg" class='droplist dl1'>
          <rect x="0" y="0" width="40" height="6" stroke="" fill="#128EE5" stroke-width="0" />
          <rect x="0" y="12" width="40" height="6" stroke="" fill="#128EE5" stroke-width="0" />
          <rect x="0" y="24" width="40" height="6" stroke="" fill="#128EE5" stroke-width="0" />
        </svg>
        <form>
          <input type="text" placeholder="search" />
        </form>

      </div>
      <NoteGroup text='Notes' />
      <NoteItself text='note 1' />
      <NoteItself text='note 2' />
      <NoteItself text='note 3' />
      <NoteGroup text=' Books' />
      <NoteGroup text='Movies' />

      <div class='notes note newgrp'>
        <a>new group</a>
      </div>

    </div>
  );
};

export default Sidebar