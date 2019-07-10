<template >
  <div>
    <span v-for="branch in branches" :key="branch">
      <input type="radio" :id="branch" :value="branch" name="branch" v-model="currentBranch" />
    <label :for="branch">{{ branch }}</label>

    </span>
    
  </div>
</template>

<script>

export default {
  props: {
    branches:Array,
    
  },
  created() {
    // console.log(this.branches)
  },
  data(){
      return {
        currentBranch:'master'
          
      }

  },
  watch: {
    currentBranch: "branchChange"
  },
  methods: {
    branchChange: function() {
      // console.log(this.currentBranch)
      this.$emit('change-branch', this.currentBranch)
    }
  }
  //计算属性 计算属性将被混入到 Vue 实例中
  // 计算属性是基于它们的响应式依赖进行缓存的   简单理解，计算属性有缓存，方法不会有缓存
//   computed: {
//     listeners() {
//       return {
//         // Pass all component listeners directly to input
//         ...this.$listeners,
//         // Override input listener to work with v-model
//         input: event => {
//           console.log(event.target.value);
//           this.$emit("input", event.target.value);
//         }
//       };
//     }
//   }
};
</script>

<style lang="scss" scoped>
// @import "../styles/variables.scss";

// .input {
//   width: 100%;
//   padding: 8px 10px;
//   border: 1px solid $vue-blue;
// }
</style>
