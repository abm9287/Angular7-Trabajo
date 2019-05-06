const knex = require('./knex/knex')

module.exports = {
    getAll_inscripcion,
    post_inscripcion,
    getAll_anulacion,
    post_anulacion
};

function getAll_inscripcion(req, res) {
    knex.select()
        .from('inscripcion')
        .then( inscripcion => res.send(inscripcion));
}

function post_inscripcion(req, res) {    
    knex('inscripcion').insert({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        fecha_nacimiento: req.body.fecha_nacimiento,
        cedula: req.body.cedula,
        sexo: req.body.sexo,
        provincia: req.body.provincia,
        canton: req.body.canton,
        parroquia: req.body.parroquia,
        direccion: req.body.direccion,
        celular: req.body.celular,
        correo: req.body.correo,
        etnia: req.body.etnia,
        titulo_bachiller: req.body.titulo_bachiller,
        fecha_titulacion: req.body.fecha_titulacion
    })
    .then(() => {
        knex.select()
            .from('inscripcion')
            .then( inscripcion => res.send(inscripcion));
    })  
};


function getAll_anulacion(req, res) {
    knex.select()
        .from('anulacion')
        .then( anulacion => res.send(anulacion));
}

function post_anulacion(req, res) {    
    knex('anulacion').insert({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        fecha_nacimiento: req.body.fecha_nacimiento,
        cedula: req.body.cedula,
        sexo: req.body.sexo,
        provincia: req.body.provincia,
        canton: req.body.canton,
        parroquia: req.body.parroquia,
        direccion: req.body.direccion,
        celular: req.body.celular,
        correo: req.body.correo,
        etnia: req.body.etnia,
        titulo_bachiller: req.body.titulo_bachiller,
        fecha_titulacion: req.body.fecha_titulacion
    })
    .then(() => {
        knex.select()
            .from('anulacion')
            .then( anulacion => res.send(anulacion));
    })  
};