const jwt = require('jsonwebtoken')
const {jwtSecret} = require('../../secret')

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if(!token){
    res.status(401).json({
      message: "token required"})
  }else{
    jwt.verify(token, jwtSecret, (err, decoded) =>{
      if(err){
        res.status(401).json({
          message: "token invalid"})
      }else{
        req.decodedToken = decoded
        next()
      }
    })
  } 

  
}