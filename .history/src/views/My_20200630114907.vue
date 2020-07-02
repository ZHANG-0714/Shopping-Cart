<template>
  <!-- 我的 -->
  <div>
    <div>
      <!-- 标题 -->
      <div class="member">会员中心</div>
      <!-- 头像 -->
      <div class="user">
        <div class="setting">
          <van-icon name="setting" color="#fff" size="20px" @click="personal" />
        </div>
        <div class="head">
          <img src="../assets/3.png" alt class="portrait" />

          <div v-if="this.user === null">
            <div class="sign" @click="SignIn">登录/注册</div>
          </div>
          <div v-else>
            <div class="users">欢迎您：{{user}}</div>
            <div class="sign" @click="signOut">退出登录</div>
          </div>
        </div>
      </div>
      <!-- 代付款 -->
      <div class="payment">
        <div class="pay">
          <van-icon name="balance-pay" />
          <div>代付款</div>
        </div>
        <div class="pay">
          <van-icon name="free-postage" />
          <div>代发货</div>
        </div>
        <div class="pay">
          <van-icon name="points" />
          <div>代收货</div>
        </div>
        <div class="pay" @click="evaluate">
          <van-icon name="thumb-circle-o" :badge = "list.length" />
          <div>评价</div>
        </div>
        <div class="pay">
          <van-icon name="like-o" @click="My"/>
          <div>已完成</div>
        </div>
      </div>
      <!-- 全部订单 -->
      <div>
        <div class="order" @click="My">
          <van-icon name="records" size="18px" />
          <div class="whole">全部订单</div>
          <div class="details">
            <van-icon name="arrow" size="15px" color="#7d7e80" />
          </div>
        </div>
        <div class="order" @click="collection">
          <van-icon name="star-o" size="18px" />
          <div class="whole">收藏商品</div>
          <div class="details">
            <van-icon name="arrow" size="15px" color="#7d7e80" />
          </div>
        </div>
        <div class="order" @click="address">
          <van-icon name="location-o" size="18px" />
          <div class="whole">地址管理</div>
          <div class="details">
            <van-icon name="arrow" size="15px" color="#7d7e80" />
          </div>
        </div>
        <div class="order" @click="recent">
          <van-icon name="eye-o" size="18px" />
          <div class="whole">最近浏览</div>
          <div class="details">
            <van-icon name="arrow" size="15px" color="#7d7e80" />
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
      user: ""
    };
  },
  methods: {
    //设置
    personal() {
      this.$router.push("setUp");
    },
    //退出登录
    signOut() {
      this.$api
        .loginOut()
        .then(res => {
          localStorage.removeItem("user");
          this.$toast("退出成功");
          this.$router.go(0);
          console.log(res);
        })
        .catch(err => {
          console, log(err);
        });
    },
    // 登录/注册
    SignIn() {
      this.$router.push("Signin");
    },
    // 评价
    evaluate(){
       if (this.user === null) {
        this.$dialog.alert({
          message: "亲！登录后，可访问"
        });
      } else {
        this.$router.push("Evaluate");
      }
    },
    // 全部订单
    My() {
      if (this.user === null) {
        this.$dialog.alert({
          message: "亲！登录后，可访问"
        });
      } else {
        this.$router.push("myOrder");
      }
    },
    //地址管理
    address() {
      if (this.user === null) {
        this.$dialog.alert({
          message: "亲！登录后，可访问"
        });
      } else {
        this.$router.push("Address");
      }
    },
    // 最近浏览
    recent() {
      if (this.user === null) {
        this.$dialog.alert({
          message: "亲！登录后，可访问"
        });
      } else {
        this.$router.push("Lately");
      }
    },
    // 收藏商品
    collection() {
      if (this.user === null) {
        this.$dialog.alert({
          message: "亲！登录后，可访问"
        });
      } else {
        this.$router.push("Collection");
      }
    }
  },

  mounted() {
    // 用户名
    this.user = localStorage.getItem("user");
  },
  watch: {},
  computed: {
    list() {
      console.log(this.$store.state.list)
      return this.$store.state.list;
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
}
.user {
  width: 100%;
  height: 220px;
  background: lightblue;
}
.setting {
  text-align: right;
  margin-right: 20px;
  padding-top: 15px;
}
.head {
  width: 100%;
  height: 150px;
  text-align: center;
}
.portrait {
  width: 70px;
  height: 70px;
  border-radius: 15px;
}
.users {
  color: #fff;
  font-size: 18px;
  margin-top: 10px;
}
.sign {
  color: #fff;
  font-size: 15px;
  margin-top: 15px;
}
.van-icon {
  font-size: 25px;
}
.payment {
  display: flex;
}
.pay {
  margin-top: 10px;
  text-align: center;
  flex: 1;
}
.pay div {
  font-size: 15px;
}
.whole {
  margin-left: 5px;
}
.order {
  display: flex;
  margin-top: 15px;
  padding: 10px;
  border-bottom: 1px solid rgb(241, 241, 241);
  border-top: 1px solid rgb(241, 241, 241);
}
.details {
  text-align: right;
  flex: 1;
  margin-top: 5px;
}
</style>