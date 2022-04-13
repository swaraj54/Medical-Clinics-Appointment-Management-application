import React from 'react';
import {Routes,Route} from "react-router-dom";
import Doctors from "./Doctors";
import Header from "./Header";
import Appoitments from "./Appoitments";
import Welcome from "./Welcome";
import DoctorBook from './DoctorBook';


const Home = () => {
  return (
    <div>
        <header>
            <Header />
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Welcome />} ></Route>
                <Route path="/doctors" element={<Doctors />} ></Route>
                <Route path="/appoitments" element={<Appoitments />} ></Route>
                <Route path="/doctors/:id" element={<DoctorBook/>} /></Routes>
        </main>
    </div>
  )
}

export default Home