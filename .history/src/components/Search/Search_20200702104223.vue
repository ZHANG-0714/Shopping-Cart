<template>
<!-- 搜索 -->
 <div class="arr">
fsda
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
       this.$api.search().then(res =>{
           console.log(res);
       }).catch(err =>{
           console.log(err);
       })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.arr{
    background: #fff;
    margin-top: 50px;
}
</style>