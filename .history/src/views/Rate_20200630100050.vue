<template>
  <!-- 评价中心 -->
  <div class="van--tabbar--width">
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
      <div class="textare">
        <textarea name id cols="40" rows="10" placeholder="请说说你的购买感受吧～～" v-model="text"></textarea>
      </div>
      <div class="uploader">
        <van-uploader :after-read="afterRead" />
      </div>
    </div>
    <!-- 匿名评价 -->
    <van-checkbox v-model="checked">匿名评价</van-checkbox>
    <!-- 提交 -->
    <van-button type="primary" size="large" width="50px" @click="Submit">提交</van-button>
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
      value: 0,
      text: "",
      checked: false,
      image:[]
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
    //  提交
    Submit() {
      this.$api
        .comment(
          this.user.cid,
          this.value,
          this.text,
          this.checked,
          this.user._id,
          this.user.order_id,
          this.image
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console, log(err);
        });
    }
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
  background: rgb(252, 205, 212);
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
.content {
  width: 100%;
  border-bottom: 1px solid #ccc;
}
.textare {
  width: 100%;
  height: 80px;
  padding-top: 20px;
}
textarea {
  padding-left: 20px;
  border: 0px;
}
.uploader {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}
.van-uploader {
  padding-left: 20px;
}
.van-checkbox {
  margin: 15px 0 0 15px;
}
</style>