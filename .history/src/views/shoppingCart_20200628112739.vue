<template>
  <!-- 购物车 -->
  <div>
    <!-- 标题 -->
    <div class="member">购物车</div>
    <!-- 未登录 -->
    <div v-if="this.user === null" class="logged">
      <img src="../assets/order.gif" alt class="not" />
      <div>登录后才能查看订单</div>
      <div class="buttons">
        <van-button type="primary" @click="logged">请先登录</van-button>
      </div>
    </div>
    <!-- 已登录 -->
    <div v-else>
      <!-- 判断购物车里有东西时 -->
      <div v-if="this.shopping.length < 0">
        <!-- 全选 -->
        <div class="selec">
          <div class="select">
            <div class="orders">
              <van-checkbox
                v-model="checked"
                shape="square"
                checked-color="#E0322B"
                @click="Select"
              >全选</van-checkbox>
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
        </div>

        <!-- 购物车商品列表 -->
        <div class="arr">
          <div class="commodity" v-for="(item,index) in shopping" :key="index">
            <van-checkbox
              v-model="item.check"
              shape="square"
              checked-color="#E0322B"
              @click="Single"
            ></van-checkbox>
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
                    @change="increase(item)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 判断购物车里没有东西时 -->
      <div v-else  class="no">
        <div class="commods">
          <img src="../assets/shop.png" alt="">
        </div>
      </div>
    </div>

    <Navigation></Navigation>
  </div>
</template>

<script>
import { Toast } from "vant";
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
      arr: [],
      user: "", //判断用户是否存在
      list: []
    };
  },
  methods: {
    //请先登录
    logged() {
      this.$router.push("Signin");
    },
    // 购物车数据
    getData() {
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
      this.list = this.shopping.filter(item => {
        return item.check === true;
      });
      if (this.list.length > 0) {
        this.$dialog
          .confirm({
            title: "提示",
            message: "您确定要删除吗？"
          })
          .then(() => {
            this.list.map(item => {
              this.arr.push(item.cid);
            });
            this.$api
              .deleteShop(this.arr)
              .then(res => {
                console.log(res);
                this.$toast.success(res.msg);
                this.getData();
              })
              .catch(err => {
                console.log(err);
              });
          })
          .catch(() => {});
      } else {
        this.$toast({
          message: "你还没选择要删除的商品",
          icon: "like-o"
        });
      }
    },
    //购物车加减商品
    increase(item) {
      this.$api
        .addition({
          count: item.count,
          id: item.cid,
          mallPrice: item.mallPrice
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 去结算
    settlement() {
      this.list = this.shopping.filter(item => {
        return item.check === true;
      });
      if (this.list.length > 0) {
        this.list.map(item => {
          this.arr.push(item);
          JSON.stringify(localStorage.setItem("buy", this.arr));
          this.$router.push("Settlement");
        });
      }
    }
  },
  mounted() {
    this.getData();
    // 判断用户是否存在
    this.user = localStorage.getItem("user");
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
.selec {
  width: 100%;
  position: fixed;
  top: 50px;
  z-index: 5;
}
.select {
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid rgb(228, 228, 228);
}
.logged {
  width: 100%;
  text-align: center;
}
.not {
  width: 100%;
  margin-top: 50px;
}
.buttons {
  margin-top: 30px;
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
  line-height: 60px;
  text-align: right;
  background: #fff;
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
.no{
  width: 100%;
  margin-top: 100px;
  margin-left: 150px;
}
.commods{
  width: 50%;
  height: 150px;
  text-align: center;
  background: #ECEBEC;
}
</style>