<template>
  <div>
    <!-- 底部导航 -->
  <div class="tabbar">

    <van-tabbar v-model="active" active-color="red">
      <van-tabbar-item to ='/' icon="wap-home-o" badge="" @click="app(item)">
        <span>商城</span>
      </van-tabbar-item>
      <van-tabbar-item to ='/classIfication' icon="wap-nav" badge="">
        <span>分类</span>
      </van-tabbar-item>
      <van-tabbar-item to ='/shoppingCart' icon="shopping-cart" badge="">
        <span>购物车</span>
      </van-tabbar-item>
      <van-tabbar-item to ='/My' icon="contact" badge="">
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>

  </div>

    <router-view/>
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
  methods: {
app(item){
  console.log(item)
}
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
@import './style/Situation'
</style>
