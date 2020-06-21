<template>
  <div>
    <!-- 底部导航 -->
    <div class="tabbar">
      <van-tabbar v-model="active" active-color="red">

        <van-tabbar-item to="/" icon="wap-home" >
          <span>商城</span>
        </van-tabbar-item> 
        <van-tabbar-item to="/classIfication" icon="wap-nav" >
          <span>分类</span>
        </van-tabbar-item>
        <van-tabbar-item to="/shoppingCart" icon="shopping-cart" >
          <span>购物车</span>
        </van-tabbar-item>
        <van-tabbar-item to="/My" icon="contact" >
          <span>我的</span>
        </van-tabbar-item>

      </van-tabbar>
    </div>
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