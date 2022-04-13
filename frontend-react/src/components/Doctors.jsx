import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Doctor from "./Doctor";
import './Doctor.css';


const URL = "http://localhost:4500/doctors";

const fetchHandler = async () => {
  return await axios.get(URL).then((res)=>res.data)
}

const Doctors = () => {
    const [doctors, setDoctor] = useState();
    useEffect(()=>{
      fetchHandler().then((data)=> setDoctor(data.doctor))
    },[]);
    return (
      <div>
        <div className="ul">
        {doctors && doctors.map((doctor, i)=>(
          <div className="li" key={i}>
            <Doctor doctor={doctor} key={i}/>
          </div>
        ))}
        </div>
      </div>
    )
}

export default Doctors;