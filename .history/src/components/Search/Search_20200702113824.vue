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
</style>