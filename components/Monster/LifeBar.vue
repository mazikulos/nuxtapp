<template>
  <div class="text-center">
    <div class="card position-relative" @click="hp = 15">
      <div class="lifebar" :style="{backgroundColor: hp <= 15 ? '#dc3545' : '#28a745', width: hp + '%'}"></div>
    </div>
      {{who}}
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#28a745"
    },
    hp: Number,
    who: {
      type: String
    }
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
</style>