
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_DATABASE, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    });

var connectDB = async() =>{
       await sequelize.authenticate().then(resp => {
         console.log("Connection to the db established successfully");
       }).catch(error => console.log("Unable to connect to the db:", error) );
}

module.exports = {
    sequelize: sequelize,
    connectDB: connectDB,
}