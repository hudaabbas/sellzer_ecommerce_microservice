import axios from 'axios'

class PaymentService {

    getPayment(id){
         axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        return axios({
            method: 'get',
            url: 'http://localhost:9004/payments/'+id,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });
    }

    postPayment(body){
            return axios({
            method: 'post',
            url: 'http://localhost:9004/payments/',
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
   
    deletePayment(){
          fetch("http://localhost:9004/payments/6234a51750851c05d8c4ce71" + paymentId, requestOptions).then((response) => {
                return response.json();
            }).then((result) => {
                // do what you want with the response here
        });
    }

}

export default new PaymentService();