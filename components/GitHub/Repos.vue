<template>
  <div class="repos">
      <h3 class="page-heading mb-3">Repos</h3>
    <div v-for="repo in repos" class="card card-body mb-2" :key="repo.id">
          <div class="row">
            <div class="col-md-6">
              <a :href="repo.html_url" target="_blank">{{repo.name}}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: {{repo.stargazers_count}}</span>
              <span class="badge badge-secondary">Watchers: {{repo.watchers_count}}</span>
              <span class="badge badge-success">Forks: {{repo.forks_count}}</span>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  props: {
    repos: Array
  }
}
</script>