<template>
  <!-- 订单结算 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="订单结算" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 收货 -->
    <div class="receipt">
      <van-icon name="location-o" size='30px'/>
      <div class="people">
          <!-- 收货人 -->
        <div class="receipts">
            <div>收货人：</div>
            <div>1368453</div>
        </div>
        <!-- 收货地址 -->
        <div class="address">收货地址：</div>
        <div>(收货不便时，可选择免费待收货服务)</div>
      </div>

    </div>

  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
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
    height: 100px;
  display: flex;
  align-items: center;
  background: aquamarine;
}
.receipts {

  display: flex;
}
.van-icon{
    margin-left: 10px;
}
.people{
     margin-left: 10px;
}
.address{
    font-size: 15px;
}
</style>