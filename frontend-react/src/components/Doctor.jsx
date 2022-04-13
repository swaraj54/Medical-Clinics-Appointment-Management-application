import React from 'react';
import {Button} from "@mui/material";
import './Doctor.css';
import {Link} from 'react-router-dom';


const Doctor = (props) => {
    const {_id, name, speciality,availability,cost,image } = props.doctor;
  return (
    <div className="card">
        <img src={image} />
        <h3>Dr. {name}</h3>
        <article>Speciality : <b>{speciality}</b> </article>
        <p>Available time : From <b>{availability[0]}</b> To <b>{availability[1]}</b></p>
        <h2>Chagres : <b>Rs.{cost}</b></h2>
        <Button doctor={props} variant="contained" sx={{mt:0, height:"30px"}} LinkComponent={Link} to={`./${_id}`} >Book Appoitment</Button>
        <Button variant="contained" sx={{mt:1, height:"30px"}} >Appoitments History</Button>
    </div>
  )
}

export default Doctor;