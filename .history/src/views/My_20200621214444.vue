<template>
<!-- 我的 -->
 <div>
     <div>
         <!-- 标题 -->
         <div class="member">会员中心</div>
     </div>

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
.member{
    width: 100%;
    line-height: 50px;
    text-align: center;
    background: #fff;
}

</style>