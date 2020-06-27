<template>
  <!-- 分类 -->
  <div>
    <!-- 标题 -->
    <div class="member">商品分类</div>
    <!-- 侧边栏 -->
    <div class="cation van--color">
      <div class="mall">
        <van-sidebar v-model="activeKey">
          <div v-for="(item,index) in arr" :key="index">
            <van-sidebar-item :title="item.mallCategoryName" @click="modity(item,index)" />
          </div>
        </van-sidebar>
      </div>
      <!-- 标签页 -->
      <div v-if="arr[activeKey]" class="activeKey">
        <van-tabs v-model="active" @change="label" line-width="60px">
          <div v-for="(item, index) in arr[activeKey].bxMallSubDto" :key="index">
            <van-tab :title="item.mallSubName" :name="item.mallSubId">
              <!-- 内容 -->
              <div class="content">
                <div v-for="(item,index) in commodity" :key="index" class="image" @click="details(item)">
                  <!-- 图片 -->
                  <img :src="item.image_path" alt />

                  <div class="name">
                    <div class="commodity">{{item.name}}</div>
                    <div class="price">
                      <div class="present">￥{{item.present_price}}</div>
                      <s>￥{{item.orl_price}}</s>
                    </div>
                  </div>
                  
                </div>
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
    //跳详情
    details(item){
      console.log(item)
      // this.$router.push({ name: "Details", query: { id: item.id } });
     
    },
    //侧边栏
    modity(item) {
      this.id = item.bxMallSubDto[0].mallSubId;
      this.getData();
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
      this.id = name;
      console.log(this.id);
      this.getData();
    }
  },
  mounted() {
    this.arr = JSON.parse(sessionStorage.getItem("store")).category;
    this.id = this.arr[0].bxMallSubDto[0].mallSubId;
    this.getData();
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
  position: fixed;
  z-index: 2;
  border-bottom: 1px solid rgb(241, 241, 241);
}
.cation {
  display: flex;
  background: #f7f8fa;
}
img {
  width: 100px;
  border: 1px solid #ccc;
  margin: 20px 0 0 20px;
}
.image {
  display: flex;
  border-bottom: 1px solid rgb(218, 216, 216);
  padding-bottom: 20px;
  background-color: #fff;
}
.name {
  margin: 20px 0 0 20px;
  color: #ff5959;
  width: 147px;
  padding-left: -10px;
}
.price {
  display: flex;
  align-items: center;
  width: 100px;
  margin-top: 13px;
}
s {
  color: #999;
  font-size: 13px;
  margin-left: 10px;
}
.present {
  font-size: 15px;
  font-weight: 700;
}
.mall {
  position: fixed;
  z-index: 2;
  margin-top: 50px;
}
.activeKey {
  position: absolute;
  left: 80px;
  top: 50px;
}
.content{
 padding-top: 50px;
}
.van-sidebar{
   height: 100vh;
  background-color: #F7F8FA;     
 }

</style>