<template>
  <div class="us">
    <h1>Job Shopper</h1>
    <section>
      <ul>
        <li>Back</li>
        <li>Back</li>
        <li>Back</li>
        <li>Front</li>
        <li>Front</li>
      </ul>
    </section>
    <section>
      <h2>{{ countWriter }}</h2>
      <button @click="increase">increase</button>
      <button @click="decrease">decrease</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "UsComponent",
  data() {
    // html,js 코드에서 사용할 데이터 변수 선언
    return {
      msg: "hello world",
      count: 0,
    };
  },
  computed: {
    countWriter() {
      return this.count + " 입니다.";
    },
  },
  created() {
    // 컴포넌트가 생성되면 실행
    this.console();
  },
  methods: {
    // 컴포넌트 내에서 사용할 메소드 정의
    console() {
      console.log(this.msg);
    },
    increase() {
      ++this.count;
    },
    decrease() {
      --this.count;
    },
  },
};
</script>
