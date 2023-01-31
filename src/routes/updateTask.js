const { Task } = require('../db/sequelize')

module.exports = (app) => {
    app.put('/tasks/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Task.update(req.body, { where : {id: id} })
        .then(_ => {
            return Task.findByPk(id)
            .then(task => {
                if (task !== null) {
                    const message = `La tâche (id = ${id}) a était bien modifiée.`
                    res.json({message, data: task})
                } else {
                    const message = `La tâche (id = ${id}) n'existe pas.`
                    res.status(404).json({message})
                }
            })
            .catch(error => {
                const message = "La liste des tâches n'a pas pu être chargée. Réessayez dans un instant."
                res.status(500).json({message, data: error})
            })
        })
    })
}