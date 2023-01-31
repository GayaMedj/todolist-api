const { Task } = require('../db/sequelize')

module.exports = (app) => {

    app.post('/tasks', (req, res) => {
        Task.create(req.body)
        .then(task => {
            const message = "La tâche a était bien crée."
            res.json({message, data: task})
        })
    })

}