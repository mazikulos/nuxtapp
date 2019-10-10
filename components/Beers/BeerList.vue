<template>
  <div class="beers">
    <div class="container">
      <template v-if="filterItems(beers).length > 0">
        <Beer v-for="beer in filterItems(beers)" :key="beer.id" :beer="beer" />
      </template>
      <template v-else>
        <div class="alert alert-danger">No beers</div>
      </template>
    </div>
  </div>
</template>

<script>
import Beer from "@/components/Beers/Beer";

export default {
  components: {
    Beer
  },
  props: {
    beers: Array,
    abvFrom: "",
    abvTo: "",
    name: ""
  },
  methods: {
    filterItems: function(beers) {
      const app = this;
      return beers
        .filter(beer => {
          let beers;
          // if (app.abvTo > 0) {
          //   return beer.abv <= app.abvTo;
          // } else {
          //   return true;
          // }
          return app.abvTo > 0 ? beer.abv <= app.abvTo : true;
        })
        .filter(beer => {
          return app.abvFrom > 0 ? beer.abv >= app.abvFrom : true;
        })
        .filter(beer => {
          return beer.name.toLowerCase().indexOf(this.name) !== -1;
        });
    }
  }
};
</script>

<style scoped>
.beers {
  margin-bottom: 50px;
}
</style>