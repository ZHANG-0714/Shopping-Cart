<template>
  <!-- 轮播图 -->
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in this.$store" :key="index">
        <img v-lazy="slides" />
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
  methods: {},
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
</style>