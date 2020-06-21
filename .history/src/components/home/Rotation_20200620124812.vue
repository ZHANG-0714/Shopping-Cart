<template>
  <!-- 轮播图 -->
  <div>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <p>刷新次数: {{ count }}</p>
</van-pull-refresh>

    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in slides" :key="index">
        <img v-lazy="item.image" class="img"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
       count: 0,
      isLoading: false,
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
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