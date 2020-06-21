<template>
<!-- 首页 -->
  <div>
    <Search></Search>
   

  </div>
</template>

<script>
import Search from "../components/home/Search"

export default {
  name: "",
  props: {},
  components: {
    Search,
  },
  data() {
    return {
      city: ""
    };
  },
  methods: {
    
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>

</style>