<template>
  <div class="col-md-4 col-sm-6 col-12">
    <div class="card mb-4 box-shadow">
      <template v-if="news.urlToImage">
        <img
          class="card-img-top"
          alt="Thumbnail [100%x225]"
          style="height: 225px; width: 100%; display: block;"
          :src="news.urlToImage"
          data-holder-rendered="true"
        />
      </template>
      <template v-else>
        <div class="no-img">
          <Logo />
        </div>
      </template>
      <div class="card-body">
        <p class="card-text">{{ news.title }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-primary"
              @click="goToNews(news.title)"
            >View</button>
          </div>
          <small class="text-muted">{{ $moment(news.publishedAt).format('DD.MM.YYYY, HH:mm') }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    news: Object
  },
  methods: {
    goToNews(link) {
      const url = encodeURIComponent(link);
      this.$router.push("/news/" + url);
    }
  }
};
</script>