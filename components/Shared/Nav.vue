<template>
  <nav>
    <nuxt-link class="nav__link" to="/news">News</nuxt-link>
    <nuxt-link class="nav__link" to="/beers">Beers</nuxt-link>
    <nuxt-link class="nav__link" to="/github">GitHub Users</nuxt-link>
    <nuxt-link class="nav__link" to="/monster-game">Game</nuxt-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
}
.nav__link {
  color: #333;
}
.nuxt-link-active {
  text-decoration: underline;
}
</style>