<template>
  <!-- 商品推荐 -->
  <div>
    <div class="commodity">
      <div>商品推荐</div>

      <div class="recommend">
        <div v-for="(item,index) in recommend" :key="index">
          <div>
            <img :src="item.image" alt class="img" />
          </div>
          <div class="name">{{item.goodsName}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {
    recommend() {
      return this.$store.state.recommend;
    }
  }
};
</script>

<style scoped lang='scss'>
.commodity {
  width: 100%;
  height: 200px;
  margin-top: 20px;
  background-color: #fff;
}
.recommend {
  display: flex;
}
.img {
  width: 80px;
  height: 100px;
}
.name{
    font-size: 15px;
    overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 210px;
}
</style>