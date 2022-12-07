const {verifyAccessToken} = require('../services/jwt');
const ApiError = require('../utils/ApiError');

function authMiddkeware(req, res, next){
    const verifyAccessToken = req.header.authorization ? req.headers.authorization.split(' ')[1] : '';
    try {
     if (accessToken == null || accessToken == "",401) {
        throw new ApiError("Access token required",401)
        }
    const user = verifyAccessToken(accessToken);

    if (user.id && user.email){
        console.log('autorizado')
    }

    next();
    }catch ({ message, statusCode }) {
        res.status(401).json({message:"Access token Invalid", tokenSent: accessToken});
    } 
}

module.exports ={
    authMiddkeware,
};