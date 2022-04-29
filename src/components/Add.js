import * as React from 'react';
import {useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import './Add.css'

export default function Add() {
    const[user,setUser]=React.useState([{}])
  return (
    <div className='flex-container'>
        <div className='flex-item'> <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} />
    </FormGroup></div>
        <div className='flex-item'> Name </div>
        <div className='flex-item'> Username </div>
        <div className='flex-item'> Email </div>
        <div className='flex-item'> Phone </div>
        <div className='flex-item'> Website </div>
        <div className='flex-item'> Address </div>
    </div>
  )
}
