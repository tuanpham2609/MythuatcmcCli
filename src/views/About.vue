<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  created() {
    this.loadAbout();
  },
  methods: {
    loadAbout() {
      this.$http
        .get(this.$store.state.domain + "/" + "trangchu-api")
        .then(result => {
          console.log(result);
        });
    }
  }
};
</script>
