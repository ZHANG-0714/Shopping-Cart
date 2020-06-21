<template>
  <!-- 底部导航 -->
  <div class="tabbar">

    <van-tabbar v-model="active" active-color="red">
      <van-tabbar-item icon="wap-home-o" badge="">
        <span>商城</span>
      </van-tabbar-item>
      <van-tabbar-item to ='/' icon="wap-nav" badge="">
        <span>分类</span>
      </van-tabbar-item>
      <van-tabbar-item to ='/classIfication' icon="shopping-cart" badge="">
        <span>购物车</span>
      </van-tabbar-item>
      <van-tabbar-item to ='' icon="contact" badge="">
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
.tabbar{
  margin-top: 50px;
}

</style>