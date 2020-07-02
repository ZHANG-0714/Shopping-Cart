<template>
<!--首页的 分类 -->
 <div>
     <div class="home">
         <div  v-for="(item,index) in category" :key="index" class="category">
             <img :src="item.image" alt="" class="img" @click="cation(item,index)">
             <div>{{item.mallCategoryName}}</div>
         </div>


     </div>

       <img src="http://images.baixingliangfan.cn/advertesPicture/20180404/20180404085441_850.gif" alt="" class="src">

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
     cation(index){
       this.$router.push({name:'classIfication',query:{id:index}})
     }
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
    margin-left: 16px;
}
.src{
    width: 100%;
}
</style>