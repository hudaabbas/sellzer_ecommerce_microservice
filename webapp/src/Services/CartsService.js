import axios from 'axios'

const CARTS_REST_API_URL = 'http://localhost:9003/carts/';

class CartService {

    getCarts(){
        return axios({
            method: 'get',
            url: CARTS_REST_API_URL,
            withCredentials: false,
            headers: {"Access-Control-Allow-Origin": "*"} 
        });
          //axios.get(CARTS_REST_API_URL);
    }
}

export default new CartService();