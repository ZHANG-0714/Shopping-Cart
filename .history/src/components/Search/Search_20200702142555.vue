<template>
  <!-- 搜索 -->
  <div class="arr">
       <!-- 判断搜索记录存在时 -->
    <div v-if="this.list.length > 0 ">
      <div v-for="(item,index) in list" :key="index" class="list" @click="details(item)">

        <img :src="item.image_path" alt class="img" />
        <!-- 关键字高亮 -->
        <div class="name">
          <a class="text">
            <span>
              {{
              item.name.slice(
              0,
              item.name.toLowerCase().indexOf(value.toLowerCase())
              )
              }}
            </span>
            <span style="color:#fe1706">
              {{
              item.name.slice(
              item.name.toLowerCase().indexOf(value.toLowerCase()),
              item.name.toLowerCase().indexOf(value.toLowerCase()) +
              value.length
              )
              }}
            </span>
            <span>
              {{
              item.name.substr(
              item.name.toLowerCase().indexOf(value.toLowerCase()) +
              value.length
              )
              }}
            </span>
          </a>
        </div>
      </div>
    </div>
    <!-- 判断搜索记录没有时 -->
    <div v-else class="record">您搜索的商品暂时还没有呦 ~ ~</div>
  </div>
</template> 

<script>
export default {
  name: "",
  props: {
    value: {
      type: String
    }
  },
  components: {},
  data() {
    return {
      list: ""
    };
  },
  methods: {
      details(){
          this.$router.push({ name: "Details", query: { id: item.goodsId } });
      this.$utils.addViews(item)
      }
  },
  mounted() {},
  watch: {
    value(val) {
      this.$api
        .search(val)
        .then(res => {
          this.list = res.data.list;
          console.log(this.list);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.arr {
  background: #fff;
  margin-top: 50px;
  padding-top: 10px;
}
.list {
  display: flex;
  align-items: center;
  margin-top: 7px;
  padding-bottom: 7px;
  border-bottom: 1px solid rgb(231, 231, 231);
}
.img {
  width: 90px;
  margin-left: 20px;
}
.name {
  width: 210px;
  margin-left: 20px;
}
.record{
    text-align: center;
    margin-top: 30px;
}
</style>