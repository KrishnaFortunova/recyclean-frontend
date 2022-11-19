import { React, useRef, useState, useEffect, useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Navbar.css';
import Register from './Register'
import Login from './Login'
import  AuthContext  from '../context/AuthProvider';
import axios from '../api/axios';

const Navbar = () => {
  const { setAuth, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click); 
  const closeMobileMenu = () => setClick(false); 

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

  window.addEventListener('resize', showButton);

  return (
  <>
    <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
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
                </li>
                <li className='nav-item'>
                  <Link to='/Register' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Sign Up
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/Login' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Sign In
                  </Link>
                </li>
            </ul> 
            <div className="navbar-login">
                <Link to ='/Login' className='login-btn'>
                  SIGN IN
                </Link>
            </div>
            <div className="navbar-regist">
                <Link to ='/Register' className='register-btn'>
                  SIGN UP
                </Link>
            </div>    
        </div>
    </nav> 
  </>    
  )
}

export default Navbar;

