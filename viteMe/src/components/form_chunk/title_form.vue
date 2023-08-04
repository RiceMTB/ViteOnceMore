<template> 
    <div>
        {{ form_title }} 
    </div>
</template>

<script>
    export default{ 
        props:{ 
        form_title: String,
        },
        methods:{ 
            getlabel(){ 
                return this.form_title
            }   
        }
    }
</script>
<style scoped>
div{
    position: fixed;
    width: 100%;
    top: 43px;
    left: 0;
    font-size: x-large;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: bold;
}
</style>