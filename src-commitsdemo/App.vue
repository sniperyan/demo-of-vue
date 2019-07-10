<template>
  <div id="app">
    <h1>Latest Vue.js Commits</h1>
    <Branch :branches="branches" v-on:change-branch="changeBranch"/>
    <p>vuejs/vue@{{ currentBranch }}</p>
    <ul>
      <li v-for="record in commits" :key="record.id">
        <a :href="record.html_url" target="_blank" class="commit">{{ record.sha.slice(0, 7) }}</a>
        -
        <span class="message">{{ record.commit.message | truncate }}</span>
        <br />by
        <span class="author">
          <a :href="record.author.html_url" target="_blank">{{ record.commit.author.name }}</a>
        </span>
        at
        <span class="date">{{ record.commit.author.date | formatDate }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Branch from "./components/Branch.vue";
var apiURL = "https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=";

export default {
  // 局部注册
  components: {
    Branch
  },
  data() {
    return {
      branches: ["master", "dev"],
      currentBranch: "master",
      commits: null
    };
  },
  created() {
    this.fetchData();
  },

  watch: {
    currentBranch: "fetchData"
  },
  filters: {
    truncate: function(v) {
      var newline = v.indexOf("\n");
      return newline > 0 ? v.slice(0, newline) : v;
    },
    formatDate: function(v) {
      return v.replace(/T|Z/g, " ");
    }
  },

  methods: {
    fetchData: function() {
      var self = this;
      var xhr = new XMLHttpRequest();
        xhr.open("GET", apiURL + self.currentBranch);
        xhr.onload = function() {
          self.commits = JSON.parse(xhr.responseText);
          // console.log(self.commits[0].html_url);
        };
        xhr.send();
    },
    changeBranch(branch){
      this.currentBranch = branch

    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Helvetica", Arial, sans-serif;
}
a {
  text-decoration: none;
  color: #f66;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}
.author,
.date {
  font-weight: bold;
}
</style>