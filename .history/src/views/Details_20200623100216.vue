<template>
<!-- 详情 -->
 <div>

 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
         details:{}
     }
   },
   methods: {

   },
   mounted() {
      this.details = this.$route.query.id;
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>