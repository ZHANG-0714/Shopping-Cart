<template>
<!-- 评价中心 -->
 <div>
     <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="评价中心" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <div class="user">
        <img :src="user.image_path" alt="" class="img">
        <div class="commodity">
            <div>商品评分</div>
            <van-rate v-model="value" allow-half void-icon="star" void-color="#eee" />
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
         user:[],
         value: 2.5,
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
.user{
    display: flex;
    margin-top: 20px;
}
.img{
    width: 90px;
    height: 90px;
    margin-left: 20px;
}
.commodity{
    margin-left: 30px;
}
.van-rate{
    margin-top: 40px;
}
</style>