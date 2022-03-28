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
            itemDetails:[]
        }

        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount(){

        CartService.getUserId(this.props.match.params.id).then((response) => {
            console.log(response.data.products);
            this.setState({ cartInfo: response.data})
            this.setState({ items: response.data.products}) 

                CartService.getAllProducts(this.state.items).then((response) => {
                    console.log(response.data);
                    this.setState({ itemDetails: response.data})
                })           
                     
        });

    }

    deleteItem(e, pId){
        e.preventDefault();
        console.log("Here")
        console.log(pId)
        CartService.deleteProduct(pId, this.state.cartInfo.cartId).then((response) => {
            console.log(response.data);
            this.setState({items: response.data})
        })

        // onClick={this.deleteItem(item.cartId)}
    }

    calculateTotal()
    {
        let total = 0;
        for(let i = 0; i < this.state.itemDetails.length; i++)
        {
            total += this.state.itemDetails[i].catalogItemPrice;
        }
        console.log(total);
        return total;
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
                    <div>Quantity</div>
                    <div>Price</div>
                    <div>Remove</div>
                </div>
                
                {/* {<!-- Items -->} */}
                
                {this.state.itemDetails.map(
                    
                    (item, i) =>
                        <div className="item" key={i}>
                                        
                        <div className="image">
                            <img width="80px" src={item.imageId} alt="" />
                        </div>

                        <div className="description">
                            <span width="20px">{item.catalogName}</span>
                            <span>{item.catalogBrand}</span>
                            <span>{item.catalogCategory}</span>
                        </div>

                        <div className="quantity"> {item.quantity}
                            {/* <button class="plus-btn" type="button" name="button">
                                <link rel="stylesheet" href="https://unpkg.com/@tabler/icons@latest/iconfont/tabler-icons.min.css"></link>
                                <i class="ti ti-plus"></i>
                            </button>

                            <input type="text" name="name" defaultValue="1"></input>

                            <button class="minus-btn" type="button" name="button">
                                <link rel="stylesheet" href="https://unpkg.com/@tabler/icons@latest/iconfont/tabler-icons.min.css"></link>
                                <i class="ti ti-minus"></i>
                            </button> */}
                        </div>

                        <div className="total-price">${item.catalogItemPrice}</div>

                        <button className="delete-btn" onClick={(e) => this.deleteItem(e, item.cartId)}>
                            <link href='https://css.gg/close.css' rel='stylesheet'></link>
                            <i className="gg-close"></i>
                            {/* <Link to={'cart/'+ this.state.items.cartId}>{product.catalogName}</Link> */}
                        </button>

                        </div>

                )}

                {/*Checkout Section*/}
                <hr></hr>
                <div className="checkout">
                <div className="total">Total: ${this.calculateTotal()}</div>
                {/* <div class="items">2 items</div> */}
                <button className="checkout-button">Checkout</button>
                </div>
                
                
            </div>       
        )
    }


}

// function CartScreen (props){
   
//     // <h1>Hello</h1>
//     return ( 

    
//     )
// }

export default CartScreen;