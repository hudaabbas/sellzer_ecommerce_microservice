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

    getCartId(id){

        return axios({
            method: 'get',
            url: CARTS_REST_API_URL + id,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });

    }

    getUserId(id){

        return axios({
            method: 'get',
            url: CARTS_REST_API_URL+ 'userId/' + id,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });

    }

    getAllProducts(idArr) {
        return axios({
                method: 'post',
                url: 'http://localhost:9005/catalogs/allProducts',
                withCredentials: false,
                headers: {
                    'Access-Control-Allow-Origin':'*',
                    'Content-Type': 'application/json',
                },
                data: idArr // ["623d564bad4dfb09c67714e1", "623de973ad4dfb09c67714e2"],// JSON.stringify(idArr)
                
            });
    }

    deleteProduct(productId, cartId)
    {
        console.log("Here");
        console.log(productId);
        return axios({
            method: 'delete',
            url: CARTS_REST_API_URL + 'products/' + cartId,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            data: productId
        });

    }
    
}

export default new CartService();