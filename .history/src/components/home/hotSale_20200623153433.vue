<template>
  <!-- 热销商品 -->
  <div>
    <div class="food">热销商品</div>

    <div class="hotGoods">
      <div v-for="(item,index) in hotGoods" :key="index">
        <div  class="goods"  @click="details(item)">
          <img :src="item.image" alt class="img" />
          <div class="name">{{item.name}}</div>

          <div class="price">
              <div>￥{{ item.mallPrice }} </div>
              <s>￥{{item.price}}</s>
          </div>

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
  methods: {
    details(item){
      this.$router.push({ name: "Details", query: { id: item.goodsId } });
      console.log(item)
    }
  },
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
  padding-top: 10px;
  color: #e0322b;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
}
.hotGoods {
  background: #fff;
  flex-wrap: wrap;
  display: flex;
}
.img {
  width: 186px;
}
.name {
  width: 170px;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 10px;
}
.goods{ 
    height: 250px;
    border-right: 1px solid #ccc;
    border-top: 1px solid #ccc;
}
.price{
    display: flex;
    justify-content: center;
    margin: 10px;
}
s{
    color: #e0322b;
    font-size: 13px;
    margin-left: 10px;
}
</style>