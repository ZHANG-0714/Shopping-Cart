<template>
  <!-- 我的 -->
  <div>
    <div>
      <!-- 标题 -->
      <div class="member">会员中心</div>
      <!-- 头像 -->
      <div class="user">
        <div class="setting">
          <van-icon name="setting" color="#fff" size="20px" />
        </div>
        <div class="head">
          <img src="../assets/3.png" alt class="portrait" />
          退出登录
          <div class="user">欢迎您：{{user}}</div>退出登录
          <div>退出登录</div>
          
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
        user:''
    };
  },
  methods: {},
  mounted() {
    // 用户名
    this.user = localStorage.getItem("user");
  },
  watch: {},
  computed: {}
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
  height: 200px;
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
.user{
    color: #fff;
    font-size: 18px;
    margin-top: 10px;
}
</style>