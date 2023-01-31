const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const Sequelize = require('./src/db/sequelize')

const app = express();
const port = 3000;

// Middlewares
app
    .use(morgan('dev'))
    .use(bodyParser.json())

Sequelize.initDb();

// Les points de terminaisons
require('./src/routes/findAllTasks.js')(app)
require('./src/routes/createTask.js')(app)
require('./src/routes/deleteTask.js')(app)
require('./src/routes/updateTask.js')(app)
require('./src/routes/checkTask.js')(app)

app.listen(port, () => console.log(`Application Node démarrée sur http://localhost:${port}`))