<template>
  <!-- 评价中心 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="评价中心" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 商品详情 -->
    <div class="user">
      <img :src="user.image_path" alt class="img" />
      <div class="commodity">
        <div>商品评分</div>
        <van-rate v-model="value" allow-half void-icon="star" void-color="#eee" />
      </div>
    </div>
    <!-- 评价内容 -->
    <div class="content">
      <textarea name="" id="" cols="40" rows="10" placeholder="请说说你的购买感受吧～～"></textarea>
      <van-uploader :after-read="afterRead" />
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
      user: [],
      value: 2.5
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    },
     afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
  },
  mounted() {
    this.user = this.$route.query.item;
    console.log(this.user);
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
.user {
    width: 100%;
    height: 120px;
  display: flex;
  justify-items: center;
  padding-top: 20px;
  background: lightpink;
}
.img {
  width: 90px;
  height: 90px;
  margin-left: 20px;
}
.commodity {
  margin-left: 30px;
}
.van-rate {
  margin-top: 30px;
}
textarea{
  width: 100%;
  height: 100px;
  padding-left: 20px;
  padding-top: 20px;
  border: 0px;
}
.van-uploader{
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #ffb6c16b;
}
</style>