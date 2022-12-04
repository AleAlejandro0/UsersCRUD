const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, 10)
}

const verifyPassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword)
}

module.exports = {
  hashPassword,
  verifyPassword
}