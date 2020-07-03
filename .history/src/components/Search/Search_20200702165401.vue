<template>
  <!-- 搜索 -->
  <div class="arr">
    <!-- 判断搜索有对应商品时，显示商品列表 -->
    <div v-if="this.value !== '' ">
      <!-- 判断搜索有对应商品时，显示商品信息 -->
      <div v-if="this.list.length > 0 ">
        <div v-for="(item,index) in list" :key="index" class="list" @click="details(item)">
          <img :src="item.image_path" alt class="img" />
          <!-- 关键字高亮 -->
          <div class="name">
            <a class="text">
              <span>
                {{
                item.name.slice(
                0,
                item.name.toLowerCase().indexOf(value.toLowerCase())
                )
                }}
              </span>
              <span style="color:#fe1706">
                {{
                item.name.slice(
                item.name.toLowerCase().indexOf(value.toLowerCase()),
                item.name.toLowerCase().indexOf(value.toLowerCase()) +
                value.length
                )
                }}
              </span>
              <span>
                {{
                item.name.substr(
                item.name.toLowerCase().indexOf(value.toLowerCase()) +
                value.length
                )
                }}
              </span>
            </a>
          </div>
        </div>
      </div>
      <!-- 判断搜索没有对应商品时，显示商品暂时还没有 -->
      <div v-else class="record">您搜索的商品暂时还没有呦 ~ ~</div>
    </div>
    <!-- 判断搜索没有对应商品时，显示搜索历史 -->
    <div v-else class="search">
      <div class="user">
        <div class="icon">搜索历史</div>
        <van-icon name="delete" @click="Delete" />
      </div>
<!-- 删除所有搜索记录，没删除时显示历史记录 -->
      <div class="items" v-if="this.record.length > 0">
        <div v-for="item in record" :key="item.id" class="crux">
          <div class="comm">{{item}}</div>
          <div class="cross">
            <van-icon name="cross" size="10px" @click="single" />
          </div>
        </div>
      </div>
<!-- 删除所有搜索记录，删除时显示没有搜索 -->
      <div v-else class="null">亲，暂时还没有搜索记录呦 ！</div>
    </div>
  </div>
</template> 

<script>
// lodash的去重
import uniqWith from "lodash/uniqWith";
import isEqual from "lodash/isEqual";
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
      list: "",
      record: []
    };
  },
  methods: {
    //跳详情
    details(item) {
      this.$router.push({ name: "Details", query: { id: item.id } });
      this.$utils.history(this.value);
    },
    //全部删除
    Delete() {
      this.$dialog
        .confirm({
          title: "删除",
          message: "是否删除全部搜索记录"
        })
        .then(() => {
          localStorage.removeItem(record);
          localStorage.setItem("record", JSON.stringify(this.record));
        })
        .catch(() => {});
    },
    single() {
      this.$dialog
        .confirm({
          title: "删除",
          message: "是否删除当前记录"
        })
        .then(() => {})
        .catch(() => {});
    }
  },
  mounted() {
    // 本来存的JSON对象，JSON.parse转回来
    this.record = JSON.parse(localStorage.getItem("record"));
    console.log(this.record);
    //去重
    this.record = uniqWith(this.record, isEqual);
  },
  watch: {
    value(val) {
      this.$api
        .search(val)
        .then(res => {
          this.list = res.data.list;
          console.log(this.list);
        })
        .catch(err => {
          console.log(err);
        });
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
.list {
  display: flex;
  align-items: center;
  margin-top: 7px;
  padding-bottom: 7px;
  border-bottom: 1px solid rgb(231, 231, 231);
}
.img {
  width: 90px;
  margin-left: 20px;
}
.name {
  width: 210px;
  margin-left: 20px;
}
.record {
  text-align: center;
  margin-top: 30px;
}
.search {
  margin-left: 20px;
}
.items {
  display: flex;
  margin-top: 20px;
}
.crux {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-right: 10px;
  background: #76c4de;
  color: #fff;
  border-radius: 10px;
}
.user {
  display: flex;
}
.icon {
  flex: 1;
}
.van-icon {
  margin-right: 30px;
}
.cross {
  width: 5%;
  margin-left: 5px;
}
.null{
    margin-top: 20px;
}
</style>