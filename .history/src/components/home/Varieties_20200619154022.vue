<template>
  <!-- 休闲食品 -->
  <div>
  
      <!-- 分类名 -->
      <div class="food">
        <div class="first">1F</div>
        <div>{{}}</div>
      </div>
      <!-- 内容 -->
      <div>

      </div>

  </div>
</template>

<script>
export default {
  name: "",
  props: {
      floorName:{
          type:String
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
</style>