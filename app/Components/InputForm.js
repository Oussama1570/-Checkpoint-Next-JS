import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './InputForm.css'
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';






export default function BasicTextFields() {
  return (

    <div className='Form'>
    <Box className='BoxInputForm'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField className='PseudoField' label="Enter your Name" variant="standard" />
      <TextField className='MailField' label="Enter your Mail" variant="standard" />
           
    </Box>
    </div>
  );
}