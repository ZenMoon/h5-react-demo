import axios from 'axios'
export default {
    getCateTitleData(){
        return (dispatch)=>{
            axios.get("/cate/marketing/mobile/category_a1071de81525177a67d87e350524a987.json").then((res)=>{     
                dispatch({
                    type:"CATEGORY",
                    data:res
                })
            })
        }
    },
    getCateAllList(){
        return (dispatch)=>{
            axios.get("https://shopapi.smartisan.com/product/skus?ids=100051704,100046411,100023501,100042203,100042801,100052803,100026701,100053001,100057709,100039743,100057915,100058401,100053313,100058801,100040501,100033802,100036401,100036501&with_stock=true&with_spu=true").then((res)=>{ 
                // console.log(res)     
                dispatch({
                    type:"LISTALL",
                    data:res
                })
            })
        }
    }
}