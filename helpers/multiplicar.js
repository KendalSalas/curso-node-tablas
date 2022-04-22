const fs = require('fs');

const colors = require('colors');

const crearArchivoTabla = async (base = 5, listar, hasta) => {

    try {
        let salida = '';

        for (let i = 0; i <= hasta; i++) {
            const res = base * i;
            salida += (`${base}x${i} = ${res}\n`);
        }

        if (listar) {
            console.log('===============')

            const mensaje = `Tabla del ${base}`;

            console.log(mensaje.green);
            console.log('===============')
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `Tabla del ${base} creada con éxito`.green;
    } catch (err) {
        return 'Error al intentar crear el archivo: ', err;
    }


}

//Para exportar modulos en Node, se utiliza module.exports
//Esto se hace creando un objeto al cual le puedo pasar un parametro cualquiera con la funcion que quiero pasar
//Por lo general, el parametro lleva el mismo nombre de la funcion a exportar
module.exports = {
    crearArchivoTabla
}