import '../../styles/Footer.css'

const LOGOWHITE = require('../../assets/LOGO-white.png')

function Footer() {
  return (
    <footer className="footer">
      <img src={LOGOWHITE} alt="logo" />
      <p>@ 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer