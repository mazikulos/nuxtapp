<template>
  <div class="beers">
    <div class="container mb-5">
      <div class="row">
        <div class="col-md-6">
          <Searcher @submitSearch="name = $event"/>
        </div>
        <div class="col-md-6">
          <Filters @abvFromEdited="abvFrom = $event" @abvToEdited="abvTo = $event"/>
        </div>
      </div>
    </div>
    <BeerList :beers="beers" :abvFrom="abvFrom" :abvTo="abvTo" :name="name" />
  </div>
</template>

<script>
import BeerList from "@/components/Beers/BeerList";
import Filters from "@/components/UI/Filters";
import Searcher from "@/components/UI/Searcher";
import axios from "axios";

export default {
  data() {
    return {
      abvFrom: '',
      abvTo: '',
      name: ''
    }
  },
  components: {
    BeerList,
    Filters,
    Searcher
  },
  async asyncData(context) {
    const beers = await axios(`https://api.punkapi.com/v2/beers`);
    return {
      beers: beers.data
    };
  }
};
</script>

