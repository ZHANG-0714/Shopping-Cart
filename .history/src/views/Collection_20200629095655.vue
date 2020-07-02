<template>
  <!-- 收藏 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="我的收藏" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 商品内容 -->
    <div v-for="(item,index) in Collectio" :key="index" class="commodity">
      <img :src="item.image_path" alt="" class="img">
      <div>
          <div class="name">{{item.name}}</div>
          <div>￥{{item.present_price}}</div>
      </div>
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
       Collectio:[]
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.$api
      .collection()
      .then(res => {
        this.Collectio = res.data.list;
        console.log(this.Collectio);
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
.img{
    width: 80px;
    height: 80px;
    border: 1px solid #ccc;
}
.commodity{
    display: flex;
    margin-top: 30px;
    margin-left: 20px;
}
.name{
    width: 50%;
     margin-left: 20px;
}
</style>