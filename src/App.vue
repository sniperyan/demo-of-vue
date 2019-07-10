<template>
  <div id="app">
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >{{ tab }}</button>

    <component v-bind:is="currentTabComponent" class="tab"></component>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Posts from "./components/Posts.vue";
import Archive from "./components/Archive.vue";

export default {
  // 局部注册
  components: {
    Home,
    Posts,
    Archive
  },
  data() {
    return {
      currentTab: "Home",
      tabs: ["Home", "Posts", "Archive"]
    };
  },
  computed: {
    currentTabComponent: function() {
      return this.currentTab;
    }
  }
};
</script>

<style lang="scss">
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>