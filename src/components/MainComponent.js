import React from 'react';
import { useEffect } from 'react';
import {Container, Typography} from '@mui/material';
import TaskItem from './TaskItem';
import Input from './Input';

import { useSelector, useDispatch } from "react-redux";

import { fetchTasks } from '../actions/tasks'

function MainComponent () {
    const tasks = useSelector(state => state.tasks.tasks.tasks);
    const errorMessage = useSelector(state => state.tasks.errorMessage);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
        
    }, [dispatch]);
    
    const components = [];
    
    if (errorMessage) {
            components.push(<Typography variant="body1" gutterBottom sx={{
                fontSize: 16,
                fontFamily: 'Helvetica Neue',
                textAlign: 'center'
              }}>
              Something went wrong. Please try later
          </Typography>)
    } else if (tasks?.length) {
            tasks.forEach((item, i, arr) => {
                components.push(<TaskItem first={i === 0} last={i === arr?.length - 1}  text={item.name} checked={item.status !== "ACTIVE"}/>)
            })
    } else if (!(tasks?.length)){
            components.push(<Typography variant="body1" gutterBottom sx={{
                fontSize: 16,
                fontFamily: 'Helvetica Neue',
                textAlign: 'center'
              }}>
              No task yet
          </Typography>)
    }
        
    return (
            <div className="Wrapper">
                <div></div>
                <Container sx={{ backgroundColor: '#FFFFFF', width: '1032px', height: '688px', 
                    boxShadow: '0px 8px 24px rgba(0, 13, 48, 0.12)',  margin: 'auto'}}>
                    <Input />
                    <div>
                        {components}
                    </div>
                </Container>
            </div>
        );
}

export default MainComponent;
