import '../../styles/Footer.css'

const LOGOWHITE = require('../../assets/LOGO-white.png')

function Footer() {
  return (
    <div className="footer">
      <img src={LOGOWHITE} alt="logo" />
      <p>@ 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer