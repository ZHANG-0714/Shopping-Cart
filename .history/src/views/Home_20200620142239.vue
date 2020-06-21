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

    <div class="comm" ref="comm">
      <div class="dity">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <Rotation></Rotation>

          <Cation></Cation>

          <Recommend></Recommend>

          <!-- 休闲食品 新鲜水果 营养奶品 -->
          <div>
            <Varieties :floorName="floorName1" :floor="floor1" :cation="cation1"></Varieties>
          </div>
          <div>
            <Varieties :floorName="floorName2" :floor="floor2" :cation="cation2"></Varieties>
          </div>
          <div>
            <Varieties :floorName="floorName3" :floor="floor3" :cation="cation3"></Varieties>
          </div>

          </van-pull-refresh>

          <hotSale></hotSale>

      </div>
    </div>

    <Navigation></Navigation>
  </div>
</template>

<script>
import { Toast } from 'vant';
import BScroll from "better-scroll";
import Rotation from "../components/home/Rotation"; //轮播图
import Cation from "../components/home/Cation"; //首页的 分类
import Recommend from "../components/home/Recommend"; //商品推荐
import Varieties from "../components/home/Varieties"; //休闲食品 新鲜水果 营养奶品
import hotSale from "../components/home/hotSale"; //热销商品
import Navigation from "../components/Navigation/Navigation"; //底部导航

export default {
  name: "",
  props: {},
  components: {
    Rotation,
    Cation,
    Recommend,
    Varieties,
    hotSale,
    Navigation
  },
  data() {
    return {
      isLoading: false,
      city: "", //定位
      first: "", //首页数据
      // 分类名
      floorName1: "",
      floorName2: "",
      floorName3: "",
      // 分类图片
      floor1: [],
      floor2: [],
      floor3: [],
      //楼
      cation1: "1F",
      cation2: "2F",
      cation3: "3F"
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
          this.$store.commit("hotsale", res.data.hotGoods);
          //分类名
          this.floorName1 = res.data.floorName.floor1;
          this.floorName2 = res.data.floorName.floor2;
          this.floorName3 = res.data.floorName.floor3;
          //分类图片
          this.floor1 = res.data.floor1;
          this.floor2 = res.data.floor2;
          this.floor3 = res.data.floor3;
          console.log(res.data);
        })
        .catch();
    },
    //下拉刷新
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    }
  },
  mounted() {
    this.getData();
    // 滑动
    new BScroll(this.$refs.comm, {
      scrollY: true,
      click: true
    });

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
    category() {
      return this.$store.state.category;
    },
    //首页商品推荐
    recommend() {
      return this.$store.state.recommend;
    },
    //首页热销商品
    hotGoods() {
      return this.$store.state.hotGoods;
    }
  }
};
</script>

<style scoped lang='scss'>
.home {
  width: 100%;
  background: #ececec;
}

.search {
  width: 100%;
  height: 50px;
  background-color: #f2f2f2;
  display: flex;
  position: fixed;
  z-index: 99;
  margin-top: -50px;
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
.comm {
  height: 300px;
   background: #ececec;
}
// .dity {
//   margin-top: 50px;
//   height: 1500px;
//    background: #ececec;
// }
</style>