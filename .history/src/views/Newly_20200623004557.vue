<template>
  <!-- 编辑地址 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="新増地址" left-text left-arrow @click-left="onClickLeft" />
    </div>

    <van-address-edit
      :area-list="areaList"
      :address-info="addressinfo"
      show-postal
      show-delete
      show-set-default
      show-search-result
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import areaList from "../sib/area";
import { Toast } from "vant";

export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      areaList,
      searchResult: [],
      content: {},
      addressinfo:{}
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    },
    onSave(content) {
    //   this.content = kjj;
      console.log(content);
      this.$api
        .address({
          name: content.name,
          tel:content.tel,
          address:content.address,
          isDefault:content.isDefault,
          province:content.province,
          city:content.city,
          county:content.county,
          addressDetail:content.addressDetail,
          areaCode:content.areaCode,
          id:content.id
        })
        .then(res => {
        this.$router.push("Address");
          console.log(res);
        })
        .catch(err => {
          console, log(err);
        });
    },
    onDelete(val) {
        this.$api.deleteAddress(val._id).then(res =>{
            console.log(res)
            this.$router.push("Address");
        })
        .catch(err => {
          console, log(err);
        });
      
    },
    onChangeDetail(val) {}
  },
  mounted() {
       this.addressinfo = this.$route.query.id;
       console.log(this.addressinfo)
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>