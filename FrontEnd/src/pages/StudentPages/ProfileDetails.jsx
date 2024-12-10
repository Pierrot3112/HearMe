import React from "react";
import { useNavigate } from "react-router-dom";  // Importer useNavigate pour gérer la navigation
import img_url from "../../assets/images/user.jpg";
import poste_icon from "../../assets/images/user.jpg";  // Assurez-vous de l'existence de ces images
import level_icon from "../../assets/images/user.jpg";  // Assurez-vous de l'existence de ces images
import point_icon from "../../assets/images/user.jpg";  // Assurez-vous de l'existence de ces images

const ProfileDetails = () => {
  const navigate = useNavigate();  // Créer une instance de navigate

  // Données à afficher dans le profil
  const second_row = [
    { id: 0, title: "Poste", value: "Graphiste textile", icon: poste_icon },
    { id: 1, title: "Niveau", value: "Débutant", icon: level_icon },
    { id: 2, title: "Point Obtenu", value: "400 PX", icon: point_icon },
  ];

  // Fonction pour revenir à la page précédente
  const handleBack = () => {
    navigate(-1);  // Navigue vers la page précédente dans l'historique du navigateur
  };

  return (
    <div className="container-fluid profile-section">
      <div className="row">
        {/* Première colonne - Profil principal */}
        <div className="col first-col">
          <div className="close" onClick={handleBack}>x</div> {/* Bouton de retour */}
          <div className="centered">
            <div className="profile-title">Mon Profil</div>
            <div className="img-container">
              <img src={img_url} alt="Profil image" className="profile-img" />
            </div>
            <p className="name">Edit Boniface</p>
            <p className="mail">editboniface@gmail.com</p>
            <button className="btn btn-primary btn-profile">Modifier Profil</button>
          </div>
        </div>

        {/* Deuxième colonne - Informations supplémentaires */}
        <div className="col second-col">
          {second_row.map((item) => (
            <div className="marger" key={item.id}>
              <div className="icon-container">
                <img src={item.icon} alt={item.title} className="img-icon" />
              </div>
              <div className="second">
                <h4>{item.title}</h4>
                <p>{item.value}</p>
              </div>
            </div>
          ))}
          <button className="btn btn-change">Changer de mot de passe</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
