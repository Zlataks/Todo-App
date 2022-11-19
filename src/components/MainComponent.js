import React from 'react';
import {Container, Typography} from '@mui/material';
import TaskItem from './TaskItem';
import Input from './Input';



class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           tasks: [],
           errorMessage: null
        };
    }

    /* componentDidMount() {
        fetch('https://todo-be-production.up.railway.app/tasks')
           .then((response) => response.json())
           .then(
            (result) => {
                if (result.status !== 500) {
                    this.setState({
                        tasks: result.tasks
                      });
                } else {
                    this.setState({ errorMessage: result.message });
                }
              },
           )
           .catch(error => {
            this.setState({ errorMessage: error.message });
           });
    } */

    componentDidMount() {
        fetch('https://todo-be-production.up.railway.app/tasks')
           .then((response) => {
                if (!response.ok) {
                    this.setState({ errorMessage: true });
                } else {
                    return response.json();
                }
            })
            .then(
                (result) => {
                    this.setState({
                            tasks: result.tasks
                          });
            })
            .catch(error => {
                this.setState({ errorMessage: true });
            });
    }

    render() {
        const components = [];
        if (this.state.errorMessage) {
            components.push(<Typography variant="body1" gutterBottom sx={{
                fontSize: 16,
                fontFamily: 'Helvetica Neue',
                textAlign: 'center'
              }}>
              Something went wrong. Please try later
          </Typography>)
        } else if (this.state.tasks && this.state.tasks.length) {
            this.state.tasks.forEach((item, i, arr) => {
                components.push(<TaskItem first={i === 0} last={i === arr.length - 1} text={item.name} checked={item.status !== "ACTIVE"}/>)
            })
        } else if (!(this.state.tasks || this.state.tasks.length)){
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
}

export default MainComponent;
