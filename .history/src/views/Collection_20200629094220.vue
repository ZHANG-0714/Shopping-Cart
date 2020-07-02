<template>
  <!-- 收藏 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="订单结算" left-text left-arrow @click-left="onClickLeft" />
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
      Toast("返回");
    },
  },
  mounted() {
    this.$api
      .collection()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>