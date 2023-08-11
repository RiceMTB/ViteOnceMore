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
    background-color: white;
    font-size: x-large;
    padding-top: 5px;
    padding-bottom: 15px;
    font-weight: bold;
    z-index: 1;
}
</style>