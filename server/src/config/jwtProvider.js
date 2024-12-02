const jwt = require("jsonwebtoken");
require("dotenv").config();


const SECRET_KEY = process.env.JWT_SECRET_KEY;


const generateToken = (userId) => {
    try {
        const token = jwt.sign({ userId }, SECRET_KEY, {
            expiresIn: "48h", 
        });

        return token;
    } catch (error) {
        console.error("Error generating token:", error.message);
        throw new Error("Failed to generate token");
    }
};


const getUserIdFromToken = (token) =>{
    const decodedToken = jwt.verify(token,SECRET_KEY);
    return decodedToken.userId
}

module.exports = {
    generateToken,
    getUserIdFromToken
}