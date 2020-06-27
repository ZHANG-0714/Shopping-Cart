<template>
  <!-- 分类 -->
  <div>
    <div>
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
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
  mounted() {},
  watch: {},
  computed: {
    category(){
      console.log(this.$store.state.category)
      return this.$store.state.category;
    }
  }
};
</script>

<style scoped lang='scss'>
</style>