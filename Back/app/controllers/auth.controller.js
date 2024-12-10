const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Inscription
exports.signup = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    // Vérification des données requises
    if (!username || !email || !password) {
      return res.status(400).send({ message: "Tous les champs sont obligatoires !" });
    }

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).send({ message: "L'utilisateur existe déjà avec cet e-mail !" });
    }

    // Créer l'utilisateur
    const user = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, 8),
    });

    if (roles) {
      // Assigner des rôles si fournis
      const foundRoles = await Role.findAll({
        where: {
          name: {
            [Op.or]: roles,
          },
        },
      });

      if (!foundRoles.length) {
        return res.status(400).send({ message: "Les rôles spécifiés sont invalides !" });
      }

      await user.setRoles(foundRoles);
    } else {
      // Assigner le rôle par défaut (ID = 1)
      await user.setRoles([1]);
    }

    return res.status(201).send({ message: "Utilisateur enregistré avec succès !" });
  } catch (error) {
    console.error("Erreur pendant l'inscription :", error);
    return res.status(500).send({ message: "Erreur interne du serveur." });
  }
};

// Connexion
exports.signin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Vérification des données requises
    if (!username || !password) {
      return res.status(400).send({ message: "Nom d'utilisateur et mot de passe obligatoires !" });
    }

    // Vérifier si l'utilisateur existe
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).send({ message: "Utilisateur non trouvé." });
    }

    // Vérifier le mot de passe
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({ message: "Mot de passe invalide !" });
    }

    // Générer le token JWT
    const token = jwt.sign({ id: user.id }, config.secret, {
      algorithm: "HS256",
      expiresIn: 86400, // Expiration en 24 heures
    });

    // Récupérer les rôles de l'utilisateur
    const roles = await user.getRoles();
    const authorities = roles.map((role) => "ROLE_" + role.name.toUpperCase());

    // Assigner le token à la session
    req.session.token = token;

    return res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      roles: authorities,
    });
  } catch (error) {
    console.error("Erreur pendant la connexion :", error);
    return res.status(500).send({ message: "Erreur interne du serveur." });
  }
};

// Déconnexion
exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({
      message: "Vous vous êtes déconnecté avec succès !",
    });
  } catch (err) {
    console.error("Erreur pendant la déconnexion :", err);
    return res.status(500).send({ message: "Erreur interne du serveur." });
  }
};
