import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
import PaymentService from '../Services/PaymentService';
import PaymentForm from '../components/PaymentForm'
import { useHistory } from "react-router-dom";
class PaymentScreen extends React.Component {
       // const product= data.products.find( x=> x._id === props.match.params.id);
    constructor(props){
        console.log(props.match.params.id);
        super(props)
        this.state = {
            payments:[]
        }
    }

    componentDidMount(){
        PaymentService.getPayment(this.props.match.params.id).then((response) => {
            console.log(response.data);
            this.setState({ payments: response.data})
        });
    }

    routeChange(){ 
        let path = `newPath`; 
    }

    componentWillMount() {
        const that = this;
        let sqPaymentScript = document.createElement("script");
        sqPaymentScript.src = "https://js.squareup.com/v2/paymentform";
        sqPaymentScript.type = "text/javascript";
        sqPaymentScript.async = false;
        sqPaymentScript.onload = () => {
        that.setState({
            loaded: true
        });
        };
        document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
    }
    
     render() {
    return (
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
            name="viewport"
            content="width=device-width,
                    initial-scale=1.0"/>
            <link rel="stylesheet" href="style.css" 
                class="css" />
        </head>
        <body>
            <div class="container">
            <div class="main-content">
            </div>
        
            <div class="centre-content">
                <h1 class="price"><span>$</span>{this.state.payments.total}</h1>
                <p class="course">
                </p>
            </div>
            <div class="card-details">
                <p>Pay using Credit or Debit card</p>
        
                <div class="card-number">
                <label> Card Number </label>
                <input
                    type="text"
                    class="card-number-field"
                    placeholder="###-###-###"/>
                </div>
                <br />
                <div class="date-number">
                <label> Expiry Date </label>
                <input type="text" class="date-number-field" 
                        placeholder="DD-MM-YY" />
                </div>
        
                <div class="cvv-number">
                <label> CVV number </label>
                <input type="text" class="cvv-number-field" 
                        placeholder="xxx" />
                </div>
                <div class="nameholder-number">
                <label> Card Holder name </label>
                <input
                    type="text"
                    class="card-name-field"
                    placeholder="Enter your Name"/>
                </div>
                <div class="shipping-address">
                <label> Shipping Address </label>
                <input
                    type="text"
                    class="card-name-field"
                    placeholder="Enter your Name"/>
                </div>
            <Link to={"/confirmation/"+this.state.payments.paymentId} className="btn btn-primary">Submit</Link>
            </div>
            </div>
        </body>
        </html>
    )
  }
  
}

export default PaymentScreen;