const { Task } = require('../db/sequelize')

module.exports = (app) => {
    app.get('/tasks', (req, res) => {
        return Task.findAll()
        .then(tasks => {
            const message = "La liste des tâches a était bien récupérée."
            res.json({message, data: tasks})
        })
        .catch(error => {
            const message = "La liste des tâches n'a pas pu être récupérée. Réessayez dans un instant."
            res.status(500).json({message, data: error})
        })
    })   
}