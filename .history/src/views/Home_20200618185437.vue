<template>
<!-- 首页 -->
  <div>
    <div class="search">

        <!-- 城市定位 -->
        <div class="city" @click="City">{{city}}  <span>▼</span></div>
        <!-- 搜索框 -->
        <!-- <div>
          <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch">
            <template #action>
              <div @click="onSearch" class="onSearch">搜索</div>
            </template>
          </van-search>
        </div> -->

    </div>

  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      city: ""
    };
  },
  methods: {
    // 城市定位
    City(){
      this.$router.push('City')
    }
  },
  mounted() {
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
  computed: {}
};
</script>

<style scoped lang='scss'>
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
span{
  margin-left: 3px;
}
.van-search{
  height: 50px;
  background-color: #F2F2F2;
}
.onSearch{
  margin-left: 10px;
}
</style>