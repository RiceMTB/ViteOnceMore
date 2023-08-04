<template>
    <div class="flex flex-column gap-.5">
        <label class ="thelabel" id="lblnewJoke" for="newJoke">New Joke</label>
        <InputText id="newJoke" v-model="newjoke.jokestr" style="width: 400px" />
        <label class ="thelabel" for="newPunchline">Punchline</label>
        <InputText id="newPunchline" v-model="newjoke.punchline" style="width: 400px" />
        <Button class = "button theButton" @click="openBasic">
            Submit
        </Button>
        <div class="card flex justify-content-center">
            <Dialog v-model:visible="displayWarn" modal header="Submit Joke To DADaBase?" :style="{ width: '50vw' }">
                <h3>Joke:</h3>
                <p>
                    {{ newjoke.jokestr }}
                </p>
                <h3>Punchline:</h3>
                <p>
                    {{ newjoke.punchline }}
                </p>
                <template #footer>
                    <Button label="No" icon="pi pi-times" @click="closeBasic" text />
                    <Button label="Yes" icon="pi pi-check" @click="closeBasic" autofocus />
                </template>
            </Dialog>
        </div>
    </div>
 </template>

<script>
    import { ref } from "vue";
    
    export default {
        setup() { 
            const displayWarn = ref(false);
            const form_title= "Add New Joke"
            const openBasic = () => {
                displayWarn.value = true;
            };
            const closeBasic = () => {
                displayWarn.value = false;
            };
            return {displayWarn, openBasic, closeBasic}
        }, 
        data() { 
            return { 
                newjoke: {
                    jokestr: '',
                    punchline: ''
                }
            }
        }
    }
    
</script>

<style scoped>
.thelabel{
    text-align: left;
}
button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
}
.thebutton{
    transition-duration: 0.4s;
}
.button:hover {
    background-color: #4CAF50; /* Green */
    color: white;
}

</style>