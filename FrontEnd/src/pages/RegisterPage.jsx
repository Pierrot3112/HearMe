import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Ajout de l'import manquant
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "/fond.jfif";
import "../style/register.scss";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); // Ajout pour la confirmation du mot de passe

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Vérification de la correspondance des mots de passe
        if (password !== confirmPassword) {
            toast.error("Les mots de passe ne correspondent pas !");
            return;
        }

        axios
            .post("http://localhost:5000/register", { name, email, password })
            .then((result) => {
                console.log(result);
                if (result.data === "Already registered") {
                    toast.error("E-mail déjà enregistré ! Veuillez vous connecter.");
                    navigate("/login");
                } else {
                    toast.success("Inscription réussie ! Veuillez vous connecter.");
                    navigate("/login");
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error("Une erreur est survenue, veuillez réessayer !");
            });
    };

    return (
        <div className="register-container">
            <ToastContainer />
            <div className="left-section">
                <img src={image} alt="" />
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
                        placeholder="Entrez votre nom"
                        className="form-control"
                        id="exampleInputName"
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Entrez votre e-mail"
                        className="form-control"
                        id="exampleInputEmail"
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Entrez un mot de passe"
                        className="form-control"
                        id="exampleInputPassword"
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirmer votre mot de passe"
                        className="form-control"
                        id="exampleInputConfirmPassword"
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
