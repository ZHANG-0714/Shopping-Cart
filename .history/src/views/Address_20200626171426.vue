<template>
  <!-- 地址列表 -->
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
      @select="select"
    />
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
      chosenAddressId: "1",
      list: []
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    },
    //点击新增收货地址
    onAdd() {
      this.$toast("请输入新增地址");
      this.$router.push("Newly");
    },
    // 修改地址
    onEdit(item) {
      this.$toast("请修改地址");
      console.log(item);
      this.$router.push({ name: "Newly", query: { id: item } });
    },
    //设置默认收货地址
    select() {
          this.$api.setDefaultAddress(val._id)
          .then(res =>{
            console.log(res)
        })
        .catch(err => {
            console. log(err);
          });
    }
  },
  mounted() {
    //   查询用户收货地址
    this.$api
      .getAddress()
      .then(res => {

        this.list = res.address;
        //   console.log(res)
      })
      .catch(err => {
        console.log(err);
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