<template>
<!-- 城市列表 -->
 <div class="list">
   <div class="city">
     <van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
     <div>城市列表</div>
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