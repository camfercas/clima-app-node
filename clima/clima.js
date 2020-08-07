const axios = require('axios');

const getClima = async(lat, long) => {

    const apikey = '9b8ed286ca3f6304c4884b551bb47727';

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}&units=metric`);

    return resp.data.main.temp;

};

module.exports = {
    getClima
};