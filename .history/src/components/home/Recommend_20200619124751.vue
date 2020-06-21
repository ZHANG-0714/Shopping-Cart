<template>
  <!-- 商品推荐 -->
  <div>
    <div class="commodity" ref="pictureScroll">
      <!-- 这里是父盒子 -->
      <div>商品推荐</div>

      <div class="picture">
        <div class="recommend">
          <!-- 这里是子盒子，即滚动区域 -->
          <div v-for="(item,index) in recommend" :key="index">
            <div>
              <img :src="item.image" alt class="img" />
            </div>
            <div class="name">{{item.goodsName}}</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    pictureScroll() {}
  },
  mounted() {},
  created() {
    this.$nextTick(() => {
      this.pictureScroll();
    });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.commodity {
  width: 100%;
  height: 200px;
  margin-top: 20px;
  background-color: #fff;
}
.picture{
 display: flex;
  overflow: hidden;
}
.recommend {
 
}
.img {
  width: 80px;
  height: 100px;
}
.name {
  //多余的隐藏
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100px;
}
</style>