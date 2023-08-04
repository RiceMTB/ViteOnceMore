import http from '../baseMid.js'

class Joke_Data_Service { 
    getAll() { 
        return http.get('/alljokes')
    };

    getrandom() {
        const rando = ""
        rando = http.get('/randomjoke')
        console.log(rando)
        if (rando === ""){ 
            rando = [{"JOKE_ID":397,"JOKE":"How does a French skeleton say hello?","PUNCHLINE":"Bone-jour.","PUNCHLINE_ID":397}]
        }
        return rando
    };
};

export default new Joke_Data_Service();