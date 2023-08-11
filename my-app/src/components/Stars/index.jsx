import '../../styles/Stars.css'

const STARPINK = require('../../assets/star-pink.png')
const STARGREY = require('../../assets/star-grey.png')

function Stars(props) {

  const {rating} = props
  const intRating = parseInt(rating)

  return (
    <div className='stars'>
      <img src= {intRating >= 1 ? STARPINK : STARGREY} alt="star" />
      <img src= {intRating >= 2 ? STARPINK : STARGREY} alt="star" />
      <img src= {intRating >= 3 ? STARPINK : STARGREY} alt="star" />
      <img src= {intRating >= 4 ? STARPINK : STARGREY} alt="star" />
      <img src= {intRating >= 5 ? STARPINK : STARGREY} alt="star" />
    </div>
  );
}

export default Stars;
