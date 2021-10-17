//MySQL要存的內容
//user 內容

module.exports = function(sequelize, Sequelize) {
    var User = sequelize.define('user', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        username: {
            type: Sequelize.STRING,
            notEmpty: true
        },
       
        sex: {
            type: Sequelize.INTEGER
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        last_login: {
            type: Sequelize.DATE
        },
        
        route:{
            type: Sequelize.INTEGER
        },

        anping_mission1: {
            type: Sequelize.INTEGER
        },

        anping_mission2: {
            type: Sequelize.INTEGER
        },

        anping_mission3: {
            type: Sequelize.INTEGER
        },

        anping_mission4: {
            type: Sequelize.INTEGER
        },

        anping_mission5: {
            type: Sequelize.INTEGER
        },

        anping_mission6: {
            type: Sequelize.INTEGER
        },
    
        chihkan_mission1: {
            type: Sequelize.INTEGER
        },

        chihkan_mission2: {
            type: Sequelize.INTEGER
        },

        chihkan_mission3: {
            type: Sequelize.INTEGER
        },

        chihkan_mission4: {
            type: Sequelize.INTEGER
        },

        chihkan_mission5: {
            type: Sequelize.INTEGER
        },

        chihkan_mission6: {
            type: Sequelize.INTEGER
        },
        confucious_mission1: {
            type: Sequelize.INTEGER
        },

        confucious_mission2: {
            type: Sequelize.INTEGER
        },

        confucious_mission3: {
            type: Sequelize.INTEGER
        },

        confucious_mission4: {
            type: Sequelize.INTEGER
        },

        confucious_mission5: {
            type: Sequelize.INTEGER
        },

        confucious_mission6: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }        
  },
  {
    charset: 'utf8', collate: 'utf8_unicode_ci'
  });

  return User;

}
