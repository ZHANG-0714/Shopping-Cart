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
      <van-field v-model="userInfo.username" label="用户名" placeholder="请输入用户名" />
    </van-cell-group>
    <!-- 昵称 -->
    <van-cell-group>
      <van-field v-model="userInfo.nickname" label="昵称" placeholder="请输入昵称" />
    </van-cell-group>
    <!-- 性别 -->
    <van-cell-group>
      <van-field v-model="userInfo.gender" label="性别" />
    </van-cell-group>
    <!-- 邮箱 -->
    <van-cell-group>
      <van-field label="邮箱" placeholder="请输入邮箱" />
    </van-cell-group>
    <!-- 出生年月 -->
    <van-cell-group>
      <van-field is-link @click="showPopup" v-model="value" label="出生年月">出生年月</van-field>

      <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @cancel="show = false"
          @confirm="confirm"
        />
      </van-popup>
    </van-cell-group>

    <div class="primarys">
      <van-button type="primary" size="large" @click="preservation">保存</van-button>
    </div>
    <div>
      <van-button type="warning" size="large" @click="cancel">取消</van-button>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      userInfo: "",
      show: false,
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(2020, 7, 1),
      currentDate: "",
      year: "",
      month: "",
      day: ""
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    //保存
    preservation() {
      this.$dialog
        .confirm({
          title: "修改个人信息",
          message: "确定修改个人信息吗？"
        })
        .then(() => {
          this.$api
            .saveUser({
              id: this.userInfo._id,
              gender: this.userInfo.gender,
              year: this.year,
              month: this.month,
              day: this.day,
              nickname: this.userInfo.nickname
            })
            .then(res => {
              console.log(res);
              this.$router.push("My");
              this.$toast.success("修改成功");
            })
            .catch();
        })
        .catch(() => {
          // on cancel
        });
    },
    // 取消
    cancel() {
      this.$router.push("My");
    },
    showPopup() {
      this.show = true;
    },
    confirm(value) {
      this.value = dayjs(value).format("YYYY年MM月DD日");
      this.year = dayjs(value).format("YYYY");
      this.month = dayjs(value).format("MM");
      this.day = dayjs(value).format("DD");
      this.show = false;
    }
  },
  mounted() {
    this.$api
      .queryUser()
      .then(res => {
        this.value =
          res.userInfo.year +
          "年" +
          res.userInfo.month +
          "月" +
          res.userInfo.day +
          "日";
        this.userInfo = res.userInfo;
        console.log(res);
      })
      .catch();
  },
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