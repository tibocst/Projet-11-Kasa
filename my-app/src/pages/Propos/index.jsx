import '../../styles/Propos.css'
import Collapse from '../../components/Collapse/index.jsx'

const MONTAIN = require('../../assets/montain.png')

function Propos() {

  return (
    <div className="propos">
      
      <div className="propos-banner">
        <img src={MONTAIN} alt="montagne" />
      </div>
      <div className='propos-collapse'>
        <Collapse title={"Fiabilité"} descriptions={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."}></Collapse>
        <Collapse title={"Respect"} descriptions={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}></Collapse>
        <Collapse title={"Service"} descriptions={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}></Collapse>
        <Collapse title={"Sécurité"} descriptions={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}></Collapse>
      </div>
    </div>
  );
}

export default Propos;
