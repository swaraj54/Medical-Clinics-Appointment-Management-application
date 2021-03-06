import React from 'react';
import {Button} from "@mui/material";
import './Doctor.css';
import {Link} from 'react-router-dom';


const Apoit = (props) => {
    const {_id, name, speciality,availability,cost,image,date,time } = props.doctor;
  return (
    <div className="card">
        <img src={image} />
        <h3>Dr. {name}</h3>
        <article>Speciality : <b>{speciality}</b> </article>
        <h2>Chagres : <b>Rs.{cost}</b></h2>
        <h3>Check Below Apoitments</h3>
        {(date && time) ? <h4>Appoitment Booked on {date} and time {time} </h4> : null}
    </div>
  )
}

export default Apoit;