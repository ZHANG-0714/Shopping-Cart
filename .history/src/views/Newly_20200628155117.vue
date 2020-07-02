<template>
  <!-- 编辑地址 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="编辑地址" left-text left-arrow @click-left="onClickLeft" />
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
      addressinfo: {},
      address: []
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    },
    //新増地址  修改地址
    onSave(content) {
      //   this.content = kjj;
      console.log(content);
      this.$api
        .address({
          name: content.name,
          tel: content.tel,
          address:
            content.province +
            content.city +
            content.county +
            content.addressDetail,
          isDefault: content.isDefault,
          province: content.province,
          city: content.city,
          county: content.county,
          addressDetail: content.addressDetail,
          areaCode: content.areaCode,
          id: content._id
        })
        .then(res => {
          // if (res.code === 200) {
          //   this.$api
          //     .deleteAddress(content._id)
          //     .then(res => {
          //       console.log(res);
          //       this.$router.push("Address");
          //     })
          //     .catch(err => {
          //       console.log(err);
          //     });
          // }
          this.$router.push("Address");
          console.log(res);
        })
        .catch(err => {
          console, log(err);
        });
    },
    //删除地址
    onDelete(val) {
      this.$api
        .deleteAddress(val._id)
        .then(res => {
          console.log(res);
          this.$router.push("Address");
        })
        .catch(err => {
          console, log(err);
        });
    },
    onChangeDetail(val) {}
  },
  mounted() {
    //用户初始地址
    this.addressinfo = this.$route.query.id;
    console.log(this.addressinfo);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>