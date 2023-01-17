<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <section v-bind:class="{ styleObject: value }">
    boolean value change style
  </section>

  <button @click="handleChangeStyle">change style</button>
</template>

<script>
export default {
  data() {
    return {
      value: false,
      styleObject: {
        color: "red",
        fontSize: "20px",
      },
    };
  },
  methods: {
    handleChangeStyle() {
      this.value = !this.value;
    },
  },
};
</script>

<style scoped>
.styleObject {
  color: red;
  font-size: 20px;
}
</style>
