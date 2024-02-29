import jwt from 'jsonwebtoken';


const isLoggedIn = (req,res,next) => {
    const {token} = req.cookies;
    const tokenDetails = jwt.verify(token,process.env.JWT_PASSWORD);
    if(!token || !tokenDetails) res.status(401).send('Login is required');

    req.user = tokenDetails; // this line takes the user information in middleware and sends it to the req at getProfile in User controller.js
    next();
}
export default isLoggedIn;