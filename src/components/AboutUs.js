import React from 'react';
import './AboutUs.css';
import HeroSection from './HeroSection';

function AboutUs() {
  return (
    <div className='container-about'>
        <div className="top-text">
            <div className="text-title">
                <h1>About Us</h1>
                <p>Tim kami merupakan tim kecil yang berfokus untuk membuat aplikasi Recyclean berguna dan mudah
                   untuk digunakan. Kami bekerja keras untuk memberikan yang terbaik bagi klien dan pengguna aplikasi
                   kami untuk mencapai apa yang mereka ingin lakukan. Dengan aplikasi ini, kami mengharapkan kami 
                   dapat berkontribusi dalam melindungi bumi dari sampah yang menumpuk.</p>
            </div>
            <h2>Tim Kami</h2>
            <div className="text-about1">
                <img src={require("../assets/images/admin1.png")}  />
                <div className="text-admin">
                    <h3>Tri Krishna Fortunova</h3> <br />
                    <h3>(Lead Programmer, Front-End Programmer)</h3>
                </div>
            </div>
            <div className="text-about2">
                <img src={require("../assets/images/admin2.png")}  />
                <div className="text-admin">
                    <h3>Gusti Agung Rama Ayudhya</h3> <br />
                    <h3>(Analyst, Back-End Programmer)</h3>
                </div>
            </div>
            <div className="text-about3">
                <img src={require("../assets/images/admin3.png")}  />
                <div className="text-admin">
                    <h3>Setyo Aji Pratomo </h3> <br />
                    <h3>(Supervisor, UI/UX designer)</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs