<template>
  <!-- 首页 -->
  <div class="home">
    <div class="search">
      <!-- 城市定位 -->
      <div class="city" @click="City">
        <div v-if="city !== ''">
          {{city}}
          <span>▼</span>
        </div>
        <div v-else>
          定位中...
          <span>▼</span>
        </div>
      </div>
      <!-- 搜索框 -->
      <div>
        <van-search v-model="value" show-action placeholder="请输入搜索关键词" @focus="showr">
          <template #action v-if="this.show === false">
            <div class="onSearch">搜索</div>
          </template>
          <template #action v-else>
            <div class="onSearch" @click="Cancel">取消</div>
          </template>
        </van-search>
      </div>
    </div>
    <!-- 搜索子组件 -->
    <div v-if="this.show === true">
      <Search :value="value" @history="history"></Search>
    </div>

    <div v-else>
      <div class="comms" ref="comm">
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
  </div>
</template>

<script>
import { Toast } from "vant";
import BScroll from "better-scroll";
import Search from "../components/Search/Search"; //搜索
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
    Search,
    Rotation,
    Cation,
    Recommend,
    Varieties,
    hotSale,
    Navigation
  },
  data() {
    return {
      show: false, //搜索组件
      value: "", //搜索
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
    history(data){
      this.value = data
    },
    // 搜索取消
    Cancel() {
      this.show = false;
    },
    showr() {
      this.show = true;
    },
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
    this.value = this.value

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
        _this.$store.commit("positioning", data.addressComponent.city);
        _this.city = data.addressComponent.city;
      }

      function onError(data) {
        // 定位出错
      }
    });
    // 滑动
    new BScroll(this.$refs.comm, {
      scrollY: true,
      click: true
    });
  },
  watch: {},
  computed: {
    //城市定位
    addressComponent() {
      return this.$store.state.addressComponent;
    }
    //轮播图
    // slides() {
    //   return this.$store.state.slides;
    // },
    //首页分类
    // category() {
    //   return this.$store.state.category;
    // },
    //首页商品推荐
    // recommend() {
    //   return this.$store.state.recommend;
    // },
    //首页热销商品
    // hotGoods() {
    //   return this.$store.state.hotGoods;
    // }
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
  z-index: 999;
  margin-top: -50px;
}
.city {
  width: 78px;
  line-height: 50px;
  margin-left: 10px;
  font-size: 14px;
}
span {
  margin-left: 3px;
}
.van-search {
  height: 50px;
  background-color: #f2f2f2;
}
.onSearch {
  margin-left: 5px;
}
.comms {
  height: 570px;
  background-color: #f2f2f2;
}
.dity {
  margin-top: 50px;
  background-color: #f2f2f2;
}
</style>