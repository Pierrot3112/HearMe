// src/Auth/actions/autActions.js
import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL } from './types'; // Assurez-vous que les types existent

// Action creator pour la connexion
export const login = (email, password) => async (dispatch) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signin`, {
            email,
            password,
        });

        // Si la connexion réussit, dispatcher LOGIN_SUCCESS
        dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (error) {
        // Si la connexion échoue, dispatcher LOGIN_FAIL
        console.error("Erreur de connexion :", error);
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response?.data?.message || "Échec de la connexion",
        });
    }
};
