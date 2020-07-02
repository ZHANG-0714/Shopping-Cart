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
      <div class="heart">
        <div>
          <!-- 收藏 -->
          <div class="collection" v-if="isCollection !== 1" @click="blocks">
            <div>
              收藏:
              <van-icon name="like-o" />
            </div>
          </div>
          <!-- 取消收藏 -->
          <div class="collection" v-else @click="block">
            <div>
              取消收藏:
              <van-icon name="like" color="red" />
            </div>
          </div>
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
      <van-tab title="商品评论" class="goodsTwo">
        <div v-for="(item,index) in goodsTwo" :key="index">
          <!--            当不为匿名显示名字-->
          <div v-if="item.anonymous === false">
            <div v-for="item1 in item.user" :key="item1.id">
              <div class="c-img">
                <!--  头像-->
                <img :src="item1.avatar" alt class="imgr" />
                <!-- 用户名 -->
                <div class="user">
                  <div>{{item1.nickname}}</div>
                  <div><van-rate v-model="item.rate" :size="15"/></div>
                </div>
                <!-- 时间 -->
                <div class="time">{{item.comment_time}}</div>

              </div>
            </div>
          </div>
          <!--            当为匿名不显示名字-->
          <!--  头像-->
          <div v-if="item.anonymous === true">
            <div class="c-img">
              <img :src="item.comment_avatar" alt class="imgr" />
            </div>
          </div>

        </div>
      </van-tab>
    </van-tabs>
    <!-- 购买 立即购买 -->
    <van-goods-action>
      <van-goods-action-icon icon="wap-home-o" text="首页" />
      <van-goods-action-icon icon="shopping-cart-o" text="购物车" badge="3" />
      <van-goods-action-button color="#FF976A" type="warning" text="加入购物车" @click="shopping" />
      <van-goods-action-button
        color="#FF4444"
        type="danger"
        text="立即购买"
        @click="buy"
        v-model="show"
      />
    </van-goods-action>

    <!--      立即购买弹框-->
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '37%' }"
      closeable
      close-icon="close"
    >
      <div class="popup">
        <img :src="goodsOne.image_path" alt class="path" />
        <div>
          <div class="names">{{goodsOne.name}}</div>
          <div class="presents">{{goodsOne.present_price | fixed}}</div>
        </div>
      </div>
      <!-- 购买数量 -->
      <div class="purchase">
        <div>购买数量</div>
        <div class="popup">
          <div class="amount">剩余:{{goodsOne.amount}}件</div>
          <div class="limit">每人限购50件</div>
          <van-stepper v-model="value" min="1" max="50" />
        </div>
      </div>
      <!-- 立即购买 -->
      <van-button type="primary" block color="#ff4444" class="button">立即购买</van-button>
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      listr: "",
      goodsOne: [],
      goodsTwo: [],
      active: 1,
      show: false,
      value: 1,
      isCollection: ""
    };
  },
  methods: {
    // 加入购物车
    shopping() {
      this.$api
        .addShop(this.goodsOne.id)
        .then(res => {
          this.$toast(res.msg);
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    buy() {
      this.show = true;
    },
    //返回
    returns() {
      this.$router.go(-1);
    },
    // 收藏
    blocks() {
      if (this.user === null) {
        this.$dialog.alert({
          message: "亲！登录后，可访问"
        });
      } else {
        this.$api
          .collectiongoods(this.goodsOne)
          .then(res => {
            this.getData();
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    // 取消收藏
    block() {
      this.$api
        .cancel(this.goodsOne.id)
        .then(res => {
          this.getData();
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 查询商品是否已收藏
    getData() {
      // console.log(this.listr);
      this.$api
        .isCollection(this.listr)
        .then(res => {
          this.isCollection = res.isCollection;
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    // 用户名
    this.user = localStorage.getItem("user");
    //商品id
    this.listr = this.$route.query.id;
    this.getData();
    //商品详情
    this.$api
      .single(this.listr)
      .then(res => {
        this.goodsOne = res.goods.goodsOne;
        this.goodsTwo = res.goods.comment;
        console.log(this.goodsTwo);
      })
      .catch(err => {
        console.log(err);
      });
    //商品评论
    // this.$api.evaluateOne( this.goodsOne )
    // .then(res =>{
    //   console.log(res)
    // })
    // .catch(err => {
    //     console.log(err);
    //   });
  },
  watch: {},
  computed: {},

  //过滤器（对数字进行操作就要用这个）
  filters: {
    fixed(val) {
      return "￥" + Number(val).toFixed(2);
    }
  }
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
  margin-left: -30px;
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
.path {
  width: 70px;
  height: 70px;
  border: 1px solid #ccc;
  margin-left: 30px;
  margin-top: 20px;
}
.popup {
  display: flex;
  margin-top: 8px;
}
.names {
  font-size: 15px;
  margin-left: 10px;
  margin-top: 20px;
  width: 200px;
  flex-wrap: wrap;
}
.presents {
  font-size: 15px;
  margin-left: 10px;
  color: #ff4444;
}
.purchase {
  padding: 10px 0 10px 10px;
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
.van-stepper {
  margin-top: -15px;
  margin-left: 40px;
}
.amount {
  color: #ccc;
  font-size: 13px;
}
.limit {
  color: #ff4444;
  font-size: 13px;
  margin-left: 20px;
}
.button {
  position: absolute;
  bottom: 0;
}
.heart {
  width: 100px;
  text-align: right;
}
.goodsTwo{
  margin-bottom: 70px;
}
.c-img {
  display: flex;
  margin: 20px 0 0 20px;
}
.imgr {
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 50%;
}
.user{
  margin-left: 15px;
}
.time{
  text-align: right;
}
</style>