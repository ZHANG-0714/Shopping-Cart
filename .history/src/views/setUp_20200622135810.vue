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
        <van-field label="头像" />

        <img src="../assets/3.png" alt class="portrait" />
        <van-icon name="arrow" size="20px" color="#7d7e80" />
      </div>
    </van-cell-group>
    <!-- 用户名 -->
    <van-cell-group>
      <van-field v-model="value1" label="用户名" placeholder="请输入用户名" />
    </van-cell-group>
    <!-- 昵称 -->
    <van-cell-group>
      <van-field v-model="value1" label="昵称" />
    </van-cell-group>
    <!-- 性别 -->
    <van-cell-group>
      <van-field v-model="value1" label="性别" />
    </van-cell-group>
    <!-- 邮箱 -->
    <van-cell-group>
      <van-field v-model="value1" label="邮箱" placeholder="请输入邮箱" />
    </van-cell-group>
    <!-- 出生年月 -->
    <van-cell-group>
      <van-cell is-link @click="showPopup" v-model="value" label="出生年月">出生年月</van-cell>

      <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" >
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @cancel ='show = false'
          @confirm = 'confirm'
        />
      </van-popup>
    </van-cell-group>


    <div class="primarys">
      <van-button type="primary" size="large">保存</van-button>
    </div>
    <div>
      <van-button type="warning" size="large">取消</van-button>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      value1:'',
      show: false,
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(2020, 7, 1),
      currentDate: ""
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    showPopup() {
      this.show = true;
    },
    confirm(value){
        this.value = dayjs(value).format('YYYY年MM月DD日')
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
.primarys {
  margin-top: 20px;
}
.van-icon {
  margin-right: 20px;
  margin-left: 10px;
}
.van-button {
  width: 80%;
  margin-left: 10%;
  margin-top: 10px;
  text-align: center;
}
</style>