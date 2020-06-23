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
       console.log(this.$route.query.id)
      this.id = this.$route.query.id;
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