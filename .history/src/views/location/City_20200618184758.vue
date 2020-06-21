<template>
  <!-- 城市列表 -->
  <div class="list">
    <div class="city">
      <van-nav-bar title="城市列表" left-text left-arrow @click-left="onClickLeft" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.list {
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
}
.city {
  width: 100%;
  height: 50px;
  background-color: #fff;
}
</style>