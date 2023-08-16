<template>
    <div class="card flex align-items-center justify-content-center">
        <Card style="width: 25em">
            <template #header>
                <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            </template>
            <template #title> Random Joke </template>
            <template #subtitle> Joke ID: {{ joke.JOKE_ID }}</template>
            <template #content>
                <p>
                    Joke: {{ joke.JOKE }}
                </p>
                <p>
                    Punchline: {{ joke.PUNCHLINE }}
                </p>
            </template>
            <template #footer>
                <Button icon="pi pi-replay" label="New Joke" severity="secondary" style="margin-left: 0.5em" @click="getData()"/>
            </template>
        </Card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                joke: [],
            };
        }, //End of Data

        methods: {
            // getData(){ 
            //     JokeData.getData()
            //     this.joke = JokeData.randomJoke
            // }
            async getData() {
                const res = await fetch("http://localhost:8090/api/randomjoke");
                const finalRes = await res.json();
                this.joke = finalRes[0];
            },
        }, // End of Methods

        mounted() {
            this.getData()
        }, // End of Mounted
    };
</script>