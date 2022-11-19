import React from 'react';
import {Link} from 'react-router-dom';
import HeroSection from './HeroSection.js';
import './Glass.css';

function Glass() {
  return (
    <div className='container-glass'>
        <div className="back">
            <br />
            <Link to='/'>
                <i class="fa fa-arrow-left icon1" aria-hidden="true"></i>
                Jenis Sampah Daur Ulang
            </Link>
            <br />
            <br />
        </div>
        <div className="content1">
            <img src={require("../assets/images/glass1.png")} />
            Gelas <br /> <br /> <br />
            <div className="content1-use">
                <div className="content1-use1">
                    <img src={require("../assets/images/glass2.png")} />
                    <h1 className='content-txt'> Gelas Kaca </h1>
                </div>
                <div className="content1-use2">
                    <img src={require("../assets/images/glass3.png")} />
                    <h1 className='content-txt'> Botol Kaca </h1>
                </div>
                <div className="content1-use3">
                    <img src={require("../assets/images/glass4.png")} />
                    <h1 className='content-txt'> Perfume Kaca </h1>
                </div>
                <div className="content1-use4">
                    <img src={require("../assets/images/glass5.png")} />
                    <h1 className='content-txt'> Botol Sirup </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Glass