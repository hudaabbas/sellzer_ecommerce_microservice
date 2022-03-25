import axios from 'axios'

const CARTS_REST_API_URL = 'http://localhost:9003/carts/';

class CartService {

    addCarts(){
        return axios({
            method: 'post',
            url: CARTS_REST_API_URL,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            data: {
                'userId': 6785439,
                'products': ["Nike Air Forces", "Puma Socks"],
                'services': []
            }
        });
    }
}

export default new CartService();