<template>
  <!-- 底部导航 -->
  <div>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" badge="">
        <span>商城</span>
      </van-tabbar-item>
      <van-tabbar-item icon="wap-home-o" badge="">
        <span>分类</span>
      </van-tabbar-item>
      <van-tabbar-item icon="wap-home-o" badge="">
        <span>购物车</span>
      </van-tabbar-item>
      <van-tabbar-item icon="wap-home-o" badge="">
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
</style>