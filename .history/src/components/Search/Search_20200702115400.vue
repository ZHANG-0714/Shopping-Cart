<template>
  <!-- 搜索 -->
  <div class="arr">
    <div v-for="(item,index) in list" :key="index" class="list">
        <img :src="item.image_path" alt="" class="img">
        <div>{{item.name}}</div>
    </div>
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
        list:''
    };
  },
  methods: {},
  mounted() {
  },
  watch: {
   value(val){
      this.$api.search(val).then(res => {
        this.list = res.data.list
        console.log(this.list);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.arr {
  background: #fff;
  margin-top: 50px;
}
.list{
    height: 100px;
    display: flex;
    border-bottom: 1px solid #ccc;
}
.img{
    width: 90px;
    height: 90px;
    border: 1px solid #ccc;
}
</style>