import React from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <GlobalStyles
        styles={{
          body: { backgroundColor: '#FFD700', border: '1px solid #000000' }
        }}
      />
      <Container sx={{ backgroundColor: '#FFFFFF', width: '1032px', height: '688px', 
        boxShadow: '0px 8px 24px rgba(0, 13, 48, 0.12)',  margin: '86px auto'}} />
    </div>
  );
}

export default App;
