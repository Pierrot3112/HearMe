// src/Auth/reducers/authReducer.js
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/types';  // Assurez-vous que l'import est correct

// Vérifiez si 'user' existe dans le localStorage, sinon utilisez un objet vide
const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

const initialState = user ? { isLoggedIn: true, user, error: null } : { isLoggedIn: false, user: null, error: null };

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
        error: null, // Réinitialisation de l'erreur après une connexion réussie
      };
      
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: payload, // Enregistrez l'erreur dans le state
      };
      
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: null, // Effacer l'erreur lors de la déconnexion
      };

    default:
      return state;
  }
}
