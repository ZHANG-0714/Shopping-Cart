<template>
  <!-- 详情 -->
  <div>
      <div class="arrow">
          <van-icon name="arrow-left" color="#fff" size="25px" />
      </div>
    <!-- 轮播图 -->
      <van-swipe :autoplay="3000">
        <van-swipe-item>
            <img v-lazy="goodsOne.image" alt="" class="img">
        </van-swipe-item>
        <van-swipe-item>
            <img v-lazy="goodsOne.image" alt="" class="img">
        </van-swipe-item>
      </van-swipe>
      <!-- 商品名 -->
      <div>
          <div>{{goodsOne.name}}</div>
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
      list: [],
      goodsOne: []
    };
  },
  methods: {},
  mounted() {
    console.log(this.$route.query.id);
    this.list = this.$route.query.id;
    this.$api
      .single(this.list)
      .then(res => {
        this.goodsOne = res.goods.goodsOne;
        console.log(this.goodsOne);
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
.img{
    width: 100%;
    height: 370px;
}
.van-swipe{
    border-bottom: 1px solid #f2f2f2;
    padding-top: 10px;
}
.arrow{
    width: 40px;
    height: 40px;
    background-color: #ccc;
    border-radius: 50%;
    text-align: center;
    margin: 10px 0 0 10px;
    position: fixed;
    z-index: 5;
}
.van-icon{
    line-height: 40px;
}
</style>