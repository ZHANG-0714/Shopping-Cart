//用来封装所有请求
import service from './index'

export default{
    // 获取首页数据(get)
    recommend(){
        console.log(res.data)
        return service.get('/recommend')
    }
}