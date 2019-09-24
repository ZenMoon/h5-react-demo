import Axios from "../../api/axios"
export default {
    //Home's Page data
    getHomeData(){
        return (dispatch)=>{
            Axios.get("mobile/home").then(res=>{
                if(res.status===200){
                    dispatch({
                        type:"HOME",
                        data:res
                    })
                }
                
            })
        }
    }
    //guessyoulike data
    // getGuessYouLike(){
    //     return (dispatch){
    //         Axios.get()
    //     }
    // }
}