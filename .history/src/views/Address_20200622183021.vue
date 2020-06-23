<template>
  <!-- 地址管理 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="地址列表" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />

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
        chosenAddressId: '1',
      list: []
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    },
     onAdd() {
      this.$toast("请输入新增地址");
      this.$router.push("Newly");
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
  },
  mounted() {
      this.$api.getAddress().then(res =>{
          this.list = res 
          console.log(res)
      })
      .catch(err => {
          console. log(err);
        });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.city {
  border-bottom: 1px solid rgb(241, 241, 241);
}
</style>