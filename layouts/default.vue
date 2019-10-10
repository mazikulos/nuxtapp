<template>
  <div>
    <Header />
    <nuxt />
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Shared/Header'
import Footer from '~/components/Shared/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  body {
    font-family: 'Quicksand', sans-serif;
  }
</style>