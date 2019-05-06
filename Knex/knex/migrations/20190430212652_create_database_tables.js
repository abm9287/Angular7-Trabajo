exports.up = function(knex, Promise) {
    return Promise.all([
    knex.schema.createTable('inscripcion', function(table) {
        table.increments('id_inscripcion').primary();
        table.string('nombres');
        table.string('apellidos');
        table.date('fecha_nacimiento');
        table.string('cedula');
        table.string('sexo');
        table.string('provincia');
        table.string('canton');
        table.string('parroquia');
        table.string('direccion');
        table.string('celular');
        table.string('correo');
        table.string('etnia');
        table.string('titulo_bachiller');
        table.date('fecha_titulacion');
    }),
    knex.schema.createTable('anulacion', function(table) {
      table.increments('id_anulacion').primary();
      table.string('nombres');
      table.string('apellidos');
      table.date('fecha_nacimiento');
      table.string('cedula');
      table.string('sexo');
      table.string('provincia');
      table.string('canton');
      table.string('parroquia');
      table.string('direccion');
      table.string('celular');
      table.string('correo');
      table.string('etnia');
      table.string('titulo_bachiller');
      table.date('fecha_titulacion');
  })
    ])
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('inscripcion'),
        knex.schema.dropTable('anulacion')
    ]);
  };