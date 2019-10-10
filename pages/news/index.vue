<template>
  <div class="container">
    <div>
      <h1 class="title">
        nuxtapp
      </h1>
      <h2 class="subtitle">
        My app
      </h2>
      <NewsList :news="loadNews" />
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    loadNews() {
      return this.$store.getters.getNews.articles;
    }
  }
}
</script>


