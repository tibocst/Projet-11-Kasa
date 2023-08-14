import "../../styles/FicheLogement.css";
import { useParams } from "react-router-dom";
import { logements } from "../../datas/logements";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import Tags from "../../components/Tags";
import Stars from "../../components/Stars";
import { Navigate } from "react-router-dom";

function FicheLogement() {
  const { id } = useParams();

  const currentLogement = logements.find((logement) => logement.id === id);

  if (!currentLogement) {
    return <Navigate to="/error" replace={true} />;
  }

  return (
    <div className="ficheLogement">
      <Slideshow pictures={currentLogement.pictures} />
      <div className="ficheLogement-info">
        <div>
          <div>
            <div className="ficheLogement-info-title">
              <h1>{currentLogement.title}</h1>
              <h2>{currentLogement.location}</h2>
            </div>
            <div className="ficheLogement-info-tags">
              {currentLogement.tags.map((tag, i) => (
                <Tags key={i} tag={tag} />
              ))}
            </div>
          </div>
          <div>
            <div className="ficheLogement-info-owner">
              <p>{currentLogement.host.name}</p>
              <img src={currentLogement.host.picture} alt="profile" />
            </div>
            <div className="ficheLogement-info-ratings">
              <Stars rating={currentLogement.rating} />
            </div>
          </div>
        </div>
        <div>
          <Collapse
            title={"Description"}
            descriptions={currentLogement.description}
          />
          <Collapse
            title={"Equipements"}
            descriptions={currentLogement.equipments}
          />
        </div>
      </div>
    </div>
  );
}

export default FicheLogement;
