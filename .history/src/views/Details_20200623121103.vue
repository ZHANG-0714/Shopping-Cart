<template>
  <!-- 详情 -->
  <div>
    <div class="arrow">
      <van-icon name="arrow-left" color="#fff" size="25px" />
    </div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item>
        <img v-lazy="goodsOne.image" alt class="img" />
      </van-swipe-item>
      <van-swipe-item>
        <img v-lazy="goodsOne.image" alt class="img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 商品名 -->
    <div class="name">
      <div class="price">{{goodsOne.name}}</div>
      <div class="present">￥{{goodsOne.present_price}}</div>
    </div>
    <!-- 运费 -->
    <div class="freight">
      <div>运费:{{goodsOne.__v}}</div>
      <div>剩余:{{goodsOne.amount}}</div>
      <div class="collection" >
        收藏:<van-icon name="like-o" v-if="flag == true"/>
      </div>
      <div class="collection"  >
        取消收藏:<van-icon name="like" color="red" v-else/>
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
      list: [],
      goodsOne: [],
      flag:true 
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
.img {
  width: 100%;
  height: 370px;
}
.van-swipe {
  border-bottom: 1px solid #f2f2f2;
  padding-top: 10px;
}
.arrow {
  width: 40px;
  height: 40px;
  background-color: #ccc;
  border-radius: 50%;
  text-align: center;
  margin: 10px 0 0 10px;
  position: fixed;
  z-index: 5;
}
.van-icon {
  line-height: 40px;
}
.name {
  width: 100%;
  line-height: 30px;
  border-bottom: 1px solid #f2f2f2;
}
.price {
  height: 20px;
  margin-left: 15px;
}
.present {
  height: 30px;
  margin-left: 15px;
  color: #ff4444;
}
.freight{
    line-height: 40px;
    display: flex;
    justify-content: space-around;
    color: #999;
    font-size: 15px;
    border-bottom: 1px solid #f2f2f2;
}
.freight div{
    height: 40px;
}
.Collection{
    display: flex;
    justify-content: flex-end;
}
</style>