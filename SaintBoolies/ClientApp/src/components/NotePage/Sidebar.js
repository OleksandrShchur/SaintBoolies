import React from "react";
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import NoteItem from "./NoteItem"

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import ModalDeleteItem from '../Modals/ModalDeleteItem'
import ModalEditName from '../Modals/ModalEditName'
import ModalAddNewItem from '../Modals/ModalAddNewItem'

import '../../styles/Sidebar.css'

const SidebarSearch = {
  margin: '12px',
  width: '256px'
}

const AccordionStyle = {
  backgroundColor: '#e4e4e4',
  boerderRadius: '0',
  borderBottom: '1px solid #128EE5'
}

const Sidebar = () => {
  return (
    <div class='Sidebar'>

      <div class="SidebaHeader">
        <Box>
          <TextField 
            label="Search" 
            variant="outlined" 
            size="small" 
            color="#128EE5"
            style={SidebarSearch}/>
        </Box>
      </div>

      <div className="SidebarMenu">
        <Accordion style={AccordionStyle}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography className='NoteGroupName'>Study</Typography>
            <ModalEditName className='NoteGroupButton'/> 
            <ModalDeleteItem className='NoteGroupButton'/>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
            <NoteItem text='Math' />
            <NoteItem text='PHP' />
            <NoteItem text='Python' />
            <NoteItem text='Docker' />
            <NoteItem text='Other notes' />
            <ModalAddNewItem />
          </Typography> 
          </AccordionDetails>
        </Accordion>

        <Accordion style={AccordionStyle}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography className='NoteGroupName'>Work</Typography>
            <ModalEditName className='NoteGroupButton'/> 
            <ModalDeleteItem className='NoteGroupButton'/>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
            <NoteItem text='Statistcs' />
            <NoteItem text='Info' />
            <NoteItem text='Notes' />
            <ModalAddNewItem />
          </Typography> 
          </AccordionDetails>
        </Accordion>

        <Accordion style={AccordionStyle}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography className='NoteGroupName'>Other</Typography>
            <ModalEditName className='NoteGroupButton'/> 
            <ModalDeleteItem className='NoteGroupButton'/>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
            <NoteItem text='Dreams' />
            <ModalAddNewItem />
          </Typography> 
          </AccordionDetails>
        </Accordion>
        <div className='AddNewGroup'>  
          <ModalAddNewItem/>
        </div>
      </div>

    </div>
  );
};

export default Sidebar