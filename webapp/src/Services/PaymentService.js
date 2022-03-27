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

    postPayment(){
        fetch('http://localhost:9004/payments/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            })
        })
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