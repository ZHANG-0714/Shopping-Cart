<template>
  <!-- 休闲食品 -->
  <div>
    <!-- 分类名 -->
    <div class="food">
      <div class="first">{{cation}}</div>
      <div>{{floorName}}</div>
    </div>
    <!-- 内容 -->
    <div>
      <div v-for="(item,index) in floor.slice(0,1)" :key="index">
        <img :src="item.image" alt class="imgs" />
      </div>
      <div v-for="(item,index) in floor.slice(1,2)" :key="index">
           <img :src="item.image" alt class="imgs" />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "",
  props: {
    floorName: {
      type: String
    },
    floor: {
      type: Array
    },
    cation: {
      type: String
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.food {
  margin-top: 10px;
  color: #e0322b;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.first {
  width: 18px;
  height: 18px;
  font-size: 13px;
  color: #fff;
  border-radius: 15px;
  padding-top: 2px;
  background-color: #e0322b;
  text-align: center;
  margin-right: 5px;
}
.imgs {
  width: 200px;
  height: 200px;
}
</style>