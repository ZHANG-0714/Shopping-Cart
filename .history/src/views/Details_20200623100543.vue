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
         id:{}
     }
   },
   methods: {

   },
   mounted() {
      this.id = this.$route.query.id.goodsId;
      this.$api.single(id).then(res =>{
          console.log(res)
      })
      .catch(err =>{
          console.log(err)
      })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>