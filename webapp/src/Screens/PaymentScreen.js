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
            CartsService.clearCart(e, this.props.match.params.id).then((response) => {
                console.log(response);
                if(response.status = 200){
                    console.log("Item added successfully");
                    window.location.href = "/confirmation/"+this.state.payments.paymentId;
                }else{
                    alert(response.statusText);
                }
            }).catch(function (error) {
                console.log(error);
            });
            
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
        let cardNum = document.getElementById("cardNumber").value;
        let exprNum = document.getElementById("expiryDate").value;
        let cvvNum = document.getElementById("CvvNumber").value;
        let cardName =  document.getElementById("cardHolderName").value;
        let shippAddr = document.getElementById("shippingAddress").value;
        console.log(cardNum);
        console.log(exprNum);
        console.log(cvvNum);
        console.log(cardName);
        console.log(shippAddr);
        if (!cardNum) 
        {
            formIsValid = false;
            errors["cardNumber"] = "Please enter your card number";
        }else if(typeof cardNum !== "undefined") 
        {
            const numeric = cardNum.replace(/\D/g,'');
            const num= parseInt(numeric);
            console.log(num);
            var pattern = new RegExp(/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/i);
            if (!pattern.test(numeric)) {
                formIsValid = false;
                errors["cardNumber"] = "Please enter a valid cardNumber.";
            }
        }

        if (!exprNum) {
            formIsValid = false;
            errors["expiryDate"] = "Please enter expiry date.";
        } else if(typeof exprNum !== "undefined"){
            const numeric = exprNum.replace(/\D/g,'');
            console.log(numeric);
            var pattern = new RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/i);
            if (!pattern.test(numeric)) {
                formIsValid = false;
                errors["expiryDate"] = "Please enter a valid expiration date.";
            }
        }

        if (!cvvNum) 
        {
            formIsValid = false;
            errors["CvvNumber"] = "Please enter cvv number.";
        } else if(typeof cvvNum !== "undefined")
        {
            const numeric = cvvNum .replace(/\D/g,'');
            const num= parseInt(numeric);
            var pattern = new RegExp(/^[0-9]{3,4}$/);
            if (!pattern.test(num)) {
                formIsValid = false;
                errors["CvvNumber"] = "Please enter a valid cvv number.";
            }
        }

        if (!cardName) {
            formIsValid = false;
            errors["cardHolderName"] = "Please enter Card Holder Name.";
        } 

        if (!shippAddr) {
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
        
            <div class="form">
            <div class="main-content">
            </div>
        
            <div class="centre-content">
                <h1 class="price"><span>Your total is $</span>{console.log(this.state.payments.total)}{this.state.payments.total}</h1>
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
                        placeholder="#################"
                        required minLength="11" maxLength="19"
                        onChange={this.handleChangeCardNumber} 
                    />
                    <div className="errorMsg">{this.state.errors.cardNumber}</div>
                </div>

                <br />
                <div class="date-number">
                    <label className="payment-text"> Expiry Date </label>
                    <input type="text" class="date-number-field" 
                        placeholder="MM/YY" 
                        required minLength="8" maxLength="8"
                        id="expiryDate"
                        onChange={this.handleExpiryDate} 
                    />
                    <div className="errorMsg">{this.state.errors.expiryDate}</div>
                </div>
        
                <div class="cvv-number">
                    <label className="payment-text"> CVV number </label>
                    <input type="text" class="cvv-number-field" 
                        placeholder="xxx" 
                        id="CvvNumber"
                        required minLength="3" maxLength="3"
                        onChange={this.handleCvvNumber} 
                    />
                    <div className="errorMsg">{this.state.errors.CvvNumber}</div>
                </div>

                <div class="nameholder-number">
                    <label className="payment-text"> Card Holder name </label>
                    <input
                        type="text"
                        id="cardHolderName"
                        placeholder="Enter your Name"
                        onChange={this.handleCardHolderName}
                    />
                    <div className="errorMsg">{this.state.errors.cardHolderName}</div>
                </div>

                <div class="shipping-address">
                    <label className="payment-text"> Shipping Address </label>
                    <input
                        type="text"
                        id="shippingAddress"
                        placeholder="Enter your Address"
                        onChange={this.handleShippingAddress}
                    />
                    <div className="errorMsg">{this.state.errors.shippingAddress}</div>
                </div>
            <Link className="btn btn-primary" onClick={(e) =>this.submituserPaymentForm(e)} to={"/confirmation/"+this.state.payments.paymentId}>Checkout</Link>
            </div>
            </div>
        
        
    )
  }
  
}

export default PaymentScreen;