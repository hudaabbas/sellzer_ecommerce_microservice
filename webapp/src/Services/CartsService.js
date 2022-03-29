import axios from 'axios'

const CARTS_REST_API_URL = 'http://localhost:9003/carts/';

class CartService {

    addCarts(body){
        return axios({
            method: 'post',
            url: CARTS_REST_API_URL,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;',
            },
            data: body
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

    deleteService(serviceId, cartId)
    {
        console.log("Here");
        console.log(serviceId);
        return axios({
            method: 'delete',
            url: CARTS_REST_API_URL + 'services/' + cartId,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            data: serviceId
        });

    }

    getAllServices(serviceArr) {
        return axios({
                method: 'post',
                url: 'http://localhost:9002/services/allServices',
                withCredentials: false,
                headers: {
                    'Access-Control-Allow-Origin':'*',
                    'Content-Type': 'application/json',
                },
                data: serviceArr // ["623d564bad4dfb09c67714e1", "623de973ad4dfb09c67714e2"],// JSON.stringify(idArr)
                
            });
    }

    createPayment(paymentObj) {
        return axios({
                method: 'post',
                url: 'http://localhost:9004/payments/',
                withCredentials: false,
                headers: {
                    'Access-Control-Allow-Origin':'*',
                    'Content-Type': 'application/json',
                },
                data: paymentObj // ["623d564bad4dfb09c67714e1", "623de973ad4dfb09c67714e2"],// JSON.stringify(idArr)
                
            });
    }

    productExists(userId, productId)
    {
        return axios({
            method: 'post',
            url: 'http://localhost:9003/carts/productExists/' + userId,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
            },
            data: productId // ["623d564bad4dfb09c67714e1", "623de973ad4dfb09c67714e2"],// JSON.stringify(idArr)
            
        });
    }

    addProduct(cartId, prodId)
    {
        console.log("In addProduct");
        console.log(prodId);
        console.log(JSON.stringify(prodId));
        return axios({
            method: 'put',
            url: 'http://localhost:9003/carts/products/' + cartId,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
            },
            data: prodId // ["623d564bad4dfb09c67714e1", "623de973ad4dfb09c67714e2"],// JSON.stringify(idArr)
            
        });
    }
    
}

export default new CartService();