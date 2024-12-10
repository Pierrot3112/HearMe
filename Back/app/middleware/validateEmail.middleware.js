const User = require("../models/user.model");

const validateEmail = async (req, res, next) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (user) {
            return res.status(400).json({ message: "Cet email est déjà utilisé." });
        }
        next();
    } catch (error) {
        console.error("Erreur de validation de l'email :", error);
        res.status(500).json({ message: "Erreur interne du serveur." });
    }
};

module.exports = validateEmail;
