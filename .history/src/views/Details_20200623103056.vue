<template>
  <!-- 详情 -->
  <div>
    <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,index) in goodsOne" :key="index">
            <img :src="item.image" alt="">
            <img :src="item.image_path" alt="">
        </van-swipe-item>
      </van-swipe>
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
</style>