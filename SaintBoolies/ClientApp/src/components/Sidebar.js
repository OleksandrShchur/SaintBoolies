import React from 'react'

const Sidebar = () => {
    return (
        <div class ='sidebar'>
          <div class="menu">
               <svg width="40" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg" class='droplist'>
                    <rect x="0" y="0" width="40" height="6" stroke=""  fill="#128EE5" stroke-width="0"/>
                    <rect x="0" y="12" width="40" height="6" stroke=""  fill="#128EE5" stroke-width="0"/>
                    <rect x="0" y="24" width="40" height="6" stroke=""  fill="#128EE5" stroke-width="0"/>
               </svg>
               <form>
                    <input type="text" placeholder="search" />
               </form>
          </div>

        <div class='notes group'>
             Notes
        </div>
        <div class='notes note'>
            note 1
        </div>
        <div class='notes note'>
            note 2
        </div>
        <div class='notes note'>
            note 3
        </div>
        <div class='notes group'>
             Books
        </div>
        <div class='notes group'>
             Movies
        </div>
        <div class='notes note'>
             new group
        </div>
      </div>
    )
}

export default Sidebar
