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
      addressinfo:{}
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
    },
    onSave(kjj) {
      this.content = kjj;
      this.content.address =
        kjj.province + kjj.city + kjj.county + kjj.addressDetail;
      this.content.id = kjj._id;
      this.$api
        .address({
          content
        })
        .then(res => {
        this.$router.push("Address");
          console.log(res);
        })
        .catch(err => {
          console, log(err);
        });
    },
    onDelete() {
      Toast("delete");
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