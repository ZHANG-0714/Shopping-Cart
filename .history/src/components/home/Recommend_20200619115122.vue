<template>
  <!-- 商品推荐 -->
  <div>
    <div class="commodity">
      <div>商品推荐</div>

      <div ref="wrapper">  <!-- 这里是父盒子 -->
          <div class="recommend" ref="cont"> <!-- 这里是子盒子，即滚动区域 -->
        <div v-for="(item,index) in recommend" :key="index">
          <div>
            <img :src="item.image" alt class="img" />
          </div>
          <div class="name">{{item.goodsName}}</div>
        </div>
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
      pictureScroll(){
          let width = this.recommend.length * 110// 动态计算出滚动区域的大小，前面已经说过了，产生滚动的原因是滚动区域宽度大于父盒子宽度
      this.$refs.cont.style.width = width + '100px'  // 修改滚动区域的宽度
          this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: true,  // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
            click: true,
            scrollX: true,
            // 忽略竖直方向的滚动
            scrollY: false,
            eventPassthrough: 'vertical'
          })
        } else {
          this.scroll.refresh() //如果dom结构发生改变调用该方法
        }
            
    })
  }
      
  },
  mounted() {},
  created() {
    this.$nextTick(() => {
      this.pictureScroll();
    });
  },
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