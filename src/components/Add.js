import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import './Add.css'

export default function Add() {
  return (
    <div className='flex-container'>
        <div className='flex-item-0'> <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    </FormGroup></div>
        <div className='flex-item-1'> Name </div>
        <div className='flex-item-2'> Username </div>
        <div className='flex-item-3'> Email </div>
        <div className='flex-item-4'> Phone </div>
        <div className='flex-item-5'> Website </div>
        <div className='flex-item-6'> Address </div>
    </div>
  )
}
