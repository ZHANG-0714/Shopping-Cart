<template>
  <!-- 购物车 -->
  <div>
    <!-- 标题 -->
    <div class="member">购物车</div>
    <!-- 全选 -->
    <div class="select">
      <div class="orders">
        <van-checkbox v-model="checked" shape="square" checked-color="#E0322B" @click="Select">全选</van-checkbox>
      </div>
      <div class="order">
        <div>
          合计：
          <span class="span">{{money | fixed}}</span>
        </div>
        <div>请确认订单</div>
      </div>
    </div>
    <!-- 按钮 -->
    <div class="button">
      <van-button type="default" color="#ff7d44" @click="Delete">删除</van-button>
      <van-button type="default" color="#ff7d44" @click="settlement">去结算</van-button>
    </div>

    <!-- 购物车商品列表 -->
    <div class="arr">
      <div class="commodity" v-for="(item,index) in shopping" :key="index">
        <van-checkbox v-model="item.check" shape="square" checked-color="#E0322B" @click="Single"></van-checkbox>
        <img :src="item.image_path" alt class="img" />
        <!-- 商品名 -->
        <div class="money">
          <div class="name">{{item.name}}</div>
          <!-- 价格 -->
          <div class="list">
            <div class="mallPrice">￥{{item.mallPrice}}</div>
            <div>
              <van-stepper
                v-model="item.count"
                theme="round"
                button-size="20"
                disable-input
                @click="increase(item)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from "../components/Navigation/Navigation"; //底部导航

export default {
  name: "",
  props: {},
  components: {
    Navigation
  },
  data() {
    return {
      checked: false,
      shopping: [], //购物车数据
      arr: []
    };
  },
  methods: {
    // 全选
    Select() {
      this.shopping.map(item => {
        item.check = this.checked;
      });
    },
    //单选
    Single() {
      this.checked = this.shopping.every(item => {
        return item.check === true;
      });
    },
    //删除
    Delete() {
      this.shopping.map(item => {
        if (item.check === true) {
          console.log(item.cid);
          this.$api
            .itemDelete(item.cid)
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    //购物车加减商品
    increase(item) {
      this.$api
        .addition({ count: item.count, id: item.id, mallPrice: item.mallPrice })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 去结算
    settlement() {}
  },
  mounted() {
    // 购物车数据
    this.$api
      .query()
      .then(res => {
        this.shopping = res.shopList;
        console.log(this.shopping);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {
    // 定义总价
    money() {
      let val = 0;
      this.shopping.map(item => {
        if (item.check) {
          val += item.count * item.mallPrice;
        }
      });
      return val;
    }
  },

  //过滤器（对数字进行操作就要用这个）
  filters: {
    fixed(val) {
      return "￥" + Number(val).toFixed(2);
    }
  }
};
</script>

<style scoped lang='scss'>
.member {
  width: 100%;
  line-height: 50px;
  text-align: center;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 5;
  background-color: #fff;
  border-bottom: 1px solid rgb(228, 228, 228);
}
.select {
  width: 100%;
  display: flex;
  position: fixed;
  top: 50px;
  z-index: 5;
  align-items: center;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid rgb(228, 228, 228);
}
.orders {
  flex: 1;
  margin-left: 30px;
}
.order {
  flex: 1;
  margin-left: 30px;
  font-size: 14px;
}
.span {
  color: #e0322b;
}
.van-button {
  color: #fff;
}
.button {
  text-align: right;
  margin-top: 15px;
  position: fixed;
  right: 10px;
  top: 31px;
  width: 100%;
  height: 60px;
  background: #fff;
  z-index: 10;
  margin-top: 80px;
  padding-top: 15px;
}
.van-button {
  margin-right: 15px;
}
.img {
  width: 80px;
  height: 80px;
  margin-left: 20px;
  border: 1px solid #ccc;
}
.commodity {
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(228, 228, 228);
}
.list {
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.mallPrice {
  color: #e0322b;
}
.money {
  margin-left: 20px;
}
.name {
  font-size: 15px;
  width: 160px;
}
.arr {
  margin-top: 200px;
  margin-bottom: 50px;
}
</style>