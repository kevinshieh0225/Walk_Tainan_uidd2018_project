var express = require('express');
var app = express();
//handle authentication
var passport = require('passport')
var session = require('express-session')
/*************************/
var bodyParser = require('body-parser')
var env = require('dotenv').load();
var exphbs = require('express-handlebars')
var Sequelize = require("sequelize");

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*****For Passport******/
//session secret
app.use(session({secret: 'keyboard cat',resave: true, saveUninitialized:true}));
app.use(passport.initialize());
//persistent login sessions
app.use(passport.session())
/***********************/

/*****For Handlebars****/
app.set('views', './app/views')
app.engine('hbs' ,exphbs({
  extname: '.hbs'
}));
app.set('view engine', '.hbs')
/***********************/

//Signin or Signup
var controll = require('./app/controllers')
    , path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', controll.index)

//app.get('/',function(req, res) {

//  res.send('Welcome to Passport with Sequelize');

//});

//Models
var models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app,passport);

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);

//Sync Database
models.sequelize.sync().then(function(){
  console.log('Nice! Database looks fine')
}).catch(function(err){
  console.log(err, "Something went wrong with the Database Update!")
});


//LoginPage
//var controll = require('./app/controllers/index.js')

//app.get('/', index);

//https
var https = require('https')
   ,fs = require("fs");

var options = {
  key: fs.readFileSync('./privatekey.pem'),
  cert: fs.readFileSync('./certificate.pem')
};

https.createServer(options, app).listen(10095, function(){
  console.log('Https server listening on port ' + 10095);
});

//
require('./app/config/passport/passport.js'); 
//global variable: useremail
//global variable: User
//global variable: Relationship
//check 使用者朋友
app.post('/check_friend',function(req, res, next){
  console.log('road in choose page= ' + req.body.road);
  check_friend(res);
  //res.send(friend_data);
});

var user_data;
const Op = Sequelize.Op;
var friend_id = [];
var friend_data = [];
function check_friend(res)
{
  console.log("useremail = " + useremail);
  //找user_data
  User.findAll({
    where:{
      email: useremail
    }
  }).then(function(result){
    //friend_data[0] 存user_data
    friend_data[0] = result[0];
    user_data = result;
    console.log("user id in check friend = " + user_data[0].id); 
    //find friend
    Relationship.findAll({
      where:{
        [Op.or]: [{user_one_id: user_data[0].id}, {user_two_id: user_data[0].id}]
      }
    }).then(function(result){
      console.log('check_friend result = ');
      console.log(result);
      console.log('result length= ' + result.length);
      for(i=0; i<result.length; i++) {
        if(result[i].user_one_id != user_data[0].id)
          friend_id[i] = result[i].user_one_id;
        if(result[i].user_two_id != user_data[0].id)
          friend_id[i] = result[i].user_two_id;
      }
      if(result.length == 0){
        res.send(friend_data);
      }
      else{
        search_friend_data(res)
      }
    });
  });
  //console.log("user id in check friend = " + user_data[0].id);
  //找好友
  /*
  Relationship.findAll({
    where:{
      [Op.or]: [{user_one_id: user_data[0].id}, {user_two_id: user_data[0].id}]
    }
  }).then(function(result){
    console.log('      check_friend result = ');
    console.log(result);
  })
  */
}

var count = 1; 
function search_friend_data(res)
{
  for(i=0; i<friend_id.length; i++){
      console.log("friend " + (i+1) + " = " + friend_id[i]);
      User.findById(friend_id[i],{
      }).then(function(user){
        console.log('count = ' + count);
        friend_data[count] = user;
        console.log("friend " + count + "  in search friend data = " + friend_data[count].username); 
        count++;
        if(count == friend_id.length+1)
          res.send(friend_data);
      });  
  }
  count = 1;
}

//讀取使用者資料回傳
app.post('/choosepage',function(req, res, next){
  console.log('user.route = ' + req.body.route);
  find_data(req.body.route,res);
});
//找使用者資料並把路線設定到mysql
function find_data(route,res){
  User.findOne({
    where:{
      email: useremail
    }
  }).then(function(result){
    console.log('        result = ');
    console.log(result.dataValues);
    res.send(result);
    return result.update({
      route: route
    })
  })

}

