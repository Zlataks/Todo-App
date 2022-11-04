import React from 'react';
import {Checkbox, Box, Typography, IconButton} from '@mui/material';
import {KeyboardArrowDown, KeyboardArrowUp, EditOutlined, DeleteOutlineOutlined} from '@mui/icons-material';;

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
            margin: 'auto',
            paddingTop: '13px'
        }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-start',
              alignItems: 'center',
            }}>
              <Checkbox {...label} defaultChecked={this.props.checked}
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
                {this.props.text}
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
            <IconButton disabled={this.props.last}>
              <KeyboardArrowDown />
            </IconButton>
            <IconButton disabled={this.props.first}>
              <KeyboardArrowUp />
            </IconButton>
            <IconButton>
              <EditOutlined />
            </IconButton>
            <IconButton sx={{
              color: '#EB476A'
            }}>
              <DeleteOutlineOutlined />
            </IconButton>
          </Box>
        </Box>
      );
    }
}

export default TaskItem;