<template> 
    <form class="frm_jokebyID" @submit.prevent="onsubmit">
        <h2>Input ID and press 'Submit'</h2>
        <input v-model.number="this.jokeID" type="number" id="jokdID">
        <input class="button" type="submit" value="Submit" @click="getData">
        <div v-if="Object.keys(jokeByID).length > 0">
            <p>JOKE: {{ jokeByID.JOKE }}</p>
            <p>Punchline: {{ jokeByID.PUNCHLINE }}</p>

        </div>
    </form>
</template>
<script> 
    export default{
        data(){
            return{ 
               jokeID: null,
               jokeByID:{}
            }
        },
        methods:{ 
            async getData() {
                console.log(this.jokeID)
                var fullstring ="http://localhost:8090/api/jokebyid/"+this.jokeID
                const res = await fetch(fullstring);
                const finalRes = await res.json();
                this.jokeByID = finalRes[0];
            },
        }
    }
</script>