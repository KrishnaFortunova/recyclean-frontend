import React, {useRef, useState, useEffect, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './AuthNavbar.css';
import Register from './Register'
import Login from './Login'
import  AuthContext  from '../context/AuthProvider';
import axios from '../api/axios';
import Profile from './Profile';

const LOGIN_URL = '/auth';

const AuthNavbar = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true); 
    const handleClick = () => setClick(!click); 
    const closeMobileMenu = () => setClick(false); 
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [axios, setAxios] = useState([]);

    const showButton = () => {
      if(window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton()
    }, []); 

    const handleLogout = () => {
      localStorage.removeItem({ user, pwd });
      setSuccess(false);
    };
    window.addEventListener('resize', showButton);
    
  return (
    <>
    <nav className="auth-navbar">
        <div className="auth-navbar-container">
          <Link to="/" className='auth-navbar-logo' onClick={closeMobileMenu}>
          <img src={require("../assets/images/recyclean5.png")} alt="mainLogo" />
          </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />                
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                  <Link to='/Profile' className='nav-links' onClick={closeMobileMenu}>
                    Profile
                  </Link>
                  <Link to='/Login' className='nav-links' onClick={handleLogout}>
                    LogOut
                  </Link>
                </li>
            </ul>
        </div>
    </nav>    
    </>
  )
}

export default AuthNavbar