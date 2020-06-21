<template>
  <!-- 热销商品 -->
  <div>
    <div class="food">热销商品</div>

    <div class="hotGoods">
      <div v-for="(item,index) in hotGoods" :key="index">
        <div  class="goods">
          <img :src="item.image" alt class="img" />
          <div class="name">{{item.name}}</div>
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
  height: 155px;
  flex-wrap: wrap;
  display: flex;
}
.img {
  width: 186px;
}
.name {
  width: 160px;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods{ 
    border-right: 0.5px solid #f2f2f2;
    border-top: 0.5px solid #f2f2f2;
}
</style>