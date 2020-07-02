<template>
<!-- 最近浏览 -->
 <div>
     <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="最近浏览" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <div v-for="(item,index) in views" :key="index">
      <img :src="item.image_path" alt="" class="img">
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
         views:[]
     }
   },
   methods: {
       // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    },
   },
   mounted() {
       // 本来存的JSON对象，JSON.parse转回来
    this.views = JSON.parse(localStorage.getItem("views"));
    console.log(this.views);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.city {
  border-bottom: 1px solid rgb(241, 241, 241);
}
.img{
  width: 90px;
  height: 90px;
}
</style>