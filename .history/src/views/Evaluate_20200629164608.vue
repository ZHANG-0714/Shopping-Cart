<template>
  <!-- 评价 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="我的订单" left-text left-arrow @click-left="onClickLeft" />
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
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.city {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 5;
  border-bottom: 1px solid rgb(241, 241, 241);
}
</style>