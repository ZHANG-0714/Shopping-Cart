<template>
  <!-- 设置 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="个人资料" left-text left-arrow @click-left="onClickLeft" />
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
/>

  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
          areaList,
      searchResult: [],
    };
  },
  methods: {
       onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
      // 返回上一级
    onClickLeft() {
      this.$router.go(-1);
      Toast('返回');
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.city {
  border-bottom: 1px solid rgb(241, 241, 241);
}
</style>