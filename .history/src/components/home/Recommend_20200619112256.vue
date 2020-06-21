<template>
  <!-- 商品推荐 -->
  <div>
    <div class="commodity">
      <div>商品推荐</div>

      <div class="recommend" ref="wrapper">
        <div v-for="(item,index) in recommend" :key="index">
          <div>
            <img :src="item.image" alt class="img" />
          </div>
          <div class="name">{{item.goodsName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "",
  props: {
  },
  components: {},
  data() {
    return {};
  },
  methods: {
      wrapper(){
          this.$nextTick(() => {
      let timer = setTimeout(() => { // 其实我也不想写这个定时器的，这相当于又嵌套了一层$nextTick，但是不这么写会失败
        if (timer) {
          clearTimeout(timer)
          this.verScroll()
        }
      }, 0)
    })
  }
      }
  },
  mounted() {},
  watch: {},
  computed: {
    recommend() {
      return this.$store.state.recommend;
    }
  }
};
</script>

<style scoped lang='scss'>
.commodity {
  width: 100%;
  height: 200px;
  margin-top: 20px;
  background-color: #fff;
}
.recommend {
  display: flex;
}
.img {
  width: 80px;
  height: 100px;
}
.name {
    //多余的隐藏
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100px;
}
</style>