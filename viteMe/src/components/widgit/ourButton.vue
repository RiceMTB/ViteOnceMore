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

<template> 
    <button class="button">{{ mylabel }}</button>
</template>

<style>

    .button {
    display: block;
    padding: 10px 25px;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #b9bb49;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #999;
    width: 50%;
    margin-bottom: 20px   
    }

.button:hover {background-color: #4e4e21}

.button:active {
  background-color: #8e8d3e;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>