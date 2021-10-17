var bCrypt = require('bcrypt-nodejs');
var useremail;
var user_data;
var User;

module.exports = function(passport, user) {
  
  User = user;
  global.User = User;
  var LocalStrategy = require('passport-local').Strategy;

  passport.serializeUser(function(user, done){
    done(null, user.id);
  }); 

  passport.deserializeUser(function(id, done){
    User.findById(id).then(function(user){
      if(user){
        done(null, user.get());
      }
      else{
        done(user.errors,null);
      }
    });
  });

  //LOCAL SIGNUP
  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      //allow us to pass back the entire request to the callback
      passReqToCallback: true        
    },

    //hamdle storing a user's details
    function(req, email, password, done){
      //useremail = email;
      //add hashed password generating function
      var generateHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      }
      console.log("user.findone in local-signup");
      User.findOne({
        where: {
          email: email
        }
      }).then(function(user){
        console.log("user.findone then in local-signup");
        if(user){
          return done(null, false,{
            message: 'That email is already taken'
          });
        }
        else{
          console.log("user.findone else in local-signup");
          var userPassword = generateHash(password);

          var data =
            {
              email: email,
              password: userPassword,
              username: req.body.username,
              lastname: req.body.lastname,
              sex: 1,
              route: 0,
              anping_mission1: 0,
              anping_mission2: 0,
              anping_mission3: 0,
              anping_mission4: 0,
              anping_mission5: 0,
              anping_mission6: 0,
              chihkan_mission1: 0,
              chihkan_mission2: 0,
              chihkan_mission3: 0,
              chihkan_mission4: 0,
              chihkan_mission5: 0,
              chihkan_mission6: 0,
              confucious_mission1: 0,
              confucious_mission2: 0,
              confucious_mission3: 0,
              confucious_mission4: 0,
              confucious_mission5: 0,
              confucious_mission6: 0
            };
          console.log("user.create");          
          //a Sequelized method for adding new entries to the database
          User.create(data).then(function(newUser, created){
            //console.log("             "+newUser);
            if(!newUser) {
              return done(null, false);
            }
          

            if(newUser) {
              console.log('new user');
              useremail = email;
              global.useremail = useremail;
              //finduser();
              
              /*
              User.findAll({
                where:{
                  email: email
                }
              }).then(function(result){
                user_data = result;
                global.user_data = user_data;
                
                console.log('query all users');
                console.log(result[0].id);
                console.log(result[0].username);
                console.log(result[0].email);
                for(var i = 0, usr; usr = result[i++];){
                 console.log('id =' + usr.id + ', name' + usr.username + ', mail=' + usr.email);
                 console.log(usr);
                
                console.log('            user_ data = ');
                console.log(user_data);
                
              })
              */
              return done(null, newUser);
            }
          });        
        }
      });  
    }
  ))

  //LOCAL SIGNIN
  passport.use('local-signin', new LocalStrategy(
 
    {
      // by default, local strategy uses username and password, we will override with email
      usernameField: 'email',
      passwordField: 'password',
      // allows us to pass back the entire request to the callback
      passReqToCallback: true 
    },
 
 
    function(req, email, password, done) {
      var User = user;
      var isValidPassword = function(userpass, password) {
          return bCrypt.compareSync(password, userpass);
      }
 
        User.findOne({
          where: {
            email: email
          }
        }).then(function(user) {
          if (!user) {
            return done(null, false, {
              message: 'Email does not exist'
            });
 
          }
          //compare the password entered with the byCrypt
          if (!isValidPassword(user.password, password)) {
            return done(null, false, {
                message: 'Incorrect password.'
            });
          }
 
 
          var userinfo = user.get();
          useremail = email;
          global.useremail = useremail;
          return done(null, userinfo);
 
 
        }).catch(function(err) {
          console.log("Error:", err);
          return done(null, false, {
              message: 'Something went wrong with your Signin'
          });
        });
    }
  ));
}


