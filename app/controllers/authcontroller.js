var exports = module.exports = {}
 
exports.signup = function(req, res) {
   
      res.render('signup');

}

exports.signin = function(req, res) {

  res.render('signin');

}

exports.dashboard = function(req, res) {

  //console.log(req);
  res.render('dashboard');

}

exports.logout = function(req, res) {
  req.session.destroy(function(err){
    res.redirect('/');
  });
}

exports.friend = function(req, res){
  res.render('friend');
}
//exports.index = function(req, res) {

//  res.render('index');
//}
