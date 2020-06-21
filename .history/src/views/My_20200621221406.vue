<template>
<!-- 我的 -->
 <div>
     <div>
         <!-- 标题 -->
         <div class="member">会员中心</div>
         <!-- 头像 -->
         <div class="user">
             <div class="setting"><van-icon name="setting" color="#fff" size="20px"/></div>
             <div class="head">
                 <img src="../assets/3.png" alt="" class="portrait">
             </div>
         </div>
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
.user{
    width: 100%;
    height: 250px;
    background: lightblue;
}
.setting{
    text-align: right;
    margin-right: 20px;
    padding-top: 10px;
}
.head{
    width: 100%;
    
}
.portrait{
    width: 70px;
    height: 70px;
    margin: 0 auto;
}
</style>