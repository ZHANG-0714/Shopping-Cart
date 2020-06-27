<template>
  <!-- 购物车 -->
  <div>
    <!-- 标题 -->
    <div class="member">购物车</div>
    <!-- 全选 -->
    <div class="select">
      <div class="orders"><van-checkbox v-model="checked" shape="square" checked-color="#E0322B">全选</van-checkbox></div>
      <div class="order">
        <div>合计：<span class="span">￥{{}}</span></div>
        <div>请确认订单</div>
      </div>
    </div>
    <!-- 按钮 -->
    <div class="button">
      <van-button color="#ff7d44">删除</van-button>
      <van-button color="#ff7d44">去结算</van-button>
    </div>
    <!-- 购物车商品列表 -->
    <div class="commodity" v-for="(item,index) in shopping" :key="index">
      <van-checkbox v-model="checked" shape="square" checked-color="#E0322B"></van-checkbox>
      <img :src="item.image_path" alt="" class="img">
      <!-- 商品名 -->
      <div class="money">
        <div class="name">{{item.name}}</div>
        <div class="list">
          <div class="mallPrice">￥{{item.mallPrice}}</div>
          <van-stepper v-model="item.count" theme="round" button-size="22" disable-input />
        </div>
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
      checked: 0,
      // value:'',
      shopping:"", //购物车数据
    };
  },
  methods: {},
  mounted() {
    // 购物车数据
    this.$api
      .query()
      .then(res => {
        this.shopping = res.shopList
        console.log(this.shopping);
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
  border-bottom: 1px solid rgb(228, 228, 228);
}
.select{
  display: flex;
  align-items: center;
  height: 70px;
   border-bottom: 1px solid rgb(228, 228, 228);
}
.orders{
  flex: 1;
  margin-left: 30px;
}
.order{
  flex: 1;
  margin-left: 30px;
  font-size: 14px;
}
.span{
  color: #E0322B;
}
.van-button{
  color: #fff;
}
.button{
  text-align: right;
  margin-top: 15px;
}
.van-button{
  margin-right: 15px;
}
.img{
  width: 80px;
  height: 80px;
  margin-left: 20px;
  border: 1px solid #ccc;
}
.commodity{
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
}
.list{
  display: flex;
  margin-top: 30px; 
}
.mallPrice{
  color: #E0322B;
}
.money{
  margin-left: 20px;
}
.name{
  font-size: 15px;
}
.van-stepper{
  flex: 1;
}
</style>