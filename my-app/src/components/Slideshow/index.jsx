import '../../styles/Slideshow.css'
import { useState } from 'react'

const CHEVRON = require('../../assets/chevron-slideshow.png')

function Slideshow(props) {

  const {pictures} = props

  const [display, setDisplay] = useState(0)

  return (
    <div className='slideshow'>
      <img className={pictures.length === 1 ? 'slideshow-none' : 'slideshow-chevron_gauche'} onClick={() => display === 0 ? setDisplay(pictures.length-1) : setDisplay(display - 1)} src={CHEVRON} alt="chevron" />
      <div className='slideshow-div'>
        {pictures.map((picture, i) => <img className={display === i ? 'slideshow-div-img_display' : 'slideshow-div-img'} src={picture} key={i} alt="slideshow"/>)}
      </div>
      <p className={pictures.length === 1 ? 'slideshow-none' : 'slideshow-compteur'}>{ (display+1) + "/" + pictures.length}</p>
      <img className={pictures.length === 1 ? 'slideshow-none' : 'slideshow-chevron_droit'} onClick={() => pictures.length-1 === display ? setDisplay(0) : setDisplay(display + 1)} src={CHEVRON} alt="chevron" />
    </div>
  );
}

export default Slideshow;
