<template>
  <!-- 最近浏览 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="最近浏览" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <div v-for="(item,index) in views" :key="index" class="views">
      <img :src="item.image_path" alt class="img" />
      <!-- 商品价格 -->
      <div class="commodity">
        <div>{{item.name}}</div>
        <div class="present">
          <span class="price">￥{{item.present_price}}</span>
          <s>{{item.orl_price}}</s>
        </div>
      </div>
      <!-- 删除 -->
      <van-icon name="close" />

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
      views: []
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {
    // 本来存的JSON对象，JSON.parse转回来
    this.views = JSON.parse(localStorage.getItem("views"));
    console.log(this.views);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.city {
  border-bottom: 1px solid rgb(241, 241, 241);
}
.views {
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
}
.img {
  width: 90px;
  height: 90px;
  border: 1px solid #ccc;
}
.commodity{
  margin-left: 15px;
  font-size: 15px;
}
.present{
  margin-top: 20px;
}
.price{
  color: red;
  margin-right: 8px;
  font-size: 16px;
  font-weight: 700;
}
.van-icon{
  text-align: right;
}
</style>