<template>
  <!-- 分类 -->
  <div>
    <!-- 标题 -->
    <div class="member">商品分类</div>
    <!-- 侧边栏 -->
    <div class="cation">
      <div>
        <van-sidebar v-model="activeKey">
          <div v-for="(item,index) in category" :key="index">
            <van-sidebar-item :title="item.mallCategoryName"  @click="modity(item,index)"/>
          </div>
        </van-sidebar>
      </div>
      <!-- 标签页 -->
      <div>
        <van-tabs v-model="active">
            <div v-for="(item, index) in category" :key="index">
              <div v-for="(item1, index1) in item.bxMallSubDto" :key="index1">
                <van-tab :title="item1.mallSubName">内容 4</van-tab>
              </div>
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
      active: 2,
      id:"",
      commodity:''//商品数据
    };
  },
  methods: {
    modity(item){
      // console.log(item)
      this.categoryitem = item;
       this.id = this.categoryitem.bxMallSubDto[0].mallSubId;
      //  console.log(this.id)
       this.$api.classification(this.id)
       .then(res =>{
         this.commodity = res
         console.log(this.commodity)
       })
       .catch(err => {
          console, log(err);
        });
    }
  },
  mounted() {
    console.log(this.$store.state.category);
  },
  watch: {},
  computed: {
    category() {
      return this.$store.state.category;
    }
  }
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
.cation{
  display: flex;
}
</style>