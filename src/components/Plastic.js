import React from 'react';
import {Link} from 'react-router-dom';
import HeroSection from './HeroSection.js';
import './Plastic.css';

function plastic() {
  return (
    <div className='container-plastic'>
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
            <img src={require("../assets/images/plastic1.png")} />
            Plastik <br /> <br /> <br />
            <div className="content1-use">
                <div className="content1-use1">
                    <img src={require("../assets/images/plastic2.png")} />
                    <h1 className='content-txt'> Kantong Plastik </h1>
                </div>
                <div className="content1-use2">
                    <img src={require("../assets/images/plastic3.png")} />
                    <h1 className='content-txt'> Perabot Plastik </h1>
                </div>
                <div className="content1-use3">
                    <img src={require("../assets/images/plastic4.png")} />
                    <h1 className='content-txt'> Botol Plastik </h1>
                </div>
                <div className="content1-use4">
                    <img src={require("../assets/images/plastic5.png")} />
                    <h1 className='content-txt'> Gelas Plastik </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default plastic