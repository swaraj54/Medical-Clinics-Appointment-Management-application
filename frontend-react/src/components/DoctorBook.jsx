import React,{useEffect,useState} from 'react';
import {useParams,useNavigate,NavLink} from 'react-router-dom';
import axios from 'axios';
import './Doctor.css';
import { Button} from '@mui/material';



const DoctorBook = () => {
    const history = useNavigate();
    const [ date, setDate] = useState();
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
    useEffect(()=>{
        const fetchHandler = async () => {
            await axios.get(`http://localhost:4500/doctors/${id}`)
            .then((res)=> res.data).then(data => setInputs(data.doctor))
        }
        fetchHandler()
    },[id]);
    
    const { name, speciality,availability,cost,image } = inputs;

    const sendRequest = async () => {
        await axios.patch(`http://localhost:4500/doctors/${id}`, {
            name:String(name),
            speciality:String(speciality),
            availability:Number(availability),
            cost:Number(cost),
            image:String(image),
            date: String(date.Date),
            time:String( date.Time)
        }).then(res=> res.data);
    } 
    const handleSend = () => {
        alert("Your appoitment date is " + date.Date +" and time is " + date.Time)
        sendRequest().then(()=> history("/appoitments"))
    }
  return (
    <div className="topp"> 
        <div>
            <div className="cardd">
                <img src={image} />
                <h3>Dr. {name}</h3>
                <article>Speciality : <b>{speciality}</b> </article>
                <h2>Chagres : <b>Rs.{cost}</b></h2>
            </div>
        </div>
        <div className="card2">
            <div>
                <h1>  Date</h1>
                <ul>
                    <Button   variant="outlined" >14-4-2022</Button><br/><br/>
                    <Button    variant="outlined" >15-4-2022</Button><br/><br/>
                    <Button  variant="outlined" >16-4-2022</Button><br/><br/>
                    <Button    variant="outlined" >17-4-2022</Button><br/><br/>
                    <Button    variant="outlined" >18-4-2022</Button><br/><br/>
                </ul>
            </div>
            <div>
            <h1>Select Time</h1>
                <ul>
                    <Button onClick={()=> {setDate({Date:"14/4/2022", Time :"10.20-10.40"})} } variant="contained" style={{marginRight:"20px", marginBottom:"20px"}}>From 10.20 to 10.40</Button>
                    <Button onClick={()=> {setDate({Date:"14/4/2022", Time :"10.40-10.60"})} }  variant="contained" style={{marginRight:"20px", marginBottom:"20px"}}>From 10.40 to 10.60</Button><br/>
                    <Button onClick={()=> {setDate({Date:"15/4/2022", Time :"10.20-10.40"})} }  variant="contained" style={{marginRight:"20px", marginBottom:"20px"}}>From 10.20 to 10.40</Button> 
                    <Button onClick={()=> {setDate({Date:"15/4/2022", Time :"10.40-10.60"})} }  variant="contained" style={{marginRight:"20px", marginBottom:"20px"}} >From 10.40 to 10.60</Button><br/>
                    <Button onClick={()=> {setDate({Date:"16/4/2022", Time :"10.20-10.40"})} }  variant="contained" style={{marginRight:"20px", marginBottom:"20px"}}>From 10.20 to 10.40</Button> 
                    <Button onClick={()=> {setDate({Date:"16/4/2022", Time :"10.40-10.60"})} }  variant="contained" style={{marginRight:"20px", marginBottom:"20px"}} >From 10.40 to 10.60</Button><br/>
                    <Button onClick={()=> {setDate({Date:"17/4/2022", Time :"10.20-10.40"})} }  variant="contained" style={{marginRight:"20px", marginBottom:"20px"}}>From 10.20 to 10.40</Button> 
                    <Button onClick={()=> {setDate({Date:"17/4/2022", Time :"10.40-10.60"})} }  variant="contained" style={{marginRight:"20px", marginBottom:"20px"}} >From 10.40 to 10.60</Button><br/>
                    <Button onClick={()=> {setDate({Date:"18/4/2022", Time :"10.20-10.40"})} }  variant="contained" style={{marginRight:"20px", marginBottom:"20px"}}>From 10.20 to 10.40</Button> 
                    <Button onClick={()=> {setDate({Date:"18/4/2022", Time :"10.40-10.60"})} }  variant="contained" style={{marginRight:"20px", marginBottom:"20px"}} >From 10.40 to 10.60</Button><br/>
                </ul>
            </div>
            <Button  onClick={()=> handleSend() } variant="outlined" style={{width:"400px", height:"60px",marginLeft:"500px", marginTop:"30px"}}>Conform here to proceed..</Button>
          
        </div>
    </div>
  )
}

export default DoctorBook;