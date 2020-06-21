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
  list-style: none;
      // overflow-x: scroll;  
      white-space: nowrap;
      font-size: 12px;
      text-align: center;
      padding-right: .24rem;
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