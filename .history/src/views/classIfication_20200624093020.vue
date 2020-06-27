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
            <van-sidebar-item :title="item.mallCategoryName" />
          </div>
        </van-sidebar>
      </div>
      <!-- 标签页 -->
      <div>
        <van-tabs v-model="active">
    
            <van-tab
          v-for="(item, index) in category.categoryitem.bxMallSubDto"
          :key="item.id"
          :title="item.mallSubName"
          ><div
            v-for="(item, index) in Navigation.dataList"
            :key="index"
            class="commodity"
          >
            <!--          图片-->
            <div class="imgdiv">
              <img :src="item.image" alt="" class="image" />
            </div>
            <!--          价格-->
            <div class="price">
              <div class="price_name">{{ item.name }}</div>
              <div class="money">
                <span class="price_orl">￥{{ item.orl_price }}</span>
                <s>{{ item.present_price }}</s>
              </div>
            </div>
          </div>
        </van-tab>

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
    };
  },
  methods: {},
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