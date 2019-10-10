<template>
  <div class="logs">
    <div class="row">
      <div class="col-md-6">
        <div v-for="(log, index) in playerLogs" class="log" :key="index">{{log.logPlayer}}</div>
      </div>
      <div class="col-md-6">
        <div v-for="(log, index) in beastLogs" class="log" :key="index">{{log.logBeast}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logs: Array
  },
  computed: {
    playerLogs() {
      const playerLogs = this.logs.filter(log => log.logPlayer);
      return playerLogs.reverse();
    },
    beastLogs() {
      const beastLogs = this.logs.filter(log => log.logBeast);
      return beastLogs.reverse();
    }
  }
};
</script>