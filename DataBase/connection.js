var mysql = require('mysql')
var config = require('./utils')
var connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
})

module.exports = connection