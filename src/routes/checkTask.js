const { Task } = require('../db/sequelize')

module.exports = (app) => {
    app.patch('/tasks/:id', (req, res) => {
        const id = parseInt(req.params.id)
        return Task.findByPk(id)
        .then(task => {
            if(task === null) {
                const message = "Cette tâche n'existe pas"
                return res.status(404).json({message})
            }
            Task.update({ finished: !task.finished }, {
                where : { id: task.id }
            })
            const message = `La tâche (id = ${id}) a était bien modifiée.`
            res.json({message, data: task})
        })
        .catch(error => {
            const message = "Erreur"
            res.status(500).json({message, data: error})
        })
    })
}