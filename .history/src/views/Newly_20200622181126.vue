<template>
  <!-- 新增地址 -->
  <div>
      <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="新増地址" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import areaList from "../sib/area"
import { Toast } from 'vant';

export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
          areaList,
      searchResult: [],
      content:[]
    };
  },
  methods: {
       // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    },
      onSave(content) {
        this.content = this.content
        console.log(this.content)
      this.$api.address({ name, tel, address, isDefault, province, city, county, addressDetail, areaCode, id }).then(res =>{
          console.log(res)
      })
       .catch(err => {
          console, log(err);
        });
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {},
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>