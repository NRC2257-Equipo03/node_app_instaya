const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env;

function generateAccessToken(id, email) {
    return jwt.sign({ id, email }, JWT_SECRET, {expiresIn: '1d'});
}

function verifyAccessToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

module.exports = {
    generateAccessToken,
    verifyAccessToken
};