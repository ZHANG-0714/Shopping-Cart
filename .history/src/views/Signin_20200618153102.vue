<template>
  <!-- 登录 -->
  <div>
    <img src="../assets/2.png" alt />
    <div class="van--length sing">
      <div class="title">登录/注册</div>

      <van-form @submit="onSubmit">
        <!-- 用户名 -->
        <van-field
          v-model="username"
          name="用户名"
         
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
            <!-- 验证码按钮 -->
              <van-button size="small" type="primary"  v-show="Verification" @click="handleClick">发送验证码</van-button>
              <!-- 倒计时按钮 -->
              <van-button size="small" type="primary" v-show="!Verification">
                  <span>{{timer}}</span>秒后重新获取
              </van-button>

          </template>
        </van-field>

        <div class="sms">
          <!-- 验证码 输入框 -->
        <div class="dox">
          <van-field
          v-model="verification"
          type="verification"
          label="验证码"
          placeholder="仅注册需要"
          :rules="[{}]"
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
            <van-button type="default" @click="Register">注册</van-button>
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
      sms:"",  // 验证码请求
      Verification: true, //通过v-show控制显示获取还是倒计时
      timer: 60 //定义初始时间为60s
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
    },

    // 验证码倒计时 
    handleClick() {
      this.Verification = false; //点击button改变v-show的状态
      let auth_timer = setInterval(() => {
        //定时器设置每秒递减
        this.timer--; //递减时间
        if (this.timer <= 0) {
          this.Verification = true; //60s时间结束还原v-show状态并清除定时器
          clearInterval(auth_timer);
        }
      }, 1000);
    },

    // 注册
    Register(){
      this.$api.register({ nickname:this.nickname, password:this.password, code:this.code}).then(res =>{
        console.log(res)
      })
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
  height: 65%;
  position: absolute;
  top: 10%;
  left: 5%;
  background-color: rgba(181, 181, 181, 0.3);
  border-radius: 10px;
}
.title {
  margin: 15px 0 0 15px;
  font-size: 22px;
  font-weight: 700px;
  color: #ccc;
}
.van-field {
  margin-top: 10px;
  background-color: rgba(91, 79, 79, 0.1);
}
.cation{
  margin-top: 10px;
  margin-right: 5px;
}
.dox{
  text-align: left;
  margin-left: 10px;
  border-bottom: 0.5px solid rgb(148, 146, 146);
}
.sms {
  display: flex;
}
.button{
  display: flex;
}
.button>div{
  padding-left: 20px;
  margin-top: 20px;
}
.van-button{
  color: #ccc;
  border: 0;
  background-color: #838080;
}
</style>