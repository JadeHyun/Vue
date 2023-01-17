<template>
  <input type="text" v-model="viewModel" :placeholder="[[placeholderText]]" />
  <input type="text" v-model="textValue" />
  <button v-bind:disabled="textValue === ''">Click</button>
</template>

<script>
export default {
  name: "inputView",
  data() {
    return {
      viewModel: "South Korea",
      placeholderText: "text input here",
      textValue: "",
    };
  },
};
</script>
