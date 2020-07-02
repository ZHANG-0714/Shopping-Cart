<template>
  <!-- 收藏 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="我的收藏" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 商品内容 -->
    <div>
      <div>
        <img src alt />
      </div>
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
       Collectio:[]
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.$api
      .collection()
      .then(res => {
        this.Collectio = res.data.list;
        console.log(this.Collectio);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.city {
  border-bottom: 1px solid rgb(241, 241, 241);
}
</style>