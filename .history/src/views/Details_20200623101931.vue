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
         list:[],
         goodsOne:[]
     }
   },
   methods: {

   },
   mounted() {
       console.log(this.$route.query.id)
      this.list = this.$route.query.id;
      this.$api.single(this.list).then(res =>{
          this.goodsOne = res
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