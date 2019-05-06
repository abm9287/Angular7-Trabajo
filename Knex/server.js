const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8001;
const knex = require('./knex/knex.js');

const routesCtrl = require('./routesCtrl');

const app = express();

app.use(express.static('cliente'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// RUTAS
app.get('/inscripcion', routesCtrl.getAll_inscripcion)
app.post('/inscripcion', routesCtrl.post_inscripcion)

app.get('/anulacion', routesCtrl.getAll_anulacion)
app.post('/anulacion', routesCtrl.post_anulacion)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});