<template>
  <div class="van--tabbar--width">
    <!-- 底部导航 -->
    <van-tabbar v-model="active" active-color="red" route>
      <van-tabbar-item to="/" icon="wap-home">商城</van-tabbar-item>
      <van-tabbar-item to="/classIfication" icon="wap-nav">分类</van-tabbar-item>
      <van-tabbar-item to="/shoppingCart" icon="shopping-cart" :badge='cartNum'>购物车</van-tabbar-item>
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
      active: 0,
     
    };
  },
  methods: {
    getData() {
      this.$api
        .query()
        .then(res => {
          this.shopping = res.shopList;
          this.$store.commit('setCartNum', res.shopList.length)
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getData()
    
  },
  watch: {
    
  },
  computed: {
    cartNum() {
      return this.$store.state.cartNum
    }
  }
};
</script>

<style scoped lang='scss'>
</style>