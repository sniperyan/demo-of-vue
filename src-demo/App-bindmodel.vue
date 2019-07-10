<template>
  <div id="app">
    <h1>Latest Vue.js Commits</h1>
    
    <input v-model="inputValue"/>
    <p>{{inputValue}}</p>
    <button @click="resetInputValue()">resetInputValue</button>

    <img :src="imgsrc" />
    
  </div>
</template>

<script>
import { setTimeout } from 'timers';


export default {
 
  data() {
    return {
      imgsrc:'',
      inputValue:'',
    };
  },
  created() {
    setTimeout(()=>{
    this.imgsrc = 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1562654508&di=aeb82cdc73ed1c1f2dc3091af53c32e8&src=http://pic2.52pk.com/files/allimg/090626/1553504U2-2.jpg'
    },3000)
  },

  watch: {
  },
  methods:{
    resetInputValue(){
      this.inputValue = '';

    }

  },
  
};
</script>

<style lang="scss">

*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  text-align: center;
}
</style>