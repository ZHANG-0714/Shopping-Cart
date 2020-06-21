<template>
  <!-- 底部导航 -->
  <div>

    <van-tabbar v-model="active" active-color="red">
      <van-tabbar-item icon="wap-home-o" badge="">
        <span>商城</span>
      </van-tabbar-item>
      <van-tabbar-item icon="wap-nav" badge="">
        <span>分类</span>
      </van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" badge="">
        <span>购物车</span>
      </van-tabbar-item>
      <van-tabbar-item icon="contact" badge="">
        <span>我的</span>
      </van-tabbar-item>
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
        active: 0,
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.van-tabbar{
    position: fixed;
}
</style>