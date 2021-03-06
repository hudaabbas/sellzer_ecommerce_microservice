import axios from 'axios'

const CARTS_REST_API_URL = 'https://sellzer-cart.herokuapp.com/carts/';

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
    //page has own instance
    getUserId(id){

        return axios({
            method: 'get',
            url: CARTS_REST_API_URL + 'userId/' + id,
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
                url: 'https://sellzer-catalog.herokuapp.com/catalogs/allProducts',
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
                url: 'https://sellzer-service.herokuapp.com/services/allServices',
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
                url: 'https://sellzer-payment.herokuapp.com/payments/',
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
            url: CARTS_REST_API_URL + 'productExists/' + userId,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
            },
            data: productId // ["623d564bad4dfb09c67714e1", "623de973ad4dfb09c67714e2"],// JSON.stringify(idArr)
            
        });
    }

    serviceExists(userId, serviceId)
    {
        return axios({
            method: 'post',
            url: CARTS_REST_API_URL + 'serviceExists/' + userId,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
            },
            data: serviceId // ["623d564bad4dfb09c67714e1", "623de973ad4dfb09c67714e2"],// JSON.stringify(idArr)
            
        });
    }

    addProduct(cartId, prodId)
    {
        console.log("In addProduct");
        console.log(prodId);
        console.log(JSON.stringify(prodId));
        return axios({
            method: 'put',
            url: CARTS_REST_API_URL + 'products/' + cartId,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
            },
            data: prodId // ["623d564bad4dfb09c67714e1", "623de973ad4dfb09c67714e2"],// JSON.stringify(idArr)
            
        });
    }

    addService(cartId, servId)
    {
        console.log("In addService");
        console.log(servId);
        return axios({
            method: 'put',
            url: CARTS_REST_API_URL + 'services/' + cartId,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
            },
            data: servId // ["623d564bad4dfb09c67714e1", "623de973ad4dfb09c67714e2"],// JSON.stringify(idArr)
            
        });
    }

    //clear cart after checkout button is clicked
    clearCart(e, cartId)
    {
        return axios({
            method: 'put',
            url: CARTS_REST_API_URL + 'clearCart/' + cartId,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
            }, 
        });
    }
}

export default new CartService();