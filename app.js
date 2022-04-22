const { crearArchivoTabla } = require('./helpers/multiplicar')
const argv = require('./config/yargs');

console.clear();

const base = argv.base;
const listar = argv.listar;
const hasta = argv.hasta;

crearArchivoTabla(base, listar, hasta)
    .then( nombreArchivo => console.log(nombreArchivo) )
    .catch( error => console.log(error) )

