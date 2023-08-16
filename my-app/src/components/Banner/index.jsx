import { Link, useLocation } from 'react-router-dom'
import '../../styles/Banner.css'

const LOGO = require('../../assets/logo.png');

function Banner() {

    return (
      <div className='banner'>
        <div>
          <img className='banner-logo' src={LOGO} alt="logo KASA" />
        </div>
        <div>
          <nav className='banner-nav'> 
            <Link className={useLocation().pathname === '/' ? "banner-nav-a_underline" : "banner-nav-a"} to="/">Accueil</Link>
            <Link className={useLocation().pathname === '/propos' ? "banner-nav-a_underline" : "banner-nav-a"} to="/propos">A Propos</Link>
          </nav>
        </div>
      </div>
    )
  }
  
  export default Banner