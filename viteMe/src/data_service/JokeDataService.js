import toMiddle from '../baseMid'

class Joke_Data_Service { 
    getAll() { 
        return toMiddle.get('/alljokes')
    };

    getrandom() {
        const rando = ""
        rando = toMiddle.get('/randomjoke')
        console.log(rando)
        if (rando === ""){ 
            rando = [{"JOKE_ID":397,"JOKE":"How does a French skeleton say hello?","PUNCHLINE":"Bone-jour.","PUNCHLINE_ID":397}]
        }
        return rando
    };
};

export default new Joke_Data_Service();