//更新使用者完成任務
var user_id;
var user_mission_done;
var mission_option;
app.post('/mission',function(req, res, next){
  user_mission_done = parseInt(req.body.mission_done);
  mission_option = req.body.mission_option;
  user_id = req.body.user_id;
  console.log('user mission option = ' + mission_option); 
  //console.log('user id = ' + user_id); 
  change_mysql();
  res.send('send success');
});

function change_mysql()
{
  console.log('change mysql');
  console.log('user id = ' + user_id);
  User.findById(user_id,{
  }).then(function(user){
    console.log("enter in user.fingbyid");
    
    console.log("user_mission_done in findbyid = " + user_mission_done);
    console.log("user_mission_option in findbyid = " + mission_option);
    switch(user_mission_done)
    {
      case 1:
        return user.update({
          anping_mission1: mission_option
        })
        break;
      case 2:
        return user.update({
          anping_mission2: mission_option 
        })
        break;
      case 3:
        return user.update({
          anping_mission3: mission_option  
        })
        break;       
      case 4:    
        return user.update({
          anping_mission4: mission_option  
        })
        break;         
      case 5:
        return user.update({
          anping_mission5: mission_option 
        });
        break;
      case 6:
        return user.update({
          chihkan_mission1: mission_option
        })
        break;
      case 7:
        return user.update({
          chihkan_mission2: mission_option 
        })
        break;
      case 8:
        return user.update({
          chihkan_mission3: mission_option  
        })
        break;       
      case 9:    
        return user.update({
          chihkan_mission4: mission_option  
        })
        break;         
      case 10:
        return user.update({
          chihkan_mission5: mission_option 
        });
        break;
      case 11:
        return user.update({
          confucious_mission1: mission_option
        })
        break;
      case 12:
        return user.update({
          confucious_mission2: mission_option 
        })
        break;
      case 13:
        return user.update({
          confucious_mission3: mission_option  
        })
        break;       
      case 14:    
        return user.update({
          confucious_mission4: mission_option  
        })
        break;         
      case 15:
        return user.update({
          confucious_mission5: mission_option 
        });
      case 16:
        return user.update({
          anping_mission6: mission_option  
        })
        break;       
      case 17:    
        return user.update({
          chihkan_mission6: mission_option  
        })
        break;         
      case 18:
        return user.update({
          confucious_mission6: mission_option 
        });
      default:
        console.log("change_mysql fail");
    }
  })

}

//搜尋其他使用者資料
var search_email;
var search_data;
app.post('/ajax_data',function(req, res, next){
  search_email = req.body.search_email;
  console.log("search email = " + req.body.search_email);
  //search_user();
  User.findAll({
    where:{
      email:search_email
    }
  }).then(function(result){
    console.log("          in sequelize search data = ");
    console.log(result);
    res.send(result)
  })
});  

//更新mysql_relationship
var user_one_id;
var user_two_id;
var user_status;
var action_user_id;
app.post('/plus_friend',function(req, res, next){
  user_one_id = req.body.user_one_id;
  user_two_id = req.body.user_two_id;
  user_status = req.body.status;
  action_user_id = req.body.action_user_id;
  console.log('user one id = ' + user_one_id);
  console.log('user two id = ' + user_two_id); 
  console.log('user status = ' + user_status); 
  console.log('user action = ' + action_user_id); 
  res.send("add friend success");
  add_friend(); 
})

function add_friend()
{
  console.log("add friend");
  var data = 
  {
    user_one_id: user_one_id,
    user_two_id: user_two_id,
    status: user_status,
    action_user_id: action_user_id
  };
  Relationship.create(data).then(function(newRelationship, created){
    if(!newRelationship)
      console.log("add friend fail");
    if(newRelationship)
      console.log("add friend success");
  });
}


//change sex
app.post('/change_sex',function(req, res, next){
  console.log("user sex = " + req.body.sex);
  console.log("useremail = " + useremail);
  User.findOne({
    where:{
      email: useremail
    }
  }).then(function(result){
    console.log("         result in change sex " );
    console.log(result)
    //res.send("change sex success");
    result.update({
      sex: req.body.sex
    });
    //res.send("change sex success");
  })
  res.send("change sex success");
});
/*
app.listen(10095, function(err){

  if(!err)
    console.log("Site is live");
  else 
    console.log(err);

});
*/
