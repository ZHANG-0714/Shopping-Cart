<template>
  <!-- 城市列表 -->
  <div class="van--color list">
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="城市列表" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 搜索框 -->
    <van-search v-model="value" placeholder="请输入搜索关键字" />
<!-- 当前城市 -->
    <div class="current">当前城市</div>
    <div class="now">
      <div>{{addressComponent}}</div>
    </div>
<!-- 热门城市 -->
    <div class="currens">热门城市</div>
    <div class="hot">
      <div class="beijing">
        <div v-for="(item,index) in datar" :key="index">{{item.name}}</div>
      </div>
    </div>
<!-- 城市排列 -->
    <van-index-bar :index-list="msg">
      <div v-for="(item,index) in msg" :key="index">
        <van-index-anchor :index="item" />
        <van-cell v-for="item1 in datas[item]" :key="item1.id" :title="item1.name" />
      </div>
    </van-index-bar>

  </div>
</template>

<script>
import city from '../../sib/city'

export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      city: city,
      msg:[],
      datas:[], 
      datar:[], 
      data:'',
      citys:null
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.datas = this.city.data.cities;
    // console.log(this.city.data.cities)
    this.datar = this.city.data.hotCities;
    let keys = Object.keys(this.city.data.cities);
    this.msg = keys;
  },
  watch: {
    value(val){
      console.log(this.datar);
      this.msg = this.msg.filter((item) =>{
        return JSON.stringify(item).indexOf(val) !==-1
      })
    }
  },
  computed: {
    //城市定位
    addressComponent(){
      return this.$store.state.addressComponent;
    },
  }
};
</script>

<style scoped lang='scss'>
.list {
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
}
.city {
  width: 100%;
  height: 50px;
  background-color: #fff;
}
.van-search {
  background-color: #f2f2f2;
}
.current {
  margin: 0 0 10px 10px;
}
.currens {
  margin: 10px 0 10px 10px;
}
.now {
  width: 100%;
  height: 43px;
  background-color: #fff;
  padding-top: 15px;
}
.now>div{
  width: 105px;
  line-height: 26px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-left:10px;
}
.hot {
  width: 100%;
  height: 85px;
  background-color: #fff;
}
.beijing {
  display: flex;
  flex-wrap: wrap;
}
.beijing > div {
  width: 105px;
  line-height: 26px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 10px 0 0 10px;
}
</style>