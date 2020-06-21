<template>
<!-- 商品推荐 -->
 <div>
     <div class="commodity">
         <div>商品推荐</div>

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
       recommend(){
       return this.$store.state.recommend;
    }
   }
 }
</script>

<style scoped lang='scss'>
.commodity{
    width: 100%;
    height: 200px;
    margin-top: 20px;
    background-color: #fff;
}

</style>