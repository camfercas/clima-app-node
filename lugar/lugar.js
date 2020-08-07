const axios = require('axios');

const getLugarLatLong = async(direccion) => {

    const encodedUrl = encodeURI(direccion);

    const apikey = '9b8ed286ca3f6304c4884b551bb47727';

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=${apikey}`
    });

    const resp = await instance.get();

    if (resp.data.coord.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const lugar = resp.data.name;
    const lat = resp.data.coord.lat;
    const long = resp.data.coord.lon;

    return {
        lugar,
        lat,
        long
    };

};

module.exports = {
    getLugarLatLong
};