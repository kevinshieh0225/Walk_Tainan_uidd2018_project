//MySQL要存的內容
//使用者關係內容

module.exports = function(sequelize, Sequelize) {
  var Relationship = sequelize.define('relationship',{
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    user_one_id: {
        type: Sequelize.INTEGER
    },

    user_two_id: {
        type: Sequelize.INTEGER
    },

    status: {
        type: Sequelize.INTEGER
    },

    action_user_id: {
        type: Sequelize.INTEGER
    },
  });
  global.Relationship = Relationship;
  return Relationship;

}
