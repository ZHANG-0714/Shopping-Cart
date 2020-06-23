<template>
  <!-- 详情 -->
  <div>
      <div>
          <van-icon name="arrow-left" />
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
    height: 400px;
}
</style>