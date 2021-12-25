import React, { useEffect } from "react";
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import NoteItem from "./NoteItem";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import ModalDeleteItem from '../Modals/ModalDeleteItem';
import ModalEditName from '../Modals/ModalEditGroupName';
import ModalAddGroup from '../Modals/ModalAddGroup';
import ModalAddNote from '../Modals/ModalAddNote';
import { useParams } from 'react-router-dom';
import api from '../../services/apiService';
import '../../styles/Sidebar.css';

const SidebarSearch = {
  margin: '12px',
  width: '256px'
};

const AccordionStyle = {
  backgroundColor: '#e4e4e4',
  boerderRadius: '0',
  borderBottom: '1px solid #128EE5'
};

const Sidebar = (props) => {
  const { handleNote, handleNoteModified } = props;
  const { userId } = useParams();
  const [data, setData] = React.useState({});

  const renderNoteList = (index) => {
    let items = [];

    for (let i = 0; i < data[index].notes?.length; i++) {
      items.push(
        <NoteItem noteId={data[index].notes[i].id} text={data[index].notes[i].title} handleNote={handleNote} onSave={onSave} content={data[index].notes[i].text} groupId={data[index].id} handleNoteModified={handleNoteModified} />
      );
    }

    return items;
  };

  const fetchData = async () => {
    const responce = await api.get(`Group/GetUserGroups?userId=${userId}`);

    if (responce.status >= 400) {
      alert("Something went wrong");
    }
    else {
      setData(responce.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSave = () => {
    fetchData();
  };

  const renderSidebar = () => {
    let items = [];

    for (let i = 0; i < data.length; i++) { // TODO: make modal window for creating new note
      items.push(
        <>
          <Accordion style={AccordionStyle}>
            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
              <Typography className='NoteGroupName'>{data[i].name}</Typography>
              <ModalEditName className='NoteGroupButton' groupId={data[i].id} onSave={onSave} title={data[i].name} />
              <ModalDeleteItem className='NoteGroupButton' id={data[i].id} title='Delete the group with all notes?' onSave={onSave} />
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {renderNoteList(i)}
                <ModalAddNote groupId={data[i].id} onSave={onSave} />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </>
      );
    }

    return items;
  };

  return (
    <div class='Sidebar'>

      <div class="SidebaHeader">
        <Box>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            color="#128EE5"
            style={SidebarSearch} />
        </Box>
      </div>

      <div className="SidebarMenu">
        {renderSidebar()}
        <div className='AddNewGroup'>
          <ModalAddGroup userId={userId} onSave={onSave} />
        </div>
      </div>

    </div>
  );
};

export default Sidebar