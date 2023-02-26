module.exports = (sequelize, Sequelize) => {
    const App = sequelize.define("app", {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      website: {
        type: Sequelize.STRING
      },
      platform: {
        type: Sequelize.STRING,
        allowNull: false
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false
      },
   
    });
  
    return App;
  };