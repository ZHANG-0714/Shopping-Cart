<template>
  <!-- 最近浏览 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="最近浏览" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <div v-for="(item,index) in views" :key="index" class="views">
      <img :src="item.image_path" alt class="img" />
      <!-- 商品价格 -->
      <div class="commodity">
        <div>{{item.name}}</div>
        <div class="present">
          <span class="price">￥{{item.present_price}}</span>
          <s>{{item.orl_price}}</s>
        </div>
      </div>
      <!-- 删除 -->
      <van-icon name="close" @click="Delete(item)" />
    </div>
  </div>
</template>

<script>
import uniqWith from "lodash/uniqWith";
import isEqual from "lodash/isEqual";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      views: [],
      id:''
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    },
    Delete(item) {
      console.log(item);
      localStorage.removeItem("item");
    }
  },
  mounted() {
    // 本来存的JSON对象，JSON.parse转回来
    this.views = JSON.parse(localStorage.getItem("views"));
    console.log(this.views);

    //去重
    this.views = uniqWith(this.views, isEqual);
    //获取商品的goodsId
    this.views.map(item => {
      this.id.push(item.goodsId)
    });
    //获取商品详情
    this.$api
        .single(this.id)
        .then(res => {
          console.log(res);
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
.views {
  padding-left: 20px;
  margin-top: 20px;
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(226, 226, 226);
}
.img {
  width: 90px;
  height: 90px;
  border: 1px solid #ccc;
}
.commodity {
  flex: 1;
  padding-left: 15px;
  font-size: 15px;
}
.present {
  margin-top: 20px;
}
.price {
  color: red;
  margin-right: 8px;
  font-size: 16px;
  font-weight: 700;
}
.van-icon {
  margin-top: 70px;
  margin-right: 20px;
}
</style>