<template>
  <div class="filters">
    <h2 class="text-center">Filters</h2>
    <form onSubmit="{this.onSubmit}">
      <div class="filter-line">
        <span>ABV:</span>
        <input
          type="text"
          name="from"
          pattern="[0-9]*"
          class="form-control form-control--filter"
          placeholder="From..."
          @input="editAbvFrom"
        />
        <input
          type="text"
          name="to"
          class="form-control form-control--filter"
          placeholder="To..."
          @input="editAbvTo"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    abvFrom: '',
    abvTo: ''
  },
  methods: {
    editAbvFrom() {
      const abvFrom = event.target.value.replace(',', '.')
      this.$emit('abvFromEdited', abvFrom);
    },
    editAbvTo() {
      const abvTo = event.target.value.replace(',', '.');
      this.$emit('abvToEdited', abvTo);
    }
  }
}
</script>

<style scoped>

.filters {
  margin-bottom: 30px;
}
.filter-line {
  display: flex;
  align-items: center;
  justify-content: space-between
}
.form-control--filter {
  width: auto;
}
</style>