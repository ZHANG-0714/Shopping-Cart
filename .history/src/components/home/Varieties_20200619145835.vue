<template>
<!-- 休闲食品 -->
 <div>
     
         <div class="food">
             <div class="first">1F</div>
             <div>{{floorName.floor1}}</div>
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
    background-color: #E0322B;
}
</style>