<template>
  <!-- 轮播图 -->
  <div>
    <van-swipe :autoplay="3000" @click="details(item)">
      <van-swipe-item v-for="(item, index) in slides" :key="index">
        <img v-lazy="item.image" class="img"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    details(item){
      console.log(item)
    }
  },
  mounted() {},
  watch: {},
  computed: {
    slides() {
      return this.$store.state.slides;
    }
  }
};
</script>

<style scoped lang='scss'>
.img{
  width: 100%;
  height: 170px;
}
</style>