import React from 'react';
import {Container} from '@mui/material';
import TaskItem from './TaskItem';
import Input from './Input';



class MainComponent extends React.Component {

    render() {

        const date = {
            "tasks":[
               {
                  "status":"ACTIVE",
                  "priority":true,
                  "order":54,
                  "name":"Create mock date",
                  "id":"6360035bbeefc90012c2e096"
               },
               {
                "status":"ACTIVE",
                "priority":true,
                "order":54,
                "name":"Show list of tasks",
                "id":"7360035bbeefc90012c2e096"
               },
               {
                "status":"ACTIVE",
                "priority":true,
                "order":54,
                "name":"Change style for first and last items",
                "id":"8360035bbeefc90012c2e096"
               }
            ]
        };

        const components = [];

        let tasks = date.tasks;

        for (let i = 0; i < tasks.length; i++) {
            if (i === 0) {
                components.push(<TaskItem first={true} text={tasks[i].name}/>)
            } else if (i === tasks.length - 1) {
                components.push(<TaskItem last={true} text={tasks[i].name}/>)
            } else {
                components.push(<TaskItem text={tasks[i].name}/>)
            }
        }

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
