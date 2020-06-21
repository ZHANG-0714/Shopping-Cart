<template>
<!-- 城市列表 -->
 <div class="list">
   <div class="city">
     <van-nav-bar
  title="城市列表"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
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

   }
 }
</script>

<style scoped lang='scss'>
.list{
  width: 100%;
  height: 100vh;
  background-color: #F2F2F2;
}
.city{
  width: 100%;
  height: 50px;
  background-color: #fff;
}
</style>