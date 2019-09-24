import axios from 'axios'
export default {
    getDetailData(id){
        return (dispatch)=>{
            axios.get(`https://shopapi.smartisan.com/product/spus?ids=${id}`).then((res)=>{
                dispatch({
                    type:"DETAIL",
                    data:res
                })
            })
        }
    }
}