import axios from 'axios'


class ServiceJobService {
    getService(){
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        return axios({
            method: 'get',
            url: 'https://sellzer-service.herokuapp.com/services/',
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });
    }

    addService(body){
        return axios({
            method: 'post',
            url: 'https://sellzer-service.herokuapp.com/services/',
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
            },
            data: body
        });
    }

    getServiceById(id){
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        return axios({
            method: 'get',
            url: 'https://sellzer-service.herokuapp.com/services/' + id,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });
    }

    getServicesAscend(){
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        return axios({
            method: 'get',
            url: 'https://sellzer-service.herokuapp.com/services/ascendSort/',
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });
    }

    getServicesDescend(){
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        return axios({
            method: 'get',
            url: 'https://sellzer-service.herokuapp.com/services/descendSort/',
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
            url: 'https://sellzer-service.herokuapp.com/services/name/' + name,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });
    }

    searchByLocation(location){
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        return axios({
            method: 'get',
            url: 'https://sellzer-service.herokuapp.com/services/location/' + location,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });
    }
}

export default new ServiceJobService();