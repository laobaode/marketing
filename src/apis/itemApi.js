import Axios from "axios";
import baseAxios from './BaseAxios';
/**
 * 提供组织,用户,角色等相关接口
 */
export default {
  
    getList(){
        return baseAxios.get('/denali/open/item/list', {});
    }
}