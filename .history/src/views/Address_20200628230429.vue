<template>
  <!-- 地址列表 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="地址列表" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <div v-if="list.length === 0">
    <div class="address">暂无收货地址～～</div>
    <div class="new">新増地址</div>
    </div>

    <div v-else>
      <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="select"
    />
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
      chosenAddressId: "",
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
    select(item) {
      // console.log(item);
      // this.$router.push({name:'Settlement',query:{item :item}})

      //  localStorage.setItem('item',JSON.stringify(item))
      // this.$router.push('Settlement')
        //   this.$api.setDefaultAddress(item)
        //   .then(res =>{
        //     console.log(res)
        // })
        // .catch(err => {
        //     console. log(err);
        //   });
    }
  },
  mounted() {
    //   查询用户收货地址
    this.$api
      .getAddress()
      .then(res => {
         res.address.map((item, index) => {
          this.$set(item,'id',(index+1).toString())
        })
        this.list = res.address;
          console.log(res)
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
.new{
  width: 100%;
  color:#fff;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  background: #FF4444;
  position: absolute;
  bottom: 0;
}
.address{
  text-align: center;
}
</style>