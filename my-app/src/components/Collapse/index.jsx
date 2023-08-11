import { useState } from 'react'
import '../../styles/Collapse.css'

const CHEVRON = require('../../assets/chevron.png')

function Collapse(props) {
  
  const {title, description} = props

  const [collapse, setCollapse] = useState(false)

  return (
    <div className='collapse'>
      <div onClick={() => {collapse === true ? setCollapse(false) : setCollapse(true)}} className='collapse-header'>
        <h2>{title}</h2>
        <img className={collapse ? "collapse-header-img_collapsed" : "collapse-header-img"} src={CHEVRON} alt="chevron" />
      </div>
      <div className={collapse ? 'collapse-description' : 'collapse-description_hidden'}>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Collapse;
