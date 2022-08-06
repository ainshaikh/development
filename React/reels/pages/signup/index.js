import React from 'react'
import TextField from '@mui/material/TextField';
import Image from "next/Image"
import logo from "../../assets/Instagram.jpeg"

function index() {
  return (
    <div class = "signup-container">
        <div class = "signup-card">
            <img src={logo}/>
        <TextField id="outlined-basic" size='small' fullWidth
        label="Email" variant="outlined"
        margin="dense" />

        <TextField id="outlined-basic"
        size="small"
        label="Password" variant="outlined"
        fullWidth
        margin='dense' />

        <TextField id="outlined-basic"
        size="small"
        label="Fullname" variant="outlined"
        fullWidth
        margin='dense' />

        </div>
    </div>
  )
}

export default index