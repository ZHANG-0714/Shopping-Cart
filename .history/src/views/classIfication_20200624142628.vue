<template>
  <!-- 分类 -->
  <div>
    <!-- 标题 -->
    <div class="member">商品分类</div>
    <!-- 侧边栏 -->
    <div class="cation">
      <div>
        <van-sidebar v-model="activeKey">
          <div v-for="(item,index) in arr" :key="index">
            <van-sidebar-item :title="item.mallCategoryName" @click="modity(item,index)" />
          </div>
        </van-sidebar>
      </div>
      <!-- 标签页 -->
      <div v-if="arr[activeKey]">
        <van-tabs v-model="active" @change="label">
          <div v-for="(item, index) in arr[activeKey].bxMallSubDto" :key="index">
            <van-tab :title="item.mallSubName" :name='item.mallSubId'>
              <div v-for="(item,index) in commodity" :key="index">
                <img :src="item.image_path" alt />
              </div>
            </van-tab>
          </div>
        </van-tabs>
      </div>
    </div>

    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from "../components/Navigation/Navigation"; //底部导航

export default {
  name: "",
  props: {},
  components: {
    Navigation
  },
  data() {
    return {
      activeKey: 0,
      active: 0,
      arr: [],
      id: "",
      commodity: "" //商品数据
    };
  },
  methods: {
    //侧边栏
    modity(item) {
      this.id = item.bxMallSubDto[0].mallSubId;
      this.getData()
      
    },
    getData() {
      this.$api
        .classification(this.id)
        .then(res => {
          this.commodity = res.dataList;
          console.log(this.commodity);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 标签页
    label(name) {
      console.log(name)
    }
  },
  mounted() {
    this.arr = JSON.parse(sessionStorage.getItem("store")).category
      this.id = this.arr[0].bxMallSubDto[0].mallSubId
    this.getData()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.member {
  width: 100%;
  line-height: 50px;
  text-align: center;
  background: #fff;
  border-bottom: 1px solid rgb(241, 241, 241);
}
.cation {
  display: flex;
}
img {
  width: 100px;
}
.van-tab {
  width: 70px;
}
</style>