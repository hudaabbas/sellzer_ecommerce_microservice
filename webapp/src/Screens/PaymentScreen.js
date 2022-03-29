import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
import PaymentService from '../Services/PaymentService';
import PaymentForm from '../components/PaymentForm'
import CartsService from '../Services/CartsService';
import { useHistory } from "react-router-dom";
import '../Login.css';
class PaymentScreen extends React.Component {
       // const product= data.products.find( x=> x._id === props.match.params.id);
    constructor(props){
        console.log(props.match.params.id);
        super(props)
        this.state = {
            payments:[],
            cardNumber: '',
            expiryDate: '',
            CvvNumber: '',
            cardHolderName: '',
            shippingAddress: '',
            errors: {}
        }
    }

    componentDidMount(){
        PaymentService.getPaymentByOrderId(this.props.match.params.id).then((response) => {
            console.log(response.data);
            console.log(response.data.total);
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

    submituserPaymentForm(e) {
        e.preventDefault();
        if (this.validateForm()) 
        {
            CartsService.clearCart(e, this.props.match.params.id);
            console.log(data);
            console.log(this.state);
        }
    }

    handleChangeCardNumber(e) {
        this.setState({cardNumber:e.target.value});
    }

    handleExpiryDate(e) {
        this.setState({expiryDate:e.target.value});
    }

    handleCvvNumber(e) {
        this.setState({CvvNumber:e.target.value});
    }

    handleCardHolderName(e) {
        this.setState({cardHolderName:e.target.value});
    }

    handleShippingAddress(e) {
        this.setState({shippingAddress:e.target.value});
    }

    validateForm() {
        let errors = {};
        let formIsValid = true;
        let cardNum = console.log(document. getElementById("cardNumber").value);
        let exprNum = document. getElementById("expiryDate").value;
        if (!this.state.cardNumber) {
            formIsValid = false;
            errors["cardNumber"] = "Please enter your card number";
        }

        if (typeof this.state.cardNumber !== "undefined") {
            //regular expression for email validation
            const numeric = this.state.cardNumber.replace(/\D/g,'');
            var pattern = new RegExp(/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/i);
            if (!pattern.test(this.state.cardNumber)) {
                formIsValid = false;
                errors["cardNumber"] = "Please enter a valid cardNumber.";
            }
        }

        if (!exprNum) {
            formIsValid = false;
            errors["expiryDate"] = "Please enter expiry date.";
        } 

        if(typeof this.state.expiryDate !== "undefined"){
            //nuha add regex for expiry date
        }

        if (!this.state.CvvNumber) {
            formIsValid = false;
            errors["CvvNumber"] = "Please enter cvv number.";
        } 

        if(typeof this.state.CvvNumber !== "undefined"){
            //nuha add regex for expiry date
        }

        if (!this.state.cardHolderName) {
            formIsValid = false;
            errors["cardHolderName"] = "Please enter Card Holder Name.";
        } 

        if (!this.state.shippingAddress) {
            formIsValid = false;
            errors["shippingAddress"] = "Please enter Shipping Address.";
        } 

        this.setState({
            errors: errors
        });

        return formIsValid;
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
            <div class="form">
            <div class="main-content">
            </div>
        
            <div class="centre-content">
                <h1 class="price"><span>$</span>{console.log(this.state.payments.total)}{this.state.payments.total}</h1>
                <p class="course">
                </p>
            </div>
            <div class="card-details">
                <p>Pay using Credit or Debit card</p>
        
                <div class="card-number">
                    <label className="payment-text"> Card Number </label>
                    <input
                        type="text"
                        //class="card-number-field"
                        name = "cardNumber"
                        id="cardNumber"
                        placeholder="###-###-###"
                        required minLength="9" maxLength="9"
                        onChange={this.handleChangeCardNumber} 
                    />
                    <div className="errorMsg">{this.state.errors.cardNumber}</div>
                </div>

                <br />
                <div class="date-number">
                    <label className="payment-text"> Expiry Date </label>
                    <input type="text" class="date-number-field" 
                        placeholder="DD-MM-YY" 
                        required minLength="6" maxLength="6"
                        id="expiryDate"
                        onChange={this.handleExpiryDate} 
                    />
                    <div className="errorMsg">{this.state.errors.expiryDate}</div>
                </div>
        
                <div class="cvv-number">
                    <label className="payment-text"> CVV number </label>
                    <input type="text" class="cvv-number-field" 
                        placeholder="xxx" 
                        required minLength="3" maxLength="3"
                        value={this.state.CvvNumber} 
                        onChange={this.handleCvvNumber} 
                    />
                    <div className="errorMsg">{this.state.errors.CvvNumber}</div>
                </div>

                <div class="nameholder-number">
                    <label className="payment-text"> Card Holder name </label>
                    <input
                        type="text"
                        //class="card-name-field"
                        placeholder="Enter your Name"
                        value={this.state.cardHolderName} 
                        onChange={this.handleCardHolderName}
                    />
                    <div className="errorMsg">{this.state.errors.cardHolderName}</div>
                </div>

                <div class="shipping-address">
                    <label className="payment-text"> Shipping Address </label>
                    <input
                        type="text"
                        //class="card-name-field"
                        placeholder="Enter your Address"
                        value={this.state.shippingAddress} 
                        onChange={this.handleShippingAddress}
                    />
                    <div className="errorMsg">{this.state.errors.shippingAddress}</div>
                </div>
            <Link to={"/confirmation/"+this.state.payments.paymentId} className="btn btn-primary" onClick={(e) =>this.submituserPaymentForm(e)}>Checkout</Link>
            </div>
            </div>
        </body>
        </html>
    )
  }
  
}

export default PaymentScreen;