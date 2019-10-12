<template>
  <div class="text-center">
    <div class="card position-relative">
      <div class="manabar" :style="{width: mp + '%'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mp: Number
  }
};
</script>

<style scoped>
.card {
  height: 10px;
}
.manabar {
  background-color: #007bff;
  top: 0;
  bottom: 0;
  position: absolute;
  left: 0;
  transition: 0.3s;
}
</style>