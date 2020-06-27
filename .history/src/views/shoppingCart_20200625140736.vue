<template>
<!-- 购物车 -->
 <div>
   <!-- 标题 -->
    <div class="member">商品分类</div>
     
     <Navigation></Navigation>
 </div>
</template>

<script>
import Navigation from "../components/Navigation/Navigation"; //底部导航

 export default {
   name: '',
   props: {
   },
   components: {
       Navigation
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

   }
 }
</script>

<style scoped lang='scss'>
.member {
  width: 100%;
  line-height: 50px;
  text-align: center;
  background: #fff;
  position: fixed;
  z-index: 2;
  border-bottom: 1px solid rgb(241, 241, 241);
}
</style>