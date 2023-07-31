<template> 
    <head>{{ mylabel }}</head>
</template>

<script>
    
    export default{ 
        props:{ 
        mylabel: String,
        },
        methods:{ 
            getlabel(){ 
                return this.mylabel
            }   
        }
    }
</script>
<style>

</style>