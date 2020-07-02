<template>
  <!-- 全部订单 -->
  <div class="van--tabbar--width">
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="我的订单" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <van-tabs v-model="active">
      <van-tab title="全部"></van-tab>
      <van-tab title="待支付"></van-tab>
      <van-tab title="代发货"></van-tab>
      <van-tab title="待收货"></van-tab>
      <van-tab title="已完成">
          <div v-for="(item,index) in order" :key="index">
              <!-- 订单编号 -->
              <div class="order">
                  <div>订单编号：{{item.order_id}}</div>
                  <div class="tran">交易完成</div>
              </div>
              <!-- 商品详情 -->
              <div v-for="item1 in item.order_list" :key="item1.id" class="comm">
                  <img :src="item1.image_path" alt="" class="img">

              </div>

          </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      order: [],
      active: 4
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {
    //我的订单
    this.$api
      .getMyOrder()
      .then(res => {
        this.order = res.list;
        console.log(this.order);
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
.order{
    width: 90%;
    display: flex;
    font-size: 15px;
    border-bottom: 1px solid #ccc;
}
.tran{
    color: #D46227;
}
.comm{
    margin-top: 10px;
}
.img{
    width: 90px;
    height: 90px;
    border: 1px solid #ccc;
}
</style>