<template>
  <!-- 订单结算 -->
  <div>
    <!-- 标题 -->
    <div class="city">
      <van-nav-bar title="订单结算" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 收货 -->
    <div v-if="add === null" class="addto" @click="addto">点击添加默认地址</div>
    <div class="receipt" v-if="add !== null">
      <van-icon name="location-o" size="30px" />
      <div class="people">
        <!-- 收货人 -->
        <div class="receipts">
          <div>收货人：{{add.name}}</div>
          <div>{{add.tel}}</div>
        </div>
        <!-- 收货地址 -->
        <div class="receiptc">
          <div class="address">收货地址：{{add.address}}</div>
          <van-icon name="arrow" size="20px" @click="arrow" />
        </div>
        <div class="received">(收货不便时，可选择免费待收货服务)</div>
      </div>
    </div>
    <img src="../assets/caitiao.jpg" alt class="img" />

    <!-- 购物车传过来的商品列表 -->
    <div v-if=" zero === '1' ">
      <div class="arr">
      <div class="commodity" v-for="(item,index) in shopp" :key="index">
        <img :src="item.image_path" alt class="imgs" />
        <!-- 商品名 -->
        <div class="money">
          <div class="name">{{item.name}}</div>
          <!-- 价格 -->
          <div class="list">
            <div class="mallPrice">￥{{item.mallPrice}}</div>
            <div>×{{item.count}}</div>
          </div>
        </div>
      </div>
      <!-- <van-submit-bar :price="money * 100" button-text="提交订单" @submit="onSubmit" /> -->
    </div>
    </div>

    <!-- 详情传过来的商品列表 -->
    <div class="arr" v-if=" zero === '0' ">
      <div class="commodity">
        <img :src="shopping.image_path" alt class="imgs" />
        <!-- 商品名 -->
        <div class="money">
          <div class="name">{{shopping.name}}</div>
          <!-- 价格 -->
          <div class="list">
            <div class="mallPrice">￥{{shopping.present_price}}</div>
            <div>×{{shopping.count}}</div>
          </div>
        </div>
      </div>
      <!-- <van-submit-bar :price="moneys * 100" button-text="提交订单" @submit="onSubmit" /> -->
    </div>
 
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      add: "", //查询默认收货地址
      shopping: {}, //详情传来的值
      shopp:[], //购物车传过来的值
      list: [],
      orderId: [],
      zero:''
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.push("shoppingCart");
    },
    //点击添加默认地址
    addto() {
      this.$router.push("Address");
    },
    // 编辑地址
    arrow() {
      this.$router.push("Address");
    },
    // 提交订单
    onSubmit() {
      // 详情页拿id
      this.orderId.push(this.shopping.id)
      // 购物车拿cid
      if(this.zero === '1'){
        this.shopp.map(item => {
        this.orderId.push(item.cid);
      })
    // 结算时
     if(this.zero === '1'){
        this.$api
        .payment(
          this.add.address,
          this.add.tel,
          this.orderId,
          this.money,
          false,
          this.shopp.length
        )
        .then(res => {
          this.$toast({
            message: res.msg,
            icon: "like-o"
          });
          this.$router.push("/");
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
     }else{
       this.$api
        .payment(
          this.add.address,
          this.add.tel,
          this.orderId,
          this.moneys,
          true,
          this.shopping.count
        )
        .then(res => {
          this.$toast({
            message: res.msg,
            icon: "like-o"
          });
          this.$router.push("/");
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
     }
    }
  },
  mounted() {
    //详情传来的值
    if(localStorage.items){
    this.shopping = JSON.parse(localStorage.getItem("items"));
    }else{
      this.shopping = this.$route.query.items
    }
    console.log(this.shopping);
    
    //购物车传过来的值
    if(localStorage.itemm){
    this.shopp = JSON.parse(localStorage.getItem("itemm"));

    }else{
      this.shopp = this.$route.query.itemm
    }
    console.log(this.shopp);
   

    if(localStorage.zero){
      this.zero = JSON.parse(localStorage.getItem('zero'))
    }else{
      this.zero = this.$route.query.zero
    }
    console.log(this.zero);

    // 查询默认收货地址
    this.$api
      .getDefaultAddress()
      .then(res => {
        this.add = res.defaultAdd;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },

  // computed: {
  //   // 定义总价
  //   money() {
  //     let val = 0;
  //     this.shopp.map(item => {
  //       if (item.check) {
  //         val += item.count * item.mallPrice;
  //       }
  //     });
  //     return val;
  //   },
  //   moneys(){
  //     return this.shopping.count * this.shopping.orl_price
  //   }
  // },
}
}
</script>

<style scoped lang='scss'>
.city {
  border-bottom: 1px solid rgb(241, 241, 241);
}
.receipt {
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
}
.addto {
  width: 100%;
  line-height: 110px;
  text-align: center;
  text-decoration: underline;
}
.receipts {
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.receiptc {
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.van-icon {
  margin-left: 10px;
}
.people {
  width: 100%;
  margin-left: 10px;
}
.address {
  font-size: 15px;
  margin-top: 10px;
}
.received {
  font-size: 14px;
  margin-top: 10px;
  color: #fad1a8;
}
.img {
  width: 100%;
}
.commodity {
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(228, 228, 228);
}
.imgs {
  width: 80px;
  height: 80px;
  margin-left: 20px;
  border: 1px solid #ccc;
}
.money {
  margin-left: 20px;
}
.name {
  font-size: 15px;
  width: 160px;
}
.list {
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.mallPrice {
  color: #e0322b;
}
</style>