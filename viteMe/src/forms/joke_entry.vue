<template>
    <div class="flex flex-column gap-.5">
        <label class ="thelabel" id="lblnewJoke" for="newJoke">New Joke</label>
        <InputText id="newJoke" v-model="value" style="width: 400px" />
        <label class ="thelabel" for="newPunchline">Punchline</label>
        <InputText id="newPunchline" v-model="value" style="width: 400px" />
        <button class = "button theButton">Submit</button>
    </div>
 </template>

<script>
    const form_title= "Add New Joke"
    export default { 
        form_title
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