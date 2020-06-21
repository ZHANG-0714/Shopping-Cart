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
            <!-- 图片 -->
            <div>
              <img :src="item.image" alt class="img" />
            </div>
            <div class="name">{{item.goodsName}}</div>
            <!-- 价格 -->
            <div>
                <span>￥ {{ item.mallPrice }} </span>
                <s>￥{{item.price}} </s>
            </div>
            <!-- 查看详情 -->
            <div class="details">
                <div class="vehicle">
                    <van-icon name="shopping-cart" color="#fff"/>
                </div>
                <div class="see">查看详情</div>
            </div>

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
//   height: 300px;
  margin-top: 20px;
  background-color: #fff;
}
.good{
  margin-left: 10px;
  padding-top: 10px;
  margin-bottom: 10px;
}
.picture{
  display: flex;
  overflow: hidden;
}
.recomm {
 display: flex;
 justify-content: center;
 flex: 1;
}
.for{
 border: 0.5px solid #ccc;
}
.img {
  width: 130px;
  height: 120px;
}
.name {
  font-size: 15px;
  width: 140px;
  //多余的隐藏
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
s{
    color: #999;
    font-size: 13px;
}
.details{
    width: 140px;
    margin-left: 15%;
    margin-top: 10px;
    display: flex;
}
.vehicle{
    width: 27px;
    height: 25px;
    text-align: center;
    background: #FECA3A;
    border-radius: 5px 0 0 5px;
}
.van-icon{
    line-height: 25px;
}
.see{
    width: 70px;
    line-height: 25px;
    color: #fff;
    font-size: 13px;
     text-align: center;
    background-color: #FF4C38;
}
</style>