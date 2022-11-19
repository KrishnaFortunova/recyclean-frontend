import React from 'react';
import {Link} from 'react-router-dom';
import HeroSection from './HeroSection.js';
import './Yogya.css';

function yogya() {
  return (
    <div className='container-yogya'>
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
            <img src={require("../assets/images/yogya1.png")} />
            Yogyakarta <br /> <br /> <br />
        </div>
        <div className="loc-map">
            Tidak Ada Data.
        </div>
    </div>
  )
}

export default yogya