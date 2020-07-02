<template>
  <!-- 收藏 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="我的收藏" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 商品内容 -->
    <div v-for="(item,index) in Collectio" :key="index" class="commodity">
      <div @click="details(item)">
        <img :src="item.image_path" alt class="img" />
        <div>
          <div class="name">{{item.name}}</div>
          <div class="price">￥{{item.present_price}}</div>
        </div>
        <!--        删除-->
        <div class="icon" @click="delet(item)">
          <van-icon name="close" />
        </div>
      </div>
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
      Collectio: []
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    },
    //查询我的收藏
    getData() {
      this.$api
        .collection()
        .then(res => {
          this.Collectio = res.data.list;
          console.log(this.Collectio);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 详情
    details(item){
      this.$router.push({ name: "Details", query: { id: item.goodsId } });
      console.log(item)
    },
    // 删除
    delet(item) {
      this.$api
        .cancel(item.cid)
        .then(res => {
          console.log(res);
          if (res.code === 200) {
            this.getData();
            this.$toast.success(res.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.city {
  border-bottom: 1px solid rgb(241, 241, 241);
}
.img {
  width: 80px;
  height: 80px;
  border: 1px solid #ccc;
}
.commodity {
  display: flex;
  margin-top: 30px;
  margin-left: 20px;
}
.name {
  width: 87%;
  margin-left: 20px;
}
.price {
  margin-top: 10px;
  margin-left: 20px;
}
.icon {
  margin-right: 20px;
  margin-top: 60px;
}
</style>