const axios = require('axios');

const getClima = async(lat, lon) => {


    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=f96071c35230272cc731044c111c2a2d&units=metric`)

    //   if (resp.data.main.temp.legth === 0) {
    //       throw new Error('Error al obtener el dato');
    //   }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}