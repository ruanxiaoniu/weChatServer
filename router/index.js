var {Login} = require('./login')
function router(pathName) {
  if(pathName === '/login') {
    let loginResult = Login.login()
    console.log('loginResult');
    console.log(loginResult);
    
    if(loginResult) {
      console.log('logiininini');
    }
  }
  
}
exports.router = router