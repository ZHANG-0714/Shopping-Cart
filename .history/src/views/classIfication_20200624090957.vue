<template>
  <!-- 分类 -->
  <div>
    <div>
      <van-sidebar v-model="activeKey">
        <div v-for="(item,index) in category" :key="index">
          <van-sidebar-item :title = "item.mallCategoryName" />
        </div>
      </van-sidebar>
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
    };
  },
  methods: {},
  mounted() {
    console.log(this.$store.state.category)
  },
  watch: {},
  computed: {
    category(){
      return this.$store.state.category;
    }
  }
};
</script>

<style scoped lang='scss'>
</style>