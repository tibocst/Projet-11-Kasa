import { Link } from 'react-router-dom'
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
            <Link to="/">Accueil</Link>
            <Link to="/propos">A Propos</Link>
          </nav>
        </div>
      </div>
    )
  }
  
  export default Banner