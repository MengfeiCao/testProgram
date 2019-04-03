import api from "@/api";

export default {
    requireKindBannerListData(){
        return function ( dispatch ) {
            console.log("请求banner数据");
            api.requestBanner("banner")
            .then((data)=>{
                dispatch({
                    type : "CHANGE_KIND_BANNER_LIST_DATA" ,
                    data
                })
            })
        }
    },
    requireKindProListData(){
        return function(dispatch){
            console.log("请求pro数据");
            api.requestPro("douban")
            .then((data)=>{
                dispatch({
                    type : "CHANGE_KIND_PRO_LIST_DATA" ,
                    data
                })
            })
        }
    },
}