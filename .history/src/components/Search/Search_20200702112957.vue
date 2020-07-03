<template>
  <!-- 搜索 -->
  <div class="arr">
    <div>{{value}}</div>
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
        value:''
    };
  },
  methods: {},
  mounted() {
    // this.$api
    //   .search(value)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  watch: {
   value(value){
      this.$api.search(value).then(res => {
        // this.list = res.data.list
        console.log(res);
      }).cacth(err => {
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
</style>