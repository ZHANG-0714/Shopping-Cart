<template>
  <!-- 热销商品 -->
  <div>
    <div class="food">热销商品</div>

    <div class="hotGoods"> 
      <div v-for="(item,index) in hotGoods" :key="index">
        <img :src="item.image" alt class="img" />
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
    hotGoods() {
      return this.$store.state.hotGoods;
    }
  }
};
</script>

<style scoped lang='scss'>
.food {
  margin-top: 10px;
  color: #e0322b;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
}
.hotGoods {
    height: 190px;
    flex-wrap:wrap;
  display: flex;
}
.img {
  width: 187.5px;
  height: 190px;
}
</style>