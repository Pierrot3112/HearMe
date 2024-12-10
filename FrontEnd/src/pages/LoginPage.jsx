import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Auth/actions/autActions';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "/fond.jfif";
import "../style/register.scss";

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoggedIn, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/dashboard");
        }

        if (error) {
            toast.error(error);
        }
    }, [isLoggedIn, error, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await dispatch(login(email, password));
            toast.success("Connexion réussie !");
            navigate("/dashboard");
        } catch (err) {
            toast.error(err.message || "Impossible de se connecter, vérifiez vos informations.");
        }
    };

    return (
        <div className="register-container">
            <ToastContainer />
            <div className="left-section">
                <img src={image} alt="" />
                <div className="content">
                    <h1 style={{ fontSize: "41px" }}>Heureux De Vous Revoir Sur Hearme !</h1>
                    <p>
                        Reprenez là où vous vous êtes arrêté et poursuivez votre parcours en langue des signes.
                    </p>
                    <p>
                        Vous n'avez pas de compte?
                        <a href="/register" className="login-link">
                            S'inscrire ici
                        </a>
                    </p>
                </div>
            </div>
            <div className="right-section">
                <h2>Connexion</h2>
                <div className="underline"></div>
                <form className="register-form" onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        id="exampleInputEmail1"
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        id="exampleInputPassword1"
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                    <button type="submit">Se connecter</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
