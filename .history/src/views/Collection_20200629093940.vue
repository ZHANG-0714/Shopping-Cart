<template>
<!-- 收藏 -->
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

     }
   },
   methods: {

   },
   mounted() {
       this.$api
       .collection()
       .then(res =>{
           console.log(res)
       })
       .catch(err => {
        console.log(err);
      });

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>