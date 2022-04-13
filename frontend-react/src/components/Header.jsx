import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {AppBar,Typography, Toolbar,Tabs, Tab,Button} from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Header = () => {
    const [value, setValue]= useState({});
  return (
    <div>
        <AppBar position="sticky">
        <Toolbar>
                <NavLink to="/" style={{color:"white"}} >
                <Typography><LocalHospitalIcon/><Tab label="Home"/></Typography>  
                </NavLink>
                <Tabs sx={{ml:"auto"}} textColor="inherit" value={value} indicatorColor="secondary" onChange={(e,val)=>setValue(val)} >
                    <Tab LinkComponent={NavLink} to="/doctors" label="Doctors"/>
                    <Tab LinkComponent={NavLink} to="/appoitments" label="Appoitments"/>
                    {/* <Button variant="contained" >Logout</Button> */}
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header;