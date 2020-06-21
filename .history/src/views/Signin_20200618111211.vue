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
          name="手机号"
          label="手机号"
          placeholder="仅注册需要"
          :rules="[{ required: true, message: '请填写手机号码' }]"
        />
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
       username: '',
      password: '',
      mobile:'',
    };
  },
  methods: {
     onSubmit(values) {
      console.log('submit', values);
    },
  },
  mounted() {},
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
.van-field{
  margin-top: 10px;
  border-bottom: 2px solid #ccc;
}
</style>