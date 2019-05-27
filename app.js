const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descr: 'Direccion de la ciudad para obtener el clima',
        demand: false
    }
}).argv;



//console.log(argv.direccion);
//lugar.getLugarLatLng(argv.direccion)
//  .then(console.log);

//clima.getClima(35, 139)
//    .then(console.log)
//    .catch(console.log);

const getInfo = async(direccion) => {


    try {
        const coords = await lugar.getLugarLatLng(direccion);
        console.log('Coordenadas: '.coords);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direccion} es ${temp}.`;

    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }




}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);