<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{todos.length}}</strong> 项</span>
    <ul class="filters">
      <li>
        <router-link to="all" :class="showCurrent('all')">全部</router-link>
      </li>
      <li>
         <router-link to="active" :class="showCurrent('active')">进行中</router-link>
      </li>
      <li>
        <router-link to="completed" :class="showCurrent('completed')">已完成</router-link>
      </li>
    </ul>
    <button class="clear-completed" @click="removeCompleted">清除</button>
  </footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'FooterView',
  // props:{
  //   todos: {
  //     type: Array
  //   },
  //   current: {
  //     type: String
  //   }
  // },
  computed:{
     ...mapState({
        todos: state => state.todo.todos,
        current: state => state.todo.current,
      }),
  },
  // computed: mapState(["todos","current"]),
  methods:{
    removeCompleted(){
      // this.$emit('remove-completed')
      this.$store.commit('todo/remove-completed');

    },
    showCurrent(current){
      return this.current === current ? 'selected' : ''

    }
  }

}

</script>