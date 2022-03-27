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

    addUser(body){
        return axios({
            method: 'post',
            url: 'http://localhost:9000/logins/',
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json',
            },
            data: body
            //  body in this format: {
            //     "email": "test5@gmail.com",
            //     "password": "pass5",
            //     "verification": 1,
            //     "subsidized": 0
            // }
        });
    }
}

export default new LoginService();