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
      <van-goods-action-button
        color="#FF4444"
        type="danger"
        text="立即购买"
        @click="buy"
        v-model="show"
      />
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
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img.yzcdn.cn/1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "https://img.yzcdn.cn/1p.jpg" // 用于预览显示的规格类目图片
              },
              {
                id: "1215",
                name: "蓝色",
                imgUrl: "https://img.yzcdn.cn/2.jpg",
                previewImgUrl: "https://img.yzcdn.cn/2p.jpg"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1193", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "" // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: goodsOne.image_path
      },
      messageConfig: {
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise(resolve => {
            setTimeout(
              () =>
                resolve(),
              1000
            );
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placeholder 配置
        placeholderMap: {
          text: "xxx",
          tel: "xxx"
        },
        // 初始留言信息
        // 键：留言 name
        // 值：留言内容
        initialMessages: {
          留言: "留言信息"
        }
      },
      goodsId: "",
      quota: 5,
      quotaUsed: 0,
      hide_stock: {}
    };
  },
  methods: {
    buy() {
      this.show = true;
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
        console.log(this.goodsOne);
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