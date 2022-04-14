// import React,{useEffect,useState} from 'react';
// import {useParams,useNavigate} from 'react-router-dom';
// import axios from 'axios';
// import './Doctor.css';

// const Appoitments = () => {
//   const id = useParams().id;
//   const [inputs, setInputs] = useState({});

//   useEffect(()=>{
//     const fetchHandler = async () => {
//         await axios.get(`http://localhost:4500/doctors`)
//         .then((res)=> res.data).then(data => setInputs(data.doctor))
//     }
//     fetchHandler()
// },[id]);

//   const { name, speciality,availability,cost,image,date,time } = inputs;  
//   return (
//     <div>
//       <div>
//           <div className="cardd">
//                 <img src={image} />
//                 <h3>Dr. {name}</h3>
//                 <h3>Dr. {date}</h3>
//                 <h3>Dr. {time}</h3>
//                 <article>Speciality : <b>{speciality}</b> </article>
//                 <h2>Chagres : <b>Rs.{cost}</b></h2>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Appoitments;
import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Apoit from "./Apoit";
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
            <Apoit doctor={doctor} key={i}/>
          </div>
        ))}
        </div>
      </div>
    )
}

export default Doctors;