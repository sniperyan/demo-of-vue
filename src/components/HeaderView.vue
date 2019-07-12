<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="请输入待办事项"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
  </header>
</template>

<script>
export default {
  name: "HeaderView",
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    addTodo() {
      let value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      /**
       * 自定义事件
       * v-on 事件监听器在 DOM 模板中会被自动转换为全小写 (因为 HTML 是大小写不敏感的)，
       * 所以 v-on:myEvent 将会变成 v-on:myevent——导致 myEvent 不可能被监听到
       * 因此，我们推荐你始终使用 kebab-case 的事件名
       */
      this.$emit('add-todo', { title: value, completed: false })
      this.newTodo = ''
    }
  }
};
</script>
<style lang="scss"></style>