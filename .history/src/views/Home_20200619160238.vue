<template>
  <!-- 首页 -->
  <div class="home">
    <div class="search">
      <!-- 城市定位 -->
      <div class="city" @click="City">
        {{city}}
        <span>▼</span>
      </div>
      <!-- 搜索框 -->
      <!-- <div>
          <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch">
            <template #action>
              <div @click="onSearch" class="onSearch">搜索</div>
            </template>
          </van-search>
      </div>-->
    </div>

    <Rotation></Rotation>

    <Cation></Cation>

    <Recommend></Recommend>
  
    <!-- 分类名 -->
    <div class="food">
      <div class="first">1F</div>
      <Varieties :floorName='floorName1'></Varieties>
    </div>
    <Varieties :floorName='floorName2'></Varieties>
    <Varieties :floorName='floorName3'></Varieties>
    <!-- 分类图片 -->
    <Varieties :floor ='floor1'></Varieties>
    <Varieties :floor ='floor2'></Varieties>
    <Varieties :floor ='floor3'></Varieties>
  </div>
</template>

<script>
import Rotation from "../components/home/Rotation";  //轮播图
import Cation from "../components/home/Cation";   //首页的 分类
import Recommend from "../components/home/Recommend";  //商品推荐
import Varieties from "../components/home/Varieties";  //休闲食品

export default {
  name: "",
  props: {},
  components: {
    Rotation,
    Cation,
    Recommend,
    Varieties
  },
  data() {
    return {
      city: "", //定位
      first: "", //首页数据
      // 分类名
      floorName1:'',
      floorName2:'',
      floorName3:'',
      // 分类图片
      floor1:[],
      floor2:[],
      floor3:[],
    };
  },
  methods: {
    // 城市定位
    City() {
      this.$router.push("City");
    },

    // 获取首页数据
    getData() {
      this.$api
        .recommend()
        .then(res => {
          this.$store.commit("Recommend", res.data.slides);
          this.$store.commit("classification", res.data.category);
          this.$store.commit("commodity", res.data.recommend);
          //分类名
          this.floorName1 = res.data.floorName.floor1
          this.floorName2 = res.data.floorName.floor2
          this.floorName3 = res.data.floorName.floor3
          //分类图片
          this.floor1 = res.data.floor1
          this.floor2 = res.data.floor2
          this.floor3 = res.data.floor3
          console.log(res.data);
        })
        .catch();
    }
  },
  mounted() {
    this.getData();

    //定位
    let _this = this;
    AMap.plugin("AMap.Geolocation", function() {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: "RB"
      });

      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, "complete", onComplete);
      AMap.event.addListener(geolocation, "error", onError);

      function onComplete(data) {
        // data是具体的定位信息
        // console.log(data);
        _this.city = data.addressComponent.city;
      }

      function onError(data) {
        // 定位出错
      }
    });
  },
  watch: {},
  computed: {
    //轮播图
    slides() {
      return this.$store.state.slides;
    },
    //首页分类
    category(){
      return this.$store.state.category;
    },
    //首页商品推荐
    recommend(){
       return this.$store.state.recommend;
    },
  }
};
</script>

<style scoped lang='scss'>
.home{
  width: 100%;
  height: 100vh;
  background: #ECECEC;
}
.search {
  width: 100%;
  height: 50px;
  background-color: #f2f2f2;
  display: flex;
}
.city {
  line-height: 50px;
  margin-left: 10px;
  font-size: 15px;
}
span {
  margin-left: 3px;
}
.van-search {
  height: 50px;
  background-color: #f2f2f2;
}
.onSearch {
  margin-left: 10px;
}
..food {
  margin-top: 10px;
  color: #e0322b;
  display: flex;
  justify-content: center;
}
.first {
  width: 18px;
  height: 18px;
  font-size: 13px;
  color: #fff;
  border-radius: 15px;
  padding-top: 2px;
  background-color: #e0322b;
  text-align: center;
  margin-right: 5px;
}
</style>