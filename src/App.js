import { React, createContext, useState, useEffect, useContext} from "react";
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import AuthNavbar from './components/AuthNavbar'
import Glass from './components/Glass'
import Paper from './components/Paper'
import Plastic from './components/Plastic'
import Yogya from './components/Yogya'
import AboutUs from './components/AboutUs';
import AuthContext from './context/AuthProvider';
import Profile from "./components/Profile";
import axios from "./api/axios";

function App() {

  const auth = useContext(AuthContext);
  
  return (
    <main className="App">
        <Router>
          {/* <Navbar/> */}
          {/* <AuthNavbar/> */}
          {!auth ? <AuthNavbar/> : <Navbar />}
          <Routes>
            <Route path='/' exact={true} element={<HeroSection />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Glass" element={<Glass />} />
            <Route path="/Paper" element={<Paper />} />
            <Route path="/Plastic" element={<Plastic />} />
            <Route path="/Yogya" element={<Yogya />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </Router>  
    </main>
  );
}

export default App;