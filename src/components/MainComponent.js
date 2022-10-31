import React from 'react';
import {Container} from '@mui/material';
import TaskItem from './TaskItem';
import Input from './Input';

class MainComponent extends React.Component {
    render() {
        return (
            <div className="Wrapper">
                <Container sx={{ backgroundColor: '#FFFFFF', width: '1032px', height: '688px', 
                    boxShadow: '0px 8px 24px rgba(0, 13, 48, 0.12)',  margin: 'auto'}}>
                    <Input />
                    <TaskItem />
                    <TaskItem />  
                </Container>
            </div>
        );
    }
}

export default MainComponent;
