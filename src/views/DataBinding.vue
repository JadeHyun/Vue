<template>
  <h1>Hello, {{ title }}</h1>
  <div>{{ htmlString }}</div>
  <div v-html="htmlString"></div>
  <!-- html 태그에 바인딩을 할때는 v-html 속성을 사용해야 한다. -->
</template>

<script>
export default {
  name: "DataBinding",
  data() {
    return {
      title: "world",
      htmlString: '<p style="color:red">This is a red color</p>',
    };
  },
};
</script>
