<template>
  <!-- 登录 -->
  <div>
    <img src="../assets/2.png" alt />
    <div class="sing">
      <div class="title">登录/注册</div>

      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          placeholder="Username"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          placeholder="Password"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <!-- <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div> -->
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
</style>