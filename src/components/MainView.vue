<template>
  <section class="main">
    <input id="toggle-all" type="checkbox" class="toggle-all" v-model="allDone" />
    <label for="toggle-all">全选</label>
    <ul class="todo-list">
      <li class="todo" v-for="(item,index) in todos" :key="index">
        <div class="view">
          <input type="checkbox" class="toggle" v-model="item.completed">
          <label>{{ item.title }}</label>
          <button class="destroy" @click="handleDel(item)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import util from "@/util";
export default {
  name: "MainView",
  props: {
    todos: {
      type: Array
    }
  },
  //   data () {
  //     return {
  //       editedTodo: null
  //     }
  //   },

  updated(){
      // console.log(this.todos)

  },
  computed: {
    // 未完成的数量
    remaining() {
      return util.active(this.todos).length;
    },
    /**
     * 计算属性默认只有 getter 
     */
    allDone: {
      // 监视当前属性值的变化，当属性值发生变化时执行，更新相关的属性数据
      // value 参数就是 allDone的最新属性值
      set(value) {
        this.$emit("all-done", value);
      },
      // 计算属性中的get方法，方法的返回值就是属性值
      get() {
        return this.remaining === 0;
      }
    }
  },
  methods:{
      handleDel(item){
          this.$emit("del-todo", item);

      }

  }
};
</script>

<style lang="scss">
.main{
  min-height:45vh;
}
</style>