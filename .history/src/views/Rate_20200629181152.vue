<template>
<!-- 评价中心 -->
 <div>
     <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="评价中心" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <div>
        <img :src="user.image_path" alt="" class="img">
        <div>商品平分</div>
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
         user:[]
     }
   },
   methods: {
       // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    },
   },
   mounted() {
       this.user = this.$route.query.item
       console.log(this.user)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.city {
  width: 100%;
  border-bottom: 1px solid rgb(241, 241, 241);
}
.img{
    width: 90px;
    height: 90px;
}
</style>