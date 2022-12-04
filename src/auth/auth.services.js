const checkUserCredentials = require('./auth.controller')
const jwt = require('jsonwebtoken')
const signature = require('../../config').api.jwtSecret

const postLogin = (req, res) => {
  const {email, password} = req.body
 
  if(email, password){
     checkUserCredentials(email, password)
       .then( data => {
        if(data){
          const token = jwt.sign({
             id: data.id,
             email: data.email,
             role: data.role,
             user_name: data.user_name
           }, signature )
           res.status(200).json({token})
        }else{
          res.status(401).json({message: 'Invalid credentials'})
        }
      })
      
      .catch(err => {
        res.status(400).json({message: err.message})
      })

  }else{
    res.status(400).json({Message: 'Credentials are required', fields: {email: 'example@email.com', password: 'password'} })
  } 
}

module.exports = postLogin
