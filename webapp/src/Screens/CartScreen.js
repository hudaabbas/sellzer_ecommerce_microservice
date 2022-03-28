import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartService from '../Services/CartsService';


class CartScreen extends React.Component {

    constructor(props){
        console.log(props.match.params.id);
        super(props)
        this.state = {
            cartInfo:[],
            items:[],
            itemDetails:[],
            serviceList:[],
            serviceDetails:[],
        }
        // this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount(){

        CartService.getUserId(this.props.match.params.id).then((response) => {
            console.log("Product");
            console.log(response.data.products);
            console.log("Service");
            console.log(response.data.services);
            this.setState({ 
                cartInfo: response.data,
                cartID: response.data.cartId,
                userID: this.props.match.params.id
            })
            this.setState({ 
                items: response.data.products,
                serviceList: response.data.services
            }) 

                CartService.getAllProducts(this.state.items).then((response) => {
                    console.log("Product");
                    console.log(response.data);
                    this.setState({ itemDetails: response.data})
                });
                CartService.getAllServices(this.state.serviceList).then((response) => {
                    console.log("Service");
                    console.log(response.data);
                    this.setState({ serviceDetails: response.data})
                })              
                     
        });
    }

    deleteItem(e, pId){
        e.preventDefault();
        console.log("Here")
        console.log(pId)
        CartService.deleteProduct(pId, this.state.cartInfo.cartId).then((response) => {
            console.log(response);
            if (response.status = 200) {
                window.location.reload(false);
            }
        })
    }

    deleteServices(e, sId){
        e.preventDefault();
        console.log("HERE")
        console.log(sId)
        CartService.deleteService(sId, this.state.cartInfo.cartId).then((response) => {
            console.log(response.data);
            if (response.status = 200) {
                window.location.reload(false);
            }
        })
    }

    calculateTotal()
    {
        let total = 0;
        for(let i = 0; i < this.state.itemDetails.length; i++)
        {
            total += this.state.itemDetails[i].catalogItemPrice;
        }
        for(let i = 0; i < this.state.serviceDetails.length; i++)
        {
            total += this.state.serviceDetails[i].servicePrice;
        }
        console.log(total);
        return total;
    }

    createPaymentObj(e, cartID, userID, total)
    {
        e.preventDefault();
        console.log(e)
        var payment = {
            "orderId": cartID,
            "customerId": userID,
            "paymentType": "debit",
            "total": total
        }

        CartService.createPayment(payment).then((response) => {
            console.log(response);
        });
    }

// https://designmodo.com/shopping-cart-ui/

    render (){
        return (

            <div className="shopping-cart">
                {/* {<!-- Title -->} */}
                <div className="title">
                    Shopping Bag
                </div>
                <div className="columnNames">
                    <div>Item</div>
                    <div>Price</div>
                    <div>Remove</div>
                </div>
                
                {/* {<!-- Product Items -->} */}
                
                {this.state.itemDetails.map(
                    
                    (item, i) =>
                        <div className="product-item" key={i}>

                        <div className='product-info'>
                            <div className="image">
                                <img width="80px" src={item.imageId} alt="" />
                            </div>

                            <div className="description">
                                <span width="20px">{item.catalogName}</span>
                                <span>{item.catalogBrand}</span>
                                <span>{item.catalogCategory}</span>
                        </div>

                        <div className="total-price">${item.catalogItemPrice}</div>

                        <button className="delete-btn" onClick={(e) => this.deleteItem(e, item.catalogId)}>
                            <link href='https://css.gg/close.css' rel='stylesheet'></link>
                            <i className="gg-close"></i>
                        </button>

                        </div>
                    </div>

                )}


                {/* {<!-- Service List -->} */}
                
                {this.state.serviceDetails.map(
                    
                    (service, j) =>
                    <div className="service-item" key={j}>

                        <div className="description">
                            <span width="20px">{service.serviceName}</span>
                            <span>{service.serviceType}</span>
                            <span>{service.serviceProvider}</span>
                        </div>

                        <div className="total-price">${service.servicePrice}</div>

                        <button className="delete-btn" onClick={(e) => this.deleteServices(e, service.serviceID)}>
                            <link href='https://css.gg/trash.css' rel='stylesheet'></link>
                            <i class="gg-trash"></i>
                        </button>

                    </div>

                )}

                {/*Checkout Section*/}
                <hr></hr>
                <div className="checkout">
                <div className="total">Total: ${this.calculateTotal()}</div>
                {/* <div class="items">2 items</div> */}
                <button className="checkout-button" onClick={(e) => this.createPaymentObj(e, this.state.cartInfo.cartId,this.state.cartInfo.userId, this.calculateTotal())}>Checkout</button>
                </div>
                
                
            </div>       
        )
    }


}

export default CartScreen;