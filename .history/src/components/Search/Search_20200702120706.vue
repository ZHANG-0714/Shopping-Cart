<template>
  <!-- 搜索 -->
  <div class="arr">
    <div v-for="(item,index) in list" :key="index" class="list">
        <img :src="item.image_path" alt="" class="img">
        <div class="name">
            <a class="text">
              <span>{{
                item.name.slice(
                  0,
                  item.name.toLowerCase().indexOf(value.toLowerCase())
                )
              }}</span
              ><span style="color:#fe1706">{{
                item.name.slice(
                  item.name.toLowerCase().indexOf(value.toLowerCase()),
                  item.name.toLowerCase().indexOf(value.toLowerCase()) +
                    value.length
                )
              }}</span
              ><span>{{
                item.name.substr(
                  item.name.toLowerCase().indexOf(value.toLowerCase()) +
                    value.length
                )
              }}</span>
            </a>
        </div>

        
        <!-- <div class="name">{{item.name}}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    value: {
      type: String
    }
  },
  components: {},
  data() {
    return {
        list:''
    };
  },
  methods: {},
  mounted() {
  },
  watch: {
   value(val){
      this.$api.search(val).then(res => {
        this.list = res.data.list
        console.log(this.list);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.arr {
  background: #fff;
  margin-top: 50px;
  padding-top: 10px;
  
}
.list{
    display: flex;
    align-items: center;
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(224, 224, 224);
}
.img{
    width: 90px;
    margin-left: 20px;
    border: 1px solid #ccc;
}
.name{
    flex: 2;
    margin-left: 20px;
}
</style>