import axios from 'axios'


class CatalogService {
    getCatalog(){
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        return axios({
            method: 'get',
            url: 'http://localhost:9005/catalogs/',
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });
    }

    getProduct(id){
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        return axios({
            method: 'get',
            url: 'http://localhost:9005/catalogs/' + id,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });
    }

    addProduct(body){
        return axios({
            method: 'post',
            url: 'http://localhost:9005/catalogs/',
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
            },
            data: body
        });
    }

    getProductsAscend(){
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        return axios({
            method: 'get',
            url: 'http://localhost:9005/catalogs/ascendSort/',
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });
    }

    getProductsDescend(){
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        return axios({
            method: 'get',
            url: 'http://localhost:9005/catalogs/descendSort/',
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });
    }

    searchByName(name){
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        return axios({
            method: 'get',
            url: 'http://localhost:9005/catalogs/name/' + name,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });
    }
}

export default new CatalogService();