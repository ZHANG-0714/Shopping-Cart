<template>
  <!-- 商品推荐 -->
  <div>
    <div class="commodity">
      <!-- 这里是父盒子 -->
      <div class="good">商品推荐</div>

      <div class="picture" ref="pictureScroll">
        <div class="recomm">
          <!-- 这里是子盒子，即滚动区域 -->
          <div v-for="(item,index) in recommend" :key="index" class="for">
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
  methods: {},
  mounted() {
       new BScroll(this.$refs.pictureScroll,{
            scrollX: true, 
            click: true,
        })
    
  },
  created() {},
  watch: {},
  computed: {
      recommend(){
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
.good{
margin-left: 10px;
}
.picture{
  display: flex;
  overflow: hidden;
}
.recomm {
 display: flex;
 flex: 1;
}
.for{
 border: 1px solid #ccc;
}
.img {
  width: 130px;
  height: 120px;
}
.name {
  font-size: 15px;
  width: 100px;
  //多余的隐藏
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

}
</style>