<template>
  <div class="van--tabbar--width">
    <!-- 底部导航 -->

    <van-tabbar v-model="active" active-color="red" route>
      <van-tabbar-item to="/" icon="wap-home">商城</van-tabbar-item>
      <van-tabbar-item to="/classIfication" icon="wap-nav">分类</van-tabbar-item>
      <van-tabbar-item to="/shoppingCart" icon="shopping-cart" badge='5'>购物车</van-tabbar-item>
      <van-tabbar-item to="/My" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
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
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>