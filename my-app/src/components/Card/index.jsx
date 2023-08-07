import '../../styles/Card.css'
import { Link } from 'react-router-dom'

function Card({idLogement, imagePath, title}) {
  const src = imagePath
  const titleProp = title
  const id = idLogement
    return (
      <Link className='a-card' to={`/ficheLogement/${id}`}>
        <div className="card" style={{"--img": "url(" + src + ")"}}>
          <p>{titleProp}</p>
        </div>
      </Link>
    )
  }
  
  export default Card