<template>
  <!-- 查看评价 -->
  <div class="van--tabbar--width">
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="评价详情" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 商品详情 -->
    <div v-for="(item,index) in see.goods" :key="index">
      <!-- 商品 -->
      <div class="see">
        <img :src="item.image_path" alt class="img" />
        <div>
          <van-rate v-model="value" />
          <div class="time">{{see.comment_time}}</div>
        </div>
      </div>
      <!-- 评价 -->
      <div class="times">
        <div>评价内容:</div>
        <div class="content">{{see.content}}</div>
      </div>
      <!-- 加入购物车 -->
      <div class="shopping"> 
          <div> 名称：{{item.name}}</div>
          <div class="icon"><van-icon name="shopping-cart-o" size="25" color="#FF8E8B"/></div>
      </div>

      <van-button type="primary" size="large">返回</van-button>
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
      see: [],
      value: 3
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
.see {
  display: flex;
  margin-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(216, 216, 216);
}
.img {
  width: 100px;
  height: 100px;
}
.van-rate {
  margin-left: 30px;
}
.time {
  margin-top: 20px;
  padding-left: 30px;
}
.times {
  margin-top: 20px;
  padding-left: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(216, 216, 216);
}
.content {
  margin-top: 20px;
}
.shopping{
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    margin-left: 10px;
}
.icon{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    background: #FFE6E2;
    margin-top: -8px;
}
.van-icon{
    line-height: 40px;
}
.van-button{
    margin-top: 50px;
}
</style>