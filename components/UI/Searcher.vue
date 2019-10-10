<template>
  <div class="searcher">
    <h2 class="text-center">Find beer</h2>
    <form @submit.prevent>
      <input
        type="text"
        name="name"
        class="form-control"
        placeholder="Search beer..."
        @input="submitSearch"
      />
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submitSearch() {
      this.$emit('submitSearch', event.target.value);
    }
  }
}
</script>