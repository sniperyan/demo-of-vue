<template>
  <div class="todoapp">
    <header-view></header-view>
    <main-view></main-view>
    <footer-view></footer-view>
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView";
import MainView from "@/components/MainView";
import FooterView from "@/components/FooterView";
// import util from '@/util'

export default {
  name: "Home",
  components: {
    HeaderView,
    MainView,
    FooterView
  },
  data() {
    return {
      todos: [],
      current: 'all'
    };
  },
  watch: {
    '$route' (to) {
      // this.current = to.name
      this.$store.commit('todo/set-current',to.name);
    },
  },
  // computed: {
  //   filteredTodos () {
  //     return util[this.current](this.todos)
  //   }
  // },
  updated() {
    // console.log(this.todos);
  },
  methods: {
    // addTodo(newTodo) {
    //   this.todos.push(newTodo);
    // },
    // delTodo(item) {
    //   this.todos.splice(this.todos.indexOf(item), 1);
    // },
    // allDone(value) {
    //   this.todos.forEach(todo => {
    //     todo.completed = value;
    //   });
    // },
    // removeCompleted(){
    //   this.todos = util.active(this.todos)
    // }
  }
};
</script>