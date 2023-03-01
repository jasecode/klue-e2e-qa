require('dotenv').config()

module.exports = (on, config) => {
  config.env.ENVIRONMENT = process.env.ENVIRONMENT
  return config
}
