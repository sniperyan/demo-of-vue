<template>
  <div id="app" @touchmove.prevent>
    <DraggableHeaderView>
      <template slot="header">
        <h1>Elastic Draggable SVG Header</h1>
        <p>
          with
          <a href="https://vuejs.org">Vue.js</a> +
          <a href="http://dynamicsjs.com">dynamics.js</a>
        </p>
      </template>
      <template slot="content">
        <p>Note this is just an effect demo - there are of course many additional details if you want to use this in production, e.g. handling responsive sizes, reload threshold and content scrolling. Those are out of scope for this quick little hack. However, the idea is that you can hide them as internal details of a Vue.js component and expose a simple Web-Component-like interface.</p>
      </template>
    </DraggableHeaderView>
  </div>
</template>

<script>
import DraggableHeaderView from "./components/DraggableHeaderView.vue";

export default {
  // 局部注册
  components: {
    DraggableHeaderView
  },
  
};
</script>

<style lang="scss">
h1 {
  font-weight: 300;
  font-size: 1.8em;
  margin-top: 0;
}
a {
  color: #fff;
}
</style>