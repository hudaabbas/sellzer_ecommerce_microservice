import axios from 'axios'


class LoginService {
    getUser(id){
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        return axios({
            method: 'get',
            url: 'http://localhost:9000/logins/' + id,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });
    }
    getEmail(email){
        return axios({
            method: 'get',
            url: 'http://localhost:9000/logins/email/' + email,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
            }
        });
    }
}

export default new LoginService();