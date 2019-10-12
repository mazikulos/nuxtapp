<template>
  <div class="text-center">
    <div class="card position-relative">
      <div class="lifebar" :style="{backgroundColor: hp <= 15 ? '#dc3545' : '#28a745', width: hp + '%'}"></div>
      <span class="hp">{{hp}} HP</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#28a745"
    },
    hp: Number
  }
};
</script>

<style scoped>
.card {
  height: 40px;
}
.lifebar {
  top: 0;
  bottom: 0;
  position: absolute;
  left: 0;
  transition: 0.3s;
}
.hp {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 0 0 4px #fff;
}
</style>