<template>
  <!-- 城市列表 -->
  <div class="van--color list">
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="城市列表" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 搜索框 -->
    <van-search v-model="value" placeholder="请输入搜索关键字" />

    <div class="current">当前城市</div>
    <div class="now"></div>

    <div class="currens">热门城市</div>

  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value:''
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
.list {
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
}
.city {
  width: 100%;
  height: 50px;
  background-color: #fff;
}
.van-search{
  background-color: #F2F2F2;
}
.current{
  margin: 0 0 10px 10px;
}
.currens{
  margin: 10px 0 10px 10px;
}
.now{
  width: 100%;
  height: 50px;
  background-color: #fff;
}
</style>