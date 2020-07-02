//模块化
// export default 只能导出一次
// export 可以导出多次

export default{
    //浏览记录
    addViews(item){
        if(!localStorage.views){
            let arr = []
            arr.push(item)
            localStorage.setItem('views',JSON.stringify(arr))
        }else{
            let arr = localStorage.views
            arr.push(item)
            localStorage.setItem('views', JSON.stringify(arr))
        }
    }

}