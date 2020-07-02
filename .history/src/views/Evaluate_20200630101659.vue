<template>
  <!-- 评价 -->
  <div class="van--tabbar--top">
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="评价中心" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <img src="../assets/evaluate.jpg" alt class="img" />

    <van-tabs v-model="active">
      <van-tab title="待评价">
        <!-- 待评价 -->
        <div v-for="(item,index) in evaluate" :key="index" class="index">
          <img :src="item.image_path" alt class="path" />
          <div>
            <div class="name">{{item.name}}</div>

            <div class="comment" @click="evaluat(item)">
              <van-icon name="chat" color="#FF0000" />评论晒单
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="已评价">
        <!-- 已评价 -->
        <div v-for="(item,index) in evaluated" :key="index">
          <div v-for="item1 in item.goods" :key="item1.id" class="index">
            <img :src="item1.image_path" alt class="path" />

            <div>
              <div class="name">{{item1.name}}</div>

              <div class="comments" @click="evaluat(item)">
                <van-icon name="chat" color="#FF0000" />查看评价
              </div>
            </div>
          </div>
        </div>

      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      active: 0,
      evaluate: [],
      evaluated: []
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    },
    evaluat(item) {
      this.$router.push({ name: "Rate", query: { item: item } });
    }
  },
  mounted() {
    // 待评价
    this.$api
      .tobeEvaluated()
      .then(res => {
        this.evaluate = res.data.list;
        console.log(this.evaluate);
      })
      .catch(err => {
        console, log(err);
      });
    // 已评价
    this.$api
      .alreadyEvaluated()
      .then(res => {
        this.evaluated = res.data.list;
        console.log(this.evaluated);
      })
      .catch(err => {
        console, log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.city {
  width: 100%;
  border-bottom: 1px solid rgb(241, 241, 241);
}
.img {
  width: 100%;
  position: relative;
}
.path {
  width: 90px;
  height: 90px;
  margin-left: 40px;
}
.index {
  height: 110px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(236, 236, 236);
}
.name {
  margin-left: 10px;
  width: 80%;
  height: 30px;
}
.comment {
  width: 90px;
  line-height: 25px;
  text-align: center;
  font-size: 14px;
  color: #ff0000;
  border: 1px solid #ff0000;
  border-radius: 15px;
  margin-top: 20px;
  margin-left: 130px;
}
.comments{
  width: 90px;
  line-height: 25px;
  text-align: center;
  font-size: 14px;
  color: #ccc;
  border: 1px solid #ccc;
  border-radius: 15px;
  margin-top: 20px;
  margin-left: 130px;
}
</style>