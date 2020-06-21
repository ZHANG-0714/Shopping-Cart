<template>
<!-- 休闲食品 -->
 <div>
     <!-- 分类名 -->
         <div class="food">
             <div class="first">1F</div>
             <div>{{floorName.floor1}}</div>
         </div>
    <!-- 内容 -->
    <div>
        
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
       floorName(){
       return this.$store.state.floorName;
    },

   }
 }
</script>

<style scoped lang='scss'>

.food{
    margin-top: 10px;
    color: #E0322B;
    display: flex;
    justify-content: center;
}
.first{
    width: 18px;
    height: 18px;
    font-size: 13px;
    color: #fff;
    border-radius: 15px;
    padding-top: 2px;
    background-color: #E0322B;
    text-align: center;
    margin-right: 5px;
}
</style>