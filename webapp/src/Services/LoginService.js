import axios from 'axios'


class LoginService {
    getUser(id){
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        return axios({
            method: 'get',
            url: 'https://ancient-brook-14889.herokuapp.com/logins/' + id,
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
            url: 'https://ancient-brook-14889.herokuapp.com/logins/email/' + email,
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
            url: 'https://ancient-brook-14889.herokuapp.com/logins/',
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