import React,{ useState } from "react";
import NoteGroup from "./NoteGroup";
import NoteItself from "./NoteItself"

const Sidebar = () => {
  var check = true;

  function toggle() {
    var s1 = document.getElementById("s1");
    var s2 = document.getElementById("s2");
    if(check){
    s1.style.width = "0px";
    s1.style.visibility = "hidden";
    s2.style.visibility = "visible";
      check = false;
    }
    else if(!check){
      s1.setAttribute("style", "width: 315px;");
  //  s1.style.visibility = "visible";
    
      check = true;
    }
    
    
  }
  
    return (
      <div class ='sidebar' id='s1'>
          <div class="menu" id="s1">
               <svg width="40" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg" class='droplist dl1' id="s2" onClick={toggle}>
                    <rect x="0" y="0" width="40" height="6" stroke=""  fill="#128EE5" stroke-width="0"/>
                    <rect x="0" y="12" width="40" height="6" stroke=""  fill="#128EE5" stroke-width="0"/>
                    <rect x="0" y="24" width="40" height="6" stroke=""  fill="#128EE5" stroke-width="0"/>
               </svg>
               <form id='s1'>
                    <input type="text" placeholder="search"/>
               </form>
               
          </div>
        <NoteGroup text='Notes'/>
        <NoteItself text='note 1'/>
        <NoteItself text='note 2'/>
        <NoteItself text='note 3'/>
        <NoteGroup text=' Books'/>
        <NoteGroup text='Movies'/>
       
        <div class='notes note newgrp'>
          <a href='#'>new group</a>
        </div>
        
      </div>
    );
  };

export default Sidebar