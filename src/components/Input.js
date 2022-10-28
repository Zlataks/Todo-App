import React from 'react';
import { Typography, TextField, Button   } from '@mui/material'

class Input extends React.Component {
    render() {
        return (
            <>
            <Typography variant="h1" gutterBottom sx={{
                  height: 32,
                  width: 130,
                  fontFamily: 'Roboto Mono',
                  fontSize: 24,
                  fontWeight: 700,
                  m: 'auto',
                  pt: '33px' // maybe pt in div
                }} >
                TODO List
            </Typography>
            <form className="InputWrapper">
                <TextField fullWidth placeholder="Add a new task" variant="outlined" sx={{
                     '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            border: '1px solid #000D30',
                        },
                    },
                    ".MuiInputBase-root": {
                        height: 40,
                        background: '#FFFFFF',
                        border: '1px solid #000D30',
                        borderRadius: '4px'
                    },
                    '.MuiInputBase-input': {
                        color: '#000000',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: 14,
                        cursor: 'pointer',
                        '::placeholder': {
                            color: 'rgba(40, 60, 80, 0.3)',
                        },    
                    },
                 }} />
                 <Button variant="contained" sx={{
                    background: '#F78845',
                    border: '1px solid #000000',
                    borderRadius: '4px',
                    fontFamily: 'Roboto',
                    fontWeight: 700,
                    fontSize: 14,
                    color: '#FFFFFF',
                    textTransform: 'none',
                    align: 'center',
                    ':hover': {
                        background: '#F78845',
                        opacity: 0.8
                    }
                 }}>Add</Button>
            </form>
            </>
        );
    }
}

export default Input;