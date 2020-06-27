<template>
  <!-- 购物车 -->
  <div>
    <!-- 标题 -->
    <div class="member">购物车</div>
    <van-checkbox v-model="checked" shape="square" checked-color="#E0322B">取消全选</van-checkbox>

    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from "../components/Navigation/Navigation"; //底部导航

export default {
  name: "",
  props: {},
  components: {
    Navigation
  },
  data() {
    return {
      checked: 0
    };
  },
  methods: {},
  mounted() {
    this.$api
      .query()
      .then(res => {
        this.shopping = res.shopList
        console.log(res);
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
.member {
  width: 100%;
  line-height: 50px;
  text-align: center;
  background: #fff;
  border-bottom: 1px solid rgb(241, 241, 241);
}
</style>