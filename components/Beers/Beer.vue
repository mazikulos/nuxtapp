<template>
  <div class="beer">
    <div class="row align-items-center">
      <div class="col-md-2">
        <div class="beer__image-wrapper">
          <img :src="beer.image_url" :alt="beer.name" class="beer__image" />
        </div>
      </div>
      <div class="col-md-7">
        <h2 class="beer__name">{{beer.name}}</h2>
        <p class="beer__description">{{beer.description}}</p>
        <p class="beer__first-brewed">First brewed: {{beer.first_brewed}}</p>
      </div>
      <div class="col-md-3 text-center">
        <div class="beer__star">
          <h1 class="beer__abv">{{beer.abv}}%</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    beer: Object
  }
};
</script>

<style scoped>
.beer:not(:last-of-type) {
  margin-bottom: 30px;
  border-bottom: 1px solid #333;
  padding-bottom: 30px;
}
.beer__description {
  text-align: justify;
  font-family: 'Roboto', sans-serif;
}
.beer__image-wrapper {
  border: 1px dashed #333;
  border-radius: 5px;
  padding: 15px;
  text-align: center;
}
.beer__image {
  max-width: 100%;
  max-height: 200px;
}
</style>