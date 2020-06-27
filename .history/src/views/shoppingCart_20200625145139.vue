<template>
  <!-- 购物车 -->
  <div>
    <!-- 标题 -->
    <div class="member">购物车</div>
    <!-- 全选 -->
    <div class="select">
      <div class="orders"><van-checkbox v-model="checked" shape="square" checked-color="#E0322B">全选</van-checkbox></div>
      <div class="order">
        <div>合计: <span>￥{{}}</span></div>
        <div>确认订单</div>
      </div>
    </div>

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
.select{
  display: flex;
}
.orders{
  flex: 1;
}
.order{
  flex: 3;
}
</style>