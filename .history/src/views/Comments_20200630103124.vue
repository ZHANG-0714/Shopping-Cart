<template>
  <!-- 查看评价 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="评价中心" left-text left-arrow @click-left="onClickLeft" />
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
</style>