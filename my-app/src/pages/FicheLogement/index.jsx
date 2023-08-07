import '../../styles/FicheLogement.css'
import { useParams } from 'react-router-dom'
import { logements } from '../../datas/logements'

function FicheLogement() {
  const { id } = useParams()
  const currentLogement = logements.find((logement) => logement.id === id)
  console.log(currentLogement)
  return (
    <div className="ficheLogement">

    </div>
  );
}

export default FicheLogement;
