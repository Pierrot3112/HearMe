import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "/fond.jfif";
import "../style/register.scss";

const RegisterPage = () => {
  const [username, setUsername] = useState(""); // Utilisateur
  const [email, setEmail] = useState(""); // Email
  const [password, setPassword] = useState(""); // Mot de passe
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirmation mot de passe

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Vérification de la correspondance des mots de passe
    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas !");
      return;
    }
  
    try {
      // Requête d'inscription
      const response = await axios.post("http://localhost:8080/api/auth/signup", {
        username,
        email,
        password,
      });
  
      // Gestion des réponses
      if (response.status === 200 || response.status === 201) {
        toast.success("Inscription réussie ! Veuillez vous connecter.");
        navigate("/login");
      } else {
        toast.error(response.data.message || "Une erreur est survenue !");
      }
    } catch (error) {
      console.error("Erreur d'inscription :", error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "Erreur lors de l'inscription.");
      } else {
        toast.error("Une erreur réseau est survenue, veuillez réessayer !");
      }
    }
  };
  

  return (
    <div className="register-container">
      <ToastContainer />
      <div className="left-section">
        <img src={image} alt="background" />
        <div className="content">
          <h1>Rejoignez Une Communauté D'apprenants Inclusifs!</h1>
          <p>
            Commencez dès aujourd'hui à apprendre à votre rythme et dans votre langue. Chez Hearne, chaque cours est conçu pour être accessible et enrichissant.
          </p>
          <p>
            Inscrivez-vous en toute sécurité ! Vos informations restent confidentielles et protégées.
          </p>
          <p>
            Avez-vous déjà un compte ?
            <a href="/login" className="login-link">
              Se connecter ici
            </a>
          </p>
        </div>
      </div>
      <div className="right-section">
        <h2>Inscription</h2>
        <div className="underline"></div>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Entrez votre nom d'utilisateur"
            className="form-control"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Entrez votre e-mail"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Entrez un mot de passe"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirmer votre mot de passe"
            className="form-control"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
          <button type="submit">Créer mon compte</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
