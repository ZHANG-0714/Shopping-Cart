<template>
  <!-- 休闲食品 -->
  <div>
  
      <!-- 分类名
      <div class="food">
        <div class="first">1F</div>
        <div>{{floorName}}</div>
      </div> -->
      <!-- 内容 -->
      <div v-for="(item,index) in floor" :key="index">
          <img :src="item.image" alt="">

      </div>

  </div>
</template>

<script>
export default {
  name: "",
  props: {
      floorName:{
        type:String
      },
      floor:{
        type:Array
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

</style>