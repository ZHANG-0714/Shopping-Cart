<template>
  <!-- 订单结算 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="订单结算" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 收货 -->
    <a v-if="add === null" class="receipt">暂无收货地址</a>
    <div class="receipt" v-if="add !== null">
      <van-icon name="location-o" size="30px" />
      <div class="people">
        <!-- 收货人 -->
        <div class="receipts">
          <div>收货人：</div>
          <div>13688074030</div>
        </div>
        <!-- 收货地址 -->
        <div class="receiptc">
          <div class="address">收货地址：</div>
          <van-icon name="arrow" size="20px" />
        </div>
        <div class="received">(收货不便时，可选择免费待收货服务)</div>
      </div>
    </div>
    <img src="../assets/caitiao.jpg" alt class="img" />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      add: "" //查询默认收货地址
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    }
  },
  mounted() {
    this.item = this.$route.query.item;
    console.log(this.item);
    // 查询默认收货地址
    this.$api
      .getDefaultAddress()
      .then(res => {
        this.add = res.defaultAdd;
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
.city {
  border-bottom: 1px solid rgb(241, 241, 241);
}
.receipt {
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
}
.receipts {
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.receiptc {
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.van-icon {
  margin-left: 10px;
}
.people {
  width: 100%;
  margin-left: 10px;
}
.address {
  font-size: 15px;
  margin-top: 10px;
}
.received {
  font-size: 14px;
  margin-top: 10px;
  color: #fad1a8;
}
.img {
  width: 100%;
}
</style>