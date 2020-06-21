<template>
  <!-- 休闲食品 -->
  <div>
    <!-- 分类名 -->
    <div class="food">
      <div class="first">{{cation}}</div>
      <div>{{floorName}}</div>
    </div>
    <!-- 内容 -->
    <div class="floor">
      <div class="content">
        <div v-for="item in floor.slice(0,1)" :key="item.id">
          <img :src="item.image" alt class="imgs" />
        </div>

        <div class="floors">
          <div v-for="item in floor.slice(1,2)" :key="item.id" class="imgr">
            <img :src="item.image" alt class="imgr" />
          </div>
          <div v-for="item in floor.slice(2,3)" :key="item.id">
            <img :src="item.image" alt class="imgr" />
          </div>
        </div>
      </div>

      <div class="content">
        <div v-for="item in floor.slice(3,4)" :key="item.id">
          <img :src="item.image" alt class="imgr" />
        </div>
        <div v-for="item in floor.slice(4,5)" :key="item.id">
          <img :src="item.image" alt class="imgr" />
        </div>
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
  width: 187.5px;
  height: 200px;
}
.imgr {
  width: 187.5px;
  height: 100px;
  border: 0.5px solid #f2f2f2;
}
.content {
  display: flex;
  height: 200px;
}
.floors {
  height: 200px;
}
.floor {
  height: 300px;
}
</style>