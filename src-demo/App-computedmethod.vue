<template>
  <div id="app">
    <input type="number" v-model="num1" />
    <input type="number" v-model="num2" />
    <P>{{result}}</P>
    <button @click="doa()"></button>
    
  </div>
</template>

<script>


export default {
 
  data() {
    return {
      num1:0,
      num2:0,
    };
  },
  created() {
    
  },
  computed:{    
                result:function(){
                        return parseInt(this.num1) + parseInt(this.num2)    
                        // 计算属性必须有一个返回值
                }
  },
  methods:{
    doa(){
      alert(this.result)
    }

  },

  watch: {
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