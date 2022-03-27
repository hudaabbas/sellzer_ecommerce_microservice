import axios from 'axios'


class ServiceJobService {
    getService(){
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        return axios({
            method: 'get',
            url: 'http://localhost:9002/services/',
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });
    }

    getServiceById(id){
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        return axios({
            method: 'get',
            url: 'http://localhost:9002/services/' + id,
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
            url: 'http://localhost:9002/services/ascendSort/',
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
            url: 'http://localhost:9002/services/descendSort/',
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
            url: 'http://localhost:9002/services/name/' + name,
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
            url: 'http://localhost:9002/services/location/' + location,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });
    }
}

export default new ServiceJobService();