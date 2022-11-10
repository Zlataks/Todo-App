import React from 'react';
import {Container} from '@mui/material';
import TaskItem from './TaskItem';
import Input from './Input';



class MainComponent extends React.Component {

    render() {

        const data = {
            "tasks":[
               {
                  "status":"NOTACTIVE",
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
        data.tasks.forEach((item, i, arr) => {
            components.push(<TaskItem first={i === 0} last={i === arr.length - 1} text={data.tasks[i].name} checked={data.tasks[i].status !== "ACTIVE"}/>)
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
