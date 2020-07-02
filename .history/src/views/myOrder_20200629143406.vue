<template>
<!-- 全部订单 -->
 <div>
     <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="我的订单" left-text left-arrow @click-left="onClickLeft" />
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
         order:[]
     }
   },
   methods: {
       // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    },
   },
   mounted() {
       //我的订单
       this.$api.getMyOrder()
       .then(res =>{
           this.order = res.list
           console.log(this.order)
       })
       .catch(err => {
          console.log(err);
        });
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
</style>