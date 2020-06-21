<template>
<!-- 热销商品 -->
 <div>
     <div class="food">热销商品</div>
     <div v-for="(item,index) in hotGoods" :key="index" class="hotGoods">
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
       hotGoods(){
      return this.$store.state.hotGoods;
    }
   }
 }
</script>

<style scoped lang='scss'>
.food {
  margin-top: 10px;
  color: #e0322b;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
}
.hotGoods{
    width: 50%;
}
</style>