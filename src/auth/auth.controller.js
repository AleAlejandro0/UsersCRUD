const {userByEmail} = require('../users/users.controllers')
const {verifyPassword} = require('../utils/crypto')

const checkUserCredentials = async (email, password) => {
  try{
   const user = await userByEmail(email)
   const checkPassword = verifyPassword(password, user.password) 

   if(checkPassword){
    return user 
   }
   return null 
  }catch(err){
    return null
  }
}

module.exports = checkUserCredentials