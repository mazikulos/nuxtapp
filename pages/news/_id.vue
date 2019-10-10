<template>
  <div class="container">
    <div class="row">
      <div class="col-8 mx-auto">
        <News :news="news" />
        <Button :btnStyle="'btn-primary'" @click="goToNews">Back</Button>
      </div>
    </div>
  </div>
</template>

<script>
import News from "@/components/News/News";

export default {
  components: {
    News
  },
  methods: {
    goToNews() {
      return this.$router.push('/news')
    }
  },
  computed: {
    news() {
      const news = this.$store.getters.getNews.articles;
      const filteredNews = news.filter(n => n.title === this.$route.params.id);
      return filteredNews[0];
    }
  },
  validate({ params, query, store }) {
    const newsIds = store.state.news.articles.map(article => article.title);
    return newsIds.includes(params.id);
  }
};
</script>