import React from 'react';
import './HeroSection.css';
import '../App.css'
import {Link} from 'react-router-dom'
import Footer from './Footer.js'
import Glass from './Glass.js'

function HeroSection() {
  return (
    <div className='container-full'>
      <div className='hero-container'>
        <img src={require("../assets/images/home-pic3.jpg")} />
      </div>
        <div className='why'>
            <h1> Kenapa Recyclean?</h1><br/>        
            <h5>Recyclean merupakan suatu aplikasi berbasis web yang didalamnya memuat berbagai macam informasi tentang daur 
                ulang sampah. Dengan aplikasi ini, anda dapat melihat informasi tentang sampah yang dapat di daur ulang, tempat 
                pengumpulan sampah daur ulang, manfaat mendaur ulang , dan informasi tentang jumlah sampah di Indonesia. 
                Jika anda mengumpulkan sampah tersebut ke tempat pengumpulan sampah milik kami, pihak kami akan memberikan 
                suatu reward berupa poin yang dapat ditukar voucher belanja dan lain lain. Untuk saat ini jenis sampah yang 
                dikelola oleh kami adalah plastik, kertas dan botol kaca, dan kedepannya akan lebih banyak lagi jenis sampah 
                terpilah yang akan siap kami daur ulang. </h5> <br/>
        </div>
        <div className="kinds">
            <h1>Jenis Sampah Daur Ulang</h1><br/>
            <h5>Berikut merupakan jenis sampah yang kami daur ulang</h5><br/>
            <div className="kinds-icon">
                <div className="kinds-img1">
                <Link to='./Glass'>
                    <img src={require("../assets/images/glass.png")} />
                    <h1 className='iconName'>Gelas</h1>
                </Link>
                </div>
                <div className="kinds-img2">
                <Link to='./Paper'>
                    <img src={require("../assets/images/paper.png")}   />
                    <h1 className='iconName'>Kertas</h1>
                </Link>
                </div>
                <div className="kinds-img3">
                <Link to='./Plastic'>
                    <img src={require("../assets/images/plastic.png")}  />
                    <h1 className='iconName'>Plastik</h1>
                </Link>
                </div>
            </div> <br/>
        </div>
        <div className="location">
            <h1>Tempat Pengumpulan Sampah</h1><br/>
                <div className="locs-img">
                    <Link to='./Yogya'>
                        <img src={require("../assets/images/yogya.png")} alt="yogya" />
                        <h1 className='iconName'>Yogyakarta</h1>
                    </Link>
                </div>
        </div>
        <div className="benefit">
            <h1>Manfaat Daur Ulang</h1><br/>
            <h5>Manfaat dari mendaur ulang sampah adalah sebagai berikut</h5>
            <h5>1. Mengurangi pencemaran akibat sampah, menghemat energi, dan menjaga sumber daya alam</h5>
            <h5>2. Mencegah timbulnya penyakit di sekitar kita akibat sampah.</h5>
            <h5>3. Menambah pengetahuan dan mengasah kreativitas.</h5>   
            <h5>4. Menghemat pengeluaran.</h5>
            <h5>5. Mengurangi emisi gas rumah kaca.</h5>
            <h5>6. Dan masih banyak lagi manfaat lainnya.</h5>
        </div>
        <div className="amount">
            <h1>Jumlah Sampah di Indonesia</h1><br/>
            <h2>Timbulan Sampah Indonesia Mencapai 29,565,740.01 (Ton/Tahun)</h2><br/>
            <h5>Data diambil dari website https://sipsn.menlhk.go.id/sipsn</h5> <br/>
        </div>
        <Footer /> 
    </div>
  );
}

export default HeroSection;