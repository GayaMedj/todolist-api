const { Task } = require('../db/sequelize')

module.exports = (app) => {
    app.delete('/tasks/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Task.findByPk(id)
        .then(task => {
            if(task != null) {
                Task.destroy({ where : {id: task.id} })
                const message = `La tâche dont l'id est ${id} à était bien supprimée.`
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

}