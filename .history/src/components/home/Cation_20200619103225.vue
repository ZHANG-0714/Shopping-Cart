<template>
<!--首页的 分类 -->
 <div>
     <div class="home">
         <div  v-for="(item,index) in category" :key="index" class="category">
             <img :src="item.image" alt="" class="img">
             <div>{{item.mallCategoryName}}</div>
         </div>

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
        category(){
      return this.$store.state.category;
    }
   }
 }
</script>

<style scoped lang='scss'>
.home{
    width: 95%;
    height: 100px;
    border-radius: 10px;
    margin: 10px auto;
    background-color: #fff;
    display: flex;
    align-items: center;
}
.img{
    width: 50px;
    height: 50px;
    text-align: center;
}
.category{
    font-size: 13px;
    margin-left: 17px;
}

</style>