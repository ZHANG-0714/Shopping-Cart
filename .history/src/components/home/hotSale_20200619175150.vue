<template>
  <!-- 热销商品 -->
  <div>
    <div class="food">热销商品</div>

    <div class="hotGoods">
      <div v-for="(item,index) in hotGoods" :key="index" class="goods">
        <img :src="item.image" alt class="img" />
        <div class="name">{{item.name}}</div>
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
  height: 160px;
  flex-wrap: wrap;
  display: flex;
}
.img {
  width: 187.5px;
}
.name {
  width: 150px;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods{
    border: 0.5px solid #f2f2f2;
}
</style>