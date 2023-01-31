const { Sequelize, DataTypes } = require('sequelize')
const TaskModel = require('../models/task')

// Connexion à la base de données
const sequelize = new Sequelize('username', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})


sequelize.authenticate()
    .then(_ => console.log('La connexion à la DB a bien été établie.'))
    .catch(error => console.error(`Impossible de se connecteter a la DB ${error}`))

const Task = TaskModel(sequelize, DataTypes)

// Initialiser la base de donnée
const initDb = () => {
  return sequelize.sync({force: false}).then(_ => {
    console.log('La base de donnée a bien été initialisée !')
  })
}

module.exports = {
  initDb, Task
}