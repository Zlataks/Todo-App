import React from 'react';
import './App.css';
import {Container, Checkbox, Box, Typography, IconButton} from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

class App extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: '#FFD700', padding: '86px'}} className="App">
        <Container sx={{ backgroundColor: '#FFFFFF', width: '1032px', height: '688px', 
          boxShadow: '0px 8px 24px rgba(0, 13, 48, 0.12)',  margin: 'auto'}}>
          <TaskItem />
          <TaskItem />  
        </Container>
      </div>
    );
  }
}

//86px

class TaskItem extends React.Component {
  render() {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 465,
          height: 24,
          margin: '13px auto' // first item - issue
      }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-start',
            alignItems: 'center',
          }}>
            <Checkbox {...label} defaultChecked
              sx={{
                padding: '10px',
                '&.Mui-checked': {
                  color: '#00B573'
                },
              }} 
            />
            <Typography variant="body1" gutterBottom sx={{
                height: 15,
                fontFamily: 'Helvetica Neue',
                fontSize: 16,
              }} >
              Publish Website
            </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: 23,
            width: 166,
            opacity: 0,
            ':hover': {
              opacity: 1,
            }
          }}>
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowUpIcon />
          </IconButton>
          <IconButton>
            <EditOutlinedIcon />
          </IconButton>
          <IconButton sx={{
            color: '#EB476A'
          }}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    );
  }
  }
  
export default App;