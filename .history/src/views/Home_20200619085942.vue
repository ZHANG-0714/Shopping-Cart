<template>
<!-- 首页 -->
  <div>
    <Rotation></Rotation>
   

  </div>
</template>

<script>
import Rotation from "../components/home/Rotation"

export default {
  name: "",
  props: {},
  components: {
    Rotation,
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