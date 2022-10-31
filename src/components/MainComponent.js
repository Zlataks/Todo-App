import React from 'react';
import {Container} from '@mui/material';
import TaskItem from './TaskItem';
import Input from './Input';



class MainComponent extends React.Component {

    render() {
        const tasks = ['Create mock date', 'Show list of tasks', 'Change style for first and last items'];

        const components = [];

        tasks.forEach((item, i, arr) => {
            if (i === 0) {
                components.push(<TaskItem first={true} text={item}/>)
            } else if (i === arr.length - 1) {
                components.push(<TaskItem last={true} text={item}/>)
            } else {
                components.push(<TaskItem text={item}/>)
            }
        })

        return (
            <div className="Wrapper">
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
}

export default MainComponent;
