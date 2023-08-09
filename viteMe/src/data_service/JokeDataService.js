import toMiddle from '../baseMid.js'

class Joke_Data_Service { 
    getAll() { 
        return toMiddle.get('/alljokes')
    };

    getrandom() {
        try { 
            const response = toMiddle.get('/randomjoke')
            return response.data
        }
        catch(error){ 
            console.error(error)
        }
    };
};

export default new Joke_Data_Service();