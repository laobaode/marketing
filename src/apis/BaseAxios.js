import Axios from "axios";

export default {
    get(url, param = {}, callback, headers = {}){
        Axios.get(url,{
            headers:headers,
            params: param,
        }).then((data) => {
            let code = data.data.code;
            if (code == 200){
                callback(data);
            }else{
                
            }
        });
    },
    post(url, param = {}, callback, headers = {}){
        const qs = require('qs');
        Axios.post(url,qs.stringify(param),
            ).then((data) => {
            let code = data.data.code;
            if (code == 200){
                callback(data);
            }else{

            }
        });
    },
    batchRequest(url_1, url_2, callback){
        Axios.all([
            axios.get(url_1),
            axios.get(url_2)
          ]).then(axios.spread(function(oftenResp, typeResp) {
                callback(oftenResp, typeResp);
            })).catch(error=>{
              console.log(error);
         })
    }
}