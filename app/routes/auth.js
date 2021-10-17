var authController = require('../controllers/authcontroller.js');
var passport = require('../config/passport/passport.js');
module.exports = function(app, passport) {
      //開網頁
      app.get('/signup', authController.signup);
      app.get('/signin', authController.signin);
      app.get('/friend', authController.friend);
      console.log('test');
      console.log('ok?');
      //收name,email,password辦新帳號
      app.post('/signup', passport.authenticate('local-signup',{
       // console.log('ok?');
       // console.log('ok?');
        successRedirect: '/dashboard',

        failureRedirect: '/signup'}),

        function(req,res){
          console.log('success');
          res.send("What happen??????");          
      });
      
      app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
 
        failureRedirect: '/signin'
      }
 
      ));

      app.get('/dashboard', isLoggedIn, authController.dashboard);
      //app.get('/dashboard', passport.data);
      app.get('/logout', authController.logout);
        
      
      function isLoggedIn(req, res, next) {
        if(req.isAuthenticated())
          return next();

        res.redirect('/signin');

      }
        
}
