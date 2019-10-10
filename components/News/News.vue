<template>
  <div class="news">
    <div class="news__main-img text-center mb-5">
      <img class="img-fluid" :src="news.urlToImage" :alt="news.title" />
      {{ news.source.name }}
    </div>
    <h2 class="news__title title">{{ news.title }}</h2>
    <div class="news__date mb-4">
      <div class="news__content" v-html="news.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: Object
  }
};
</script>