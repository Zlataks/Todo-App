import React from 'react';
import './App.css';
import Container from '@mui/material/Container';

class App extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: '#FFD700'}} className="App">
        <Container sx={{ backgroundColor: '#FFFFFF', width: '1032px', height: '688px', 
          boxShadow: '0px 8px 24px rgba(0, 13, 48, 0.12)',  margin: '86px auto'}} />
      </div>
    );
  }
}

export default App;