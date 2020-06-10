var mysql = require('mysql')
var connection = require('../DataBase/connection')
var {loginSql} = require('../DataBase/sqlMap/user')
var Login = {
   login: function(user) {
            let loginResult = false
            // 连接数据库            
            connection.connect()
            connection.query(loginSql, (err, result) => {
              console.log('result');
              console.log(result.length);
              // 断开与数据库的连接
              connection.end()
              if(result.length > 0) {
                loginResult = true
              }else{ 
                loginResult = false
              }
            })
            return loginResult
          }
}


exports.Login = Login
