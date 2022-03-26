import axios from 'axios'

const CARTS_REST_API_URL = 'http://localhost:9003/carts/';

class CartService {

    addCarts(){
        return axios({
            method: 'post',
            url: CARTS_REST_API_URL,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            data: {
                'userId': 6785439,
                'products': ["Nike Air Forces", "Puma Socks"],
                'services': []
            }
        });
    }

    getCartId(id){

        return axios({
            method: 'get',
            url: 'http://localhost:9003/carts/' + id,
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
            url: 'http://localhost:9003/carts/userId/' + id,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });

    }

    getAllProducts(idArr) {

        return axios({
                method: 'get',
                url: 'http://localhost:9005/catalogs/allProducts',
                withCredentials: false,
                headers: {
                    'Access-Control-Allow-Origin':'*',
                    'Content-Type': 'application/json',
                },
                data: ["623d564bad4dfb09c67714e1", "623de973ad4dfb09c67714e2"]// JSON.stringify(idArr)
                
            });
        
        // var results = await Promise.all(array);
        // console.log(results);
        // return results;// product;
        // async componentDidMount() {

    //     // Make first two requests
    //     const [firstResponse, secondResponse] = await Promise.all([
    //       axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${this.props.p1}`),
    //       axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${this.props.p2}`)
    //     ]);
      
    //     // Make third request using responses from the first two
    //     const thirdResponse = await axios.get('https://maps.googleapis.com/maps/api/directions/json?origin=place_id:' + firstResponse.data.results.place_id + '&destination=place_id:' + secondResponse.data.results.place_id + '&key=' + 'API-KEY-HIDDEN');
      
    //     // Update state once with all 3 responses
    //     this.setState({
    //       p1Location: firstResponse.data,
    //       p2Location: secondResponse.data,
    //       route: thirdResponse.data,
    //     });
      
    //   }
    }
    
}

export default new CartService();