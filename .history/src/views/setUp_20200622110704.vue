<template>
  <!-- 设置 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="个人资料" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 头像 -->
    <van-cell-group>
      <div class="value">
        <van-field v-model="value" label="头像" />

        <img src="../assets/3.png" alt class="portrait" />
        <van-icon name="arrow" size="20px" color="#7d7e80" />
      </div>
    </van-cell-group>
    <!-- 用户名 -->
    <van-cell-group>
      <van-field v-model="value" label="用户名" placeholder="请输入用户名" />
    </van-cell-group>
    <!-- 昵称 -->
    <van-cell-group>
      <van-field v-model="value" label="昵称" />
    </van-cell-group>
    <!-- 性别 -->
    <van-cell-group>
      <van-field v-model="value" label="性别" />
    </van-cell-group>
    <!-- 邮箱 -->
    <van-cell-group>
      <van-field v-model="value" label="邮箱" placeholder="请输入邮箱"/>
    </van-cell-group>
    <!-- 出生年月 -->
    <van-cell-group>
      <van-field v-model="value" label="出生年月" />
    </van-cell-group>

    <div>
        <van-button type="primary">保存</van-button>
    </div>
    <div>
        <van-button type="default">取消</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: ""
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.city {
  border-bottom: 1px solid rgb(241, 241, 241);
}
.portrait {
  width: 60px;
  height: 60px;
  border-radius: 15px;
  text-align: right;
}
.value {
  display: flex;
  height: 80px;
  align-items: center;
}
.van-icon {
  margin-right: 20px;
  margin-left: 10px;
}
</style>