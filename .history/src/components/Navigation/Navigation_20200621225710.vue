<template>
  <div>
    <!-- 底部导航 -->
    
      <!-- <van-tabbar v-model="active" active-color="red">

        <van-tabbar-item to="/" icon="wap-home" badge>
          <span>商城</span>
        </van-tabbar-item> 
        <van-tabbar-item to="/classIfication" icon="wap-nav" badge>
          <span>分类</span>
        </van-tabbar-item>
        <van-tabbar-item to="/shoppingCart" icon="shopping-cart" badge>
          <span>购物车</span>
        </van-tabbar-item>
        <van-tabbar-item to="/My" icon="contact" badge>
          我的
        </van-tabbar-item>
        
      </van-tabbar> -->

      <van-tabbar v-model="active" active-color="red">
  <van-tabbar-item to="/" icon="wap-home">商城</van-tabbar-item>
  <van-tabbar-item to="classIfication" icon="wap-nav">分类</van-tabbar-item>
  <van-tabbar-item to="shoppingCart" icon="shopping-cart">购物车</van-tabbar-item>
  <van-tabbar-item to="My" icon="contact">我</van-tabbar-item>
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