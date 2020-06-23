<template>
  <!-- 详情 -->
  <div>
    <div class="arrow" @click="returns">
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
      <!-- 收藏 -->
      <div class="collection" v-if="flag === true" @click="block">
        <div>
          收藏:
          <van-icon name="like-o" />
        </div>
      </div>
      <!-- 取消收藏 -->
      <div class="collection" v-else-if="flag === false" @click="blocks">
        <div>
          取消收藏:
          <van-icon name="like" color="red" />
        </div>
      </div>
    </div>
    <!-- 有赞助的店 -->
    <div class="store">
      <div class="merchant">
        <div>
          <van-icon name="shop-o" size="20px" />
        </div>
        <div>小七的店</div>
        <div class="official">官方</div>
      </div>
      <div class="merchants">
        <div>进入店铺</div>
        <div>
          <van-icon name="arrow" color="#ccc" />
        </div>
      </div>
    </div>
    <!-- 商品详情 -->
    <van-tabs v-model="active">
      <van-tab title="商品详情" v-html="goodsOne.detail"></van-tab>
      <van-tab title="商品评论">内容 2</van-tab>
    </van-tabs>

    <van-goods-action>
      <van-goods-action-icon icon="wap-home-o" text="首页" />
      <van-goods-action-icon icon="shopping-cart-o" text="购物车" />
      <van-goods-action-button color="#FF976A" type="warning" text="加入购物车" />
      <van-goods-action-button color="#FF4444" type="danger" text="立即购买" @click="buy" v-model="show"/>
    </van-goods-action>

    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      :message-config="messageConfig"
    />
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
      flag: true,
      active: 2,
      show: false,
      sku: {
        // 数据结构见下方文档
      },
      goods: {
        // 数据结构见下方文档
      },
      messageConfig: {
        // 数据结构见下方文档
      },
      goodsId:"",
      quota: 5,
      quotaUsed:0,
      hide_stock:{

      }
    };
  },
  methods: {
    buy(){
      this.show = true
    },
    //返回
    returns() {
      this.$router.go(-1);
    },
    // 收藏
    block() {
      this.flag = false;
    },
    blocks() {
      this.flag = true;
    }
  },
  mounted() {
    // console.log(this.$route.query.id);
    this.list = this.$route.query.id;
    //商品详情
    this.$api
      .single(this.list)
      .then(res => {
        this.goodsOne = res.goods.goodsOne;
        // console.log(this.goodsOne);
      })
      .catch(err => {
        console.log(err);
      });
    //商品评论
    // this.$api.comment();
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
.freight {
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  color: #999;
  font-size: 15px;
  border-bottom: 1px solid #f2f2f2;
}
.freight div {
  height: 40px;
}
.Collection {
  display: flex;
  justify-content: flex-end;
}
.store {
  display: flex;
  justify-content: space-around;
  justify-content: space-between;
  border-bottom: 1px solid #f2f2f2;
  border-top: 1px solid #f2f2f2;
  margin-top: 15px;
}
.merchant {
  display: flex;
  align-items: center;
}
.merchants {
  display: flex;
  align-items: center;
}
.merchant div {
  margin-left: 10px;
  font-size: 15px;
}
.merchants div {
  margin-right: 10px;
  font-size: 15px;
}
.official {
  color: #fff;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 3px;
  background-color: #ff4444;
}
</style>