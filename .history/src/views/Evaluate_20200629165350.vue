<template>
  <!-- 评价 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="评价中心" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <img src="../assets/evaluate.jpg" alt class="img" />

    <van-tabs v-model="active">
      <van-tab title="待评价">内容 1</van-tab>
      <van-tab title="已评价">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      active: 0
    };
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
  border-bottom: 1px solid rgb(241, 241, 241);
}
.img {
  width: 100%;
  position: relative;
}
.van-tabs{
    width: 90%;
    position : absolute;
    top: 220px;
    text-align: center;
}
</style>