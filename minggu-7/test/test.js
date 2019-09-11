//pemangilan library axios
const axios = require('axios');

//url api
const url = 'https://rickandmortyapi.com/api/character';    

//action GET METHOD
axios.get(url).then(res =>{
    //jika seccess akan tertampil disini
    console.log(res);
}).catch(err =>{
    //jika error akan tertampil disini
    console.log(err);
})