<template>
  <!-- 查看评价 -->
  <div>
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
      <div>评价内容：{{item.content}}</div>
      <div>{{item.content}}</div>
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
  margin-left: 20px;
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
  margin-left: 30px;
}
</style>