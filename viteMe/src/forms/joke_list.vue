<template>
    <div class="jokeList">
        <DataTable :value="jokes" 
            paginator :rows="15" 
            :rowsPerPageOptions="[15, 30, 45, 60]" 
            removableSort
            stripedRows 
            tableStyle="min-width: 50rem">
            <Column v-for="col of columns" 
                :key="col.field" 
                :field="col.field" 
                :header="col.header"
                sortable
                >
            </Column>
        </DataTable>
    </div>
</template>




<script>

export default {
    data() {
        return {
            jokes: null,
        };
    },
    created() {
        this.columns = [
            { field: 'JOKE_ID', header: 'Joke ID' },
            { field: 'JOKE', header: 'Joke' },
            { field: 'PUNCHLINE', header: 'Punchline' },
        ]
    },
    methods: {
      async getData() {
        const res = await fetch("http://localhost:8090/api/alljokes");
        const finalRes = await res.json();
        this.jokes = finalRes;
      },

    },
    mounted() {
      this.getData()
    }
};
</script>
<style scoped>
div{ 
    padding: 0%;
    max-height: 600px;
    width: 1200px;
    
}
</style>