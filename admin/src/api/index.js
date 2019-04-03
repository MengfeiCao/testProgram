import axios from "axios";

export default {
    request (url){
        return new Promise((resolve,reject) => {
            axios.get(url)
            .then(data => {
                resolve(data);
            })
        })
    },
}