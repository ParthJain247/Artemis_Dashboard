import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

function LineInput() {
  return (
<FormControl sx={{width:`5vw`}}>
  <InputLabel>Monthly</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value='Monthly'
    label="Age"
  >
    <MenuItem >Monthly</MenuItem>
    <MenuItem >Daily</MenuItem>
    <MenuItem >Yearly</MenuItem>
  </Select>
</FormControl>
  )
}

export default LineInput