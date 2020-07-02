//用来封装所有请求
import service from './index'

export default {
    // 获取首页数据(get)
    recommend() {
        return service.get('/recommend')
    },

    // 搜索(get)
    search(value) {
        return service.get(`/search=${value}`)
    },

    // 分类查询(get)
    classification(id) {
        return service.get(`/classification?mallSubId=${id}`)
    },

    // 查询获取购物车数据(get)
    // /getCard
    query() {
        return service.post(`/getCard`)
    },

    // 购物车加减商品(post)
    // /editCart
    // 参数:
    // count: 购物车数量
    // id: 商品id
    // mallPrice: 价格
    addition({ count, id, mallPrice }) {
        return service.post(`/editCart`, {
            count,
            id,
            mallPrice
        })
    },

    // 购物车商品删除(post)
    // /deleteShop
    // 参数: 
    // id: 商品id(数组)
    deleteShop(idArr) {
        return service.post(`/deleteShop`,idArr)
    },

    // 购物车支付页面(post)
    // /order
    // 参数:
    // address:收货地址
    // tel:电话
    // orderId:所有商品的id(数组)
    // totalPrice:总价格
    // idDirect:用来判断是购物车结算还是直接购买(直接购买为true,购物车结算为false)
    // count:商品数量
    payment({ address, tel, orderId, totalPrice, idDirect, count }) {
        return service.post(`/order`, {
            address,
            tel,
            orderId,
            totalPrice,
            idDirect,
            count
        })
    },

    // 单个商品详情(get)
    // /goods/one?id=${id}
    // 参数:
    // id:商品的id
    single(id) {
        return service.get(`/goods/one?id=${id}`)
    },

    // 收藏单个商品(post)
    // /collection
    // 参数: 
    // goods: 商品的详情信息
    collection(itemgoods) {
        return service.post(`/collection`, {
            itemgoods
        })
    },

    // 取消收藏(post)
    // /cancelCollection
    // 参数:
    // id:商品的cid
    cancel(id) {
        return service.post(`/cancelCollection`, {
            id
        })
    },

    //  查询商品是否已收藏(post)
    // /isCollection
    // 参数:
    // id:商品的id
    isCollection(id) {
        return service.post(`/isCollection`, {
            id
        })
    },

    //  加入购物车(post)
    // /addShop
    // 参数:
    // id:商品的id  
    addShop(id) {
        return service.post(`/addShop`, {
            id
        })
    },

    //  13. 退出登录(post)
    // /loginOut
    loginOut() {
        return service.post(`/loginOut`)
    },

    //  14. 获取用户信息(post)
    // /queryUser
    queryUser() {
        return service.post(`/queryUser`)
    },

    //  15. 修改保存用户信息(post)
    // /saveUser
    // 参数:
    // gender: 性别
    // year: 年
    // month: 月
    // day: 日
    // id: 用户id
    // nickname: 昵称
    saveUser({ id, gender, year, month, day, nickname }) {
        return service.post(`/saveUser`, {
            id,
            gender,
            year,
            month,
            day,
            nickname
        })
    },
    // 16. 查询用户订单数量(get)
    // /myOrder/orderNum
    orderNum() {
        return service.get(`/myOrder/orderNum`)
    },

    //     17. 商品评论(post)
    // /goodsOne/comment
    // 参数:
    // id: 商品cid
    // rate: 分数
    // content: 内容
    // anonymous: 是否匿名 
    // _id: 商品的_id
    // order_id: 商品的order_id
    // image: []
    comment({ id, rate, content, anonymous, _id, order_id, image: [] }) {
        return service.post(`/goodsOne/comment`, {
            id,
            rate,
            content,
            anonymous,
            _id,
            order_id,
            image: []
        })
    },

    //  18. 获取登录注册默认验证码(get)
    // /v1/verify
    verify() {
        return service.get(`/verify`)
    },

    // 19. 查询用户收货地址(get)
    // /getAddress
    getAddress() {
        return service.get(`/getAddress`)
    },

    //  20. 查询默认收货地址(get)
    // /getDefaultAddress
    getDefaultAddress() {
        return service.get(`/getDefaultAddress`)
    },

    // 21. 设置默认收货地址(post)
    // /setDefaultAddress
    // 参数:
    // id: 地址id
    setDefaultAddress(id) {
        return service.post(`/setDefaultAddress`, {
            id
        })
    },

    //  22. 增加收货地址(post)
    // /address
    // 参数:
    // name:用户名
    // tel:电话
    // address:(省+市+区+详情地址)
    // isDefault:是否默认
    // province:省
    // city:市
    // county:区
    // addressDetail:详情地址，
    // areaCode:地区代码
    // id:修改地址时候要传id
    address({ name, tel, address, isDefault, province, city, county, addressDetail, areaCode, id }) {
        return service.post(`/address`, {
            name,
            tel,
            address,
            isDefault,
            province,
            city,
            county,
            addressDetail,
            areaCode,
            id
        })
    },

    // 23. 删除地址(post)
    // /deleteAddress
    // 参数:
    // id:地址_id
    deleteAddress(id) {
        return service.post(`/deleteAddress`, {
            id
        })
    },

    //  24. 查询我的收藏(get)
    // /collection/list
    collection() {
        return service.get(`/collection/list`)
    },

    // 25. 注册(post)
    // /register
    // 参数:
    // nickname: 用户名
    // password:密码
    // verify:验证码
    register({ nickname, password, verify }) {
        return service.post(`/register`, {
            nickname,
            password,
            verify
        })
    },

    //  26. 登录(post)
    // /login
    // 参数:
    // nickname: 用户名
    // password:密码
    // verify:验证码
    login({ nickname, password, verify }) {
        return service.post(`/login`, {
            nickname,
            password,
            verify
        })
    },

    //  27. 订单查询(get)
    // /getMyOrder
    getMyOrder() {
        return service.get(`/getMyOrder`)
    },

    // 28. 查询已评价(get)
    // /alreadyEvaluated
    alreadyEvaluated() {
        return service.get(`/alreadyEvaluated`)
    },

    // 29. 查询未评价(get)
    // /tobeEvaluated
    tobeEvaluated() {
        return service.get(`/tobeEvaluated`)
    },

    // 30. 查询单条评论(post)
    // 参数: 
    // /evaluateOne
    // id:商品id
    // _id:数据库的那条id
    evaluateOne({ id, _id }) {
        return service.post(`/evaluateOne`, {
            id,
            _id
        })
    }



}