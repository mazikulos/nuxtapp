<template>
  <div class="github">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <GitHubSearcher @getUsername="userName = $event" />
        </div>
        <div class="col-12">
          <GitHubUser v-if="this.user !== null && this.error === false" :user="user" />
          <UserNotFound v-if="this.error === true" />
        </div>
        <div class="col-12">
          <Repos v-if="this.user !== null && this.error === false" :repos="repos" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GitHubSearcher from "~/components/GitHub/GitHubSearcher";
import GitHubUser from "~/components/GitHub/GitHubUser";
import Repos from "~/components/GitHub/Repos";
import UserNotFound from "~/components/GitHub/UserNotFound";

export default {
  data() {
    return {
      user: null,
      userName: null,
      repos: null,
      error: false
    };
  },
  components: {
    GitHubSearcher,
    GitHubUser,
    Repos,
    UserNotFound
  },
  watch: {
    userName: function() {
      this.getUser(this.userName);
      this.getRepos(this.userName);
    }
  },
  methods: {
    async getUser(name) {
      const user = await fetch(
        `https://api.github.com/users/${name}?client_id=${process.env.githubClientId}&client_secret=${process.env.githubClientSecret}`
      );
      const profile = await user.json();
      if (profile.message === "Not Found") {
        this.error = true;
        this.showError();
        this.user = null;
        return;
      } else {
        this.error = false;
        this.user = profile;
      }
    },
    async getRepos(name) {
      let repos_count = 5;
      let repos_sort = "created: asc";
      const repos = await axios.get(
        `https://api.github.com/users/${name}/repos?per_page=${repos_count}&sort=${repos_sort}&client_id=${process.env.githubClientId}&${process.env.githubClientSecret}`
      );
      this.repos = repos.data;
    }
  }
};
</script>