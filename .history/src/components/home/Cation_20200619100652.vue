<template>
<!--首页的 分类 -->
 <div>
     <div class="home">

     </div>

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

   },
   watch: {

   },
   computed: {
        Category(){
      return this.$store.state.category;
    }
   }
 }
</script>

<style scoped lang='scss'>
.home{
    width: 90%;
    height: 120px;
}

</style>