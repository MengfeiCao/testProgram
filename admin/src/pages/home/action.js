import api from "@/api";

export default {
    gethomeNavListData : () => (dispatch) => {
        let navUrl = "/db/v2/movie/top250" ;
        api.request(navUrl)
        .then((data)=>{
            console.log(data);
        })
    }
}