<template>
  <!-- 设置 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="个人资料" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <van-cell-group>
  <van-field v-model="value" label="文本" placeholder="请输入用户名" />
</van-cell-group>



  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
         value: '',
    };
  },
  methods: {
   
      // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
      Toast('返回');
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
</style>