//模块化
// export default 只能导出一次
// export 可以导出多次

export default{
    //最近浏览记录
    addViews(item){
        if(!localStorage.views){
            let arr = []
            arr.push(item)
            localStorage.setItem('views',JSON.stringify(arr))
        }else{
            let arr = JSON.parse(localStorage.views)
            arr.push(item)
            localStorage.setItem('views', JSON.stringify(arr))
        }
    },
    // 历史记录
    history(item){
        if(!localStorage.record){
            let arr = []
            arr.push(item)
            localStorage.setItem('record',JSON.stringify(arr))
        }else{
            let arr = JSON.parse(localStorage.record)
            arr.push(item)
            localStorage.setItem('record', JSON.stringify(arr))
        }
    }

}