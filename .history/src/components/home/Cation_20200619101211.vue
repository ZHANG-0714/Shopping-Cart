<template>
<!--首页的 分类 -->
 <div>
     <div class="home" v-for="(item,index) in category" :key="index">
         <img :src="item.image" alt="">

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
    width: 95%;
    height: 120px;
    border-radius: 15px;
    margin: 10px auto;
    background-color: #fff;
}

</style>