<template>
  <section class="news-list">
    <div class="row">
        <NewsPreview v-for="(n, index) in news.slice(0,quantity)" :news="n" :key="index" />
    </div>
  </section>
</template>

<script>
import NewsPreview from "~/components/News/NewsPreview";

export default {
  components: {
    NewsPreview
  },
  props: {
    news: Array,
    quantity: {
      type: Number,
      required: false
    }
  }
};
</script>