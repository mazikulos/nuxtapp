<template>
  <div class="github-searcher">
    <div class="search card card-body">
      <div class="row">
        <div class="col-6">
          <h1>Search for Users</h1>
        </div>
        <div class="col-6">
          <Button
            :btnStyle="'btn btn-primary btn-block'"
            @click="$emit('getUsername', 'mazikulos')"
          >My GitHub</Button>
        </div>
      </div>
      <input type="text" class="form-control" placeholder="Username..." @input="sendUsername" />
    </div>
    <br />
  </div>
</template>

<script>
export default {
  props: {},
  methods: {
    sendUsername() {
      this.$emit("getUsername", event.target.value);
    }
  }
};
</script>