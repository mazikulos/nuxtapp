<template>
  <header class="mb-5">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <nuxt-link class="logo-wrapper" to="/">
            <Logo />
            <span class="logo-text">Vue App</span>
          </nuxt-link>
        </div>
        <div class="col-md-9"><Nav/></div>
        <div class="col-md-3">
          <Weather :weather="getWeather" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Nav from '~/components/Shared/Nav'
import Weather from "~/components/Weather/Weather";

export default {
  components: {
    Weather,
    Nav
  },
  computed: {
    getWeather() {
      return this.$store.getters.getWeather;
    }
  }
};
</script>

<style>
.logo-wrapper {
  width: 175px;
  height: auto;
  display: flex;
  margin: auto;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;
}
.logo {
  max-width: 100%;
  flex: 2;
}
.logo-text {
  flex: 3;
  color: #000;
}
</style>