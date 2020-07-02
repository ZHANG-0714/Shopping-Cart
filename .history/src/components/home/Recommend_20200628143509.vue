<template>
  <!-- 商品推荐 -->
  <div>
    <div class="commodity">
      
      <div class="good">商品推荐</div>
      <!-- 这里是父盒子 -->
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
                <s>￥{{ item.price }} </s>
            </div>
            <!-- 查看详情 -->
            <div class="details">
                <div class="vehicle" @click="shopping(item,index)">
                    <!-- <van-icon name="shopping-cart" color="#fff" @click="shopping(item,index)"/> -->
                    加入
                </div>
                <div class="see" @click="details(item)">查看详情</div>
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
  methods: {
    // 详情页
    details(item){
      this.$router.push({ name: "Details", query: { id: item.goodsId } });
      console.log(item)
    },
    // 加入购物车
    shopping(item,index){
      this.$api.addShop(item.goodsId).then(res =>{
        this.$toast(res.msg);
        console.log(res)
      }).catch(err =>{
        console.log(err)
      })
    }
  },
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
 padding-left: 5px;
 border: 0.5px solid #f2f2f2;
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
    margin-left: 10%;
    margin-top: 10px;
    display: flex;
}
.vehicle{
    width: 30px;
    height: 26px;
    text-align: center;
    background: #FECA3A;
    border-radius: 5px 0 0 5px;
}
.van-icon{
    line-height: 25px;
}
.see{
    width: 78px;
    line-height: 26px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    background-color: #FF4C38;
    border-radius: 0 5px 5px 0;
}
</style>