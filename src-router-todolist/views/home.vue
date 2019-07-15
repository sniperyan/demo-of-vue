<template>
  <div class="todoapp">
    <header-view @add-todo="addTodo"></header-view>
    <main-view :todos="filteredTodos" @del-todo="delTodo" @all-done="allDone"></main-view>
    <footer-view :todos="todos" :current="current" @remove-completed="removeCompleted"></footer-view>
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView";
import MainView from "@/components/MainView";
import FooterView from "@/components/FooterView";
import util from '@/util'

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
      this.current = to.name
    },
  },
  computed: {
    filteredTodos () {
      return util[this.current](this.todos)
    }
  },
  updated() {
    // console.log(this.todos);
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    delTodo(item) {
      this.todos.splice(this.todos.indexOf(item), 1);
    },
    allDone(value) {
      this.todos.forEach(todo => {
        todo.completed = value;
      });
    },
    removeCompleted(){
      this.todos = util.active(this.todos)
    }
  }
};
</script>