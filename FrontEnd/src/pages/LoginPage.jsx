import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "/fond.jfif";
import "../style/register.scss";

const LoginPage = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'http://localhost:5000/login', {email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Success"){
                console.log("Login Success");
                alert('Login successful!')
                navigate('/');
            }
            else{
                toast.error('Incorrect password! Please try again.');
            }
        })
        .catch(err => console.log(err));
    }

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
                <form className="register-form" onSubmit={handleSubmit}>
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
