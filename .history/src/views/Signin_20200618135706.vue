<template>
  <!-- 登录 -->
  <div>
    <img src="../assets/2.png" alt />
    <div class="sing">
      <div class="title">登录/注册</div>

      <van-form @submit="onSubmit">
        <!-- 用户名 -->
        <van-field
          v-model="username"
          name="用户名"
          placeholder="Username"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <!-- 密码 -->
        <van-field
          v-model="password"
          type="password"
          name="密码"
          placeholder="Password"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <!-- 手机号 -->
        <van-field
          v-model="mobile"
          type="mobile"
          label="手机号"
          placeholder="仅注册需要"
        />
        <!-- 短信验证码 -->
        <van-field v-model="code" center clearable label="短信验证码" placeholder="仅注册需要">
          <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
          </template>
        </van-field>

        <div class="sms">
          <!-- 验证码 输入框 -->
        <div>
          <van-field
          v-model="verification"
          type="verification"
          label="验证码"
          placeholder="仅注册需要"
          :rules="[{ required: true, message: '请输入验证码' }]"
        />
        </div>
        <!-- 验证码 图 -->
        <div class="cation" @click="grtChart" v-html="sms"></div>
        </div>

        <div class="button">
          <div>
            <van-button type="default">登录</van-button>
          </div>
          <div>
            <van-button type="default">注册</van-button>
          </div>
        </div>

      </van-form>
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
      username: "",  //用户名
      password: "",  //密码
      mobile: "",   //手机号
      code: "",   //短信验证码
      verification:"", //验证码
      sms:""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    // 验证码
    grtChart(){
      this.$api.verify().then(res =>{
        this.sms = res
        // console.log(res)
      }).catch()
    }
  },
  mounted() {
    this.grtChart()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
img {
  width: 100%;
  height: 100vh;
}
.sing {
  width: 90%;
  height: 75%;
  position: absolute;
  top: 8%;
  left: 5%;
  background-color: #fff;
  border-radius: 10px;
}
.title {
  margin: 15px 0 0 15px;
  font-size: 22px;
  font-weight: 700px;
}
.van-field {
  margin-top: 10px;
  border-bottom: 2px solid #ccc;
}
// .van-button{
//   margin: 20px;
// }
.cation{
  margin-top: 10px;
  margin-right: 5px;
}
.sms{
  display: flex;
}
.button{
  display: flex;
}
.button div{
  margin-left: 10px;
  margin-top: 20px;
}
</style>