<template>
  <!-- 查看评价 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="评价详情" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 商品详情 -->
    <div v-for="(item,index) in see.goods" :key="index">
        <img :src="item.image_path" alt="">
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
      see: []
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.see = this.$route.query.item;
    console.log(this.see);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.city {
  width: 100%;
  border-bottom: 1px solid rgb(241, 241, 241);
}
</style>