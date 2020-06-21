<template>
  <!-- 登录 -->
  <div>
    <img src="../assets/2.png" alt />
    <div class="sing">
      <div class="title">登录/注册</div>

      <van-cell-group>
        <van-field v-model="value" placeholder="请输入用户名" />
      </van-cell-group>

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
      value:''
    };
  },
  methods: {},
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