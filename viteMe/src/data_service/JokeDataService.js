
const RanoJokeApi = "http://localhost:8090/api/randomjoke"

class Joke_Data_Service {
    
    constructor(){ 
        this.randomJoke = []
    }

    get randomJoke(){
        const RJ = this.Random()
        RJ.then((data) => this.randomJoke = data[0])
        return this.randomJoke
    }
 

    async Random() {
        try{
            const response = await fetch(RanoJokeApi);
            if (!response.ok){ 
                throw new Error 
                    ('HTTP error: ${response.statusText}');
            }
            const data  = await response.json();
            return data;
        }
        catch(erroe){
            console.error("Couldn't get random joke: ${error}")
        }
    }

    async getData() {
        const res = await fetch("http://localhost:8090/api/randomjoke");
        const finalRes = await res.json();
        this.randomJoke = finalRes[0];
    }
}



export default new Joke_Data_Service();

