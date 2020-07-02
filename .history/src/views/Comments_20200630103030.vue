<template>
<!-- 查看评价 -->
 <div>

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
         see:[]
     }
   },
   methods: {

   },
   mounted() {
    this.see = this.$route.query.item;
    console.log(this.see);

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>