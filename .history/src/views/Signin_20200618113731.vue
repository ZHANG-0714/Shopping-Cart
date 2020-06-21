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
          :rules="[{ required: true, message: '请填写手机号码' }]"
        />
        <!-- 短信验证码 -->
        <van-field v-model="code" center clearable label="短信验证码" placeholder="仅注册需要">
          <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
          </template>
        </van-field>
        <!-- 验证码 输入框 -->
        <van-field
          v-model="verification"
          type="verification"
          label="验证码"
          placeholder="仅注册需要"
          :rules="[{ required: true, message: '请输入验证码' }]"
        />
        <!-- 验证码 图 -->
        <div class="cation" @click="grtChart"></div>

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
      verification:"" //验证码
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    // 验证码
    grtChart(){
      this.$api.verify().then(res =>{
        this.verification = res
        console.log(res)
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
  height: 500px;
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
</style>