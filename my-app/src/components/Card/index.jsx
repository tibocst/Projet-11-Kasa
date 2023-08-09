import '../../styles/Card.css'
import { Link } from 'react-router-dom'

function Card({idLogement, imagePath, title}) {

    return (
      <Link className='a-card' to={`/ficheLogement/${idLogement}`}>
        <div className="card" style={{"--img": "url(" + imagePath + ")"}}>
          <p>{title}</p>
        </div>
      </Link>
    )
  }
  
  export default Card