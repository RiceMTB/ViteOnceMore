<template>
    <div class="card flex align-items-center justify-content-center">
        <Card style="width: 25em">
            <template #header>
                <img alt="user header" src="https://www.citypng.com/public/uploads/preview/-51614361279q4q7nu9qhq.png" />
            </template>
            <template #title> BitCoin API Test </template>
            <template #subtitle> Updated: {{ price.updated }}</template>
            <template #content>
                <p>
                    Price: {{ price.price }}
                </p>
                <ProgressBar :value="40"> {{waittime}}/100 </ProgressBar>
            </template>
            <template #footer>
                <Button icon="pi pi-replay" 
                label="Get Update" 
                severity="secondary" 
                style="margin-left: 0.5em" 
                @click="getData()"/>
            </template>
        </Card>
    </div>
</template>

<script>
    import { ref } from "vue";
    export default {
        setup(){ 
            const waittime = ref(40); 
        },
        data() {
            return {
                price: [],
            };
        }, //End of Data

        methods: {
            async getData() {
                const res = await fetch("http://localhost:8090/api/bitcoin/");
                const finalRes = await res.json();
                this.price = finalRes;
                console.log(this.price)
            },
        }, // End of Methods

        mounted() {
            this.getData()
        }, // End of Mounted
    };
</script>
<style scoped>
img {
  max-width: 100%;
  height: auto;
}
</style>

