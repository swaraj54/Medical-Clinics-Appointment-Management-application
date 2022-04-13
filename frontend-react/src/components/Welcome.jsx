import React from 'react';
import {NavLink} from "react-router-dom";
import {Button} from '@mui/material';

const Welcome = () => {
  return (
    <div>
        <div className="wc">
            <h1>Welcome to Apollo Hospital 🎊</h1>
            <h1>Here you can book Doctors Appoitments</h1><br/><br/>
            <NavLink to="/doctors" style={{color:"white"}} >
            <Button variant="outlined">Click to Book Appoitments here</Button>
            </NavLink><br/> <br/>
            <NavLink to="/appoitments" style={{mt : 2 , color:"white"}} >
            <Button variant="outlined">Click to Check Appoitments History</Button>
            </NavLink>
        </div>
    </div>
  )
}

export default Welcome;