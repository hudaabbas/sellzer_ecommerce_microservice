import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartService from '../Services/CartsService';
import axios from 'axios'


class CartScreen extends React.Component {

    constructor(props){
        console.log(props.match.params.id);
        super(props)
        this.state = {
            result1:[],
            items:[]
        }
    }

    componentDidMount(){

        // Make first two requests
        // const firstResponse = await Promise.all([
        //   axios.get(`http://localhost:9003/carts/${this.props.match.params.id}`),
        // //   axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${this.props.p2}`)
        // ]);
      
        // // Make third request using responses from the first two
        // const secondResponse = await axios.get('http://localhost:9005/catalogs/' + firstResponse.data.products);
      
        // // Update state once with all 3 responses
        // this.setState({
        //   // p1Location: firstResponse.data,
        //   items: secondResponse.data,
        // });

        //var allProducts = [];
        CartService.getUserId(this.props.match.params.id).then((response) => {
            console.log(response.data.products);
            this.setState({ items: response.data.products})
            //allProducts = 
                CartService.getAllProducts(response.data.products).then((response) => {
                    console.log(response.data);
                    this.setState({ result1: response.data})
                })           
           // this.setState({items: response.data.products})           
        });

        // {this.state.items.map(
        //     item =>
        //     <li>
        //         <div className="product">
                
        //             <div className="product-brand">{item}</div>
        //             </div>
        //     </li>
        // )}

        /*console.log(this.state.items[0]);
        CartService.getProducts(this.state.items[0]).then((response) => {
            console.log(response.data);
            this.setState({ result1: response.data})
        });*/
    


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



// https://designmodo.com/shopping-cart-ui/

    render (){
        return (

            <div class="shopping-cart">
                {/* {<!-- Title -->} */}
                <div class="title">
                    Shopping Bag
                </div>
                
                {/* {<!-- Product #1 -->} */}
                <div class="item">
                
                    <div class="image">
                        <img width="80px" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-lW4FDD.png" alt="" />
                    </div>
                
                    <div class="description">
                        <span>{this.state.items[0]}</span>
                        <span>Bball High</span>
                        <span>White</span>
                    </div>
                
                    <div class="quantity">
                        <button class="plus-btn" type="button" name="button">
                            <link rel="stylesheet" href="https://unpkg.com/@tabler/icons@latest/iconfont/tabler-icons.min.css"></link>
                            <i class="ti ti-plus"></i>
                        </button>

                        <input type="text" name="name" defaultValue="1"></input>

                        <button class="minus-btn" type="button" name="button">
                            <link rel="stylesheet" href="https://unpkg.com/@tabler/icons@latest/iconfont/tabler-icons.min.css"></link>
                            <i class="ti ti-minus"></i>
                        </button>
                    </div>
                
                    <div class="total-price">$549</div>

                    <button class="delete-btn">
                        <link href='https://css.gg/close.css' rel='stylesheet'></link>
                        <i class="gg-close"></i>
                    </button>

                </div>

                {/* {<!-- Product #2 -->} */}
                <div class="item">
                
                    <div class="image">
                        <img width="80px" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-shoes-lW4FDD.png" alt="" />
                    </div>
                
                    <div class="description">
                        <script>{console.log(this.state.result1)}</script>
                        {/* <span>{this.state.result1[0].catalogName}</span> */}
                        
                        <span>Bball High</span>
                        <span>White</span>
                    </div>
                
                    <div class="quantity">
                        <button class="plus-btn" type="button" name="button">
                            <link rel="stylesheet" href="https://unpkg.com/@tabler/icons@latest/iconfont/tabler-icons.min.css"></link>
                            <i class="ti ti-plus"></i>
                        </button>

                        <input type="text" name="name" defaultValue="1"></input>

                        <button class="minus-btn" type="button" name="button">
                            <link rel="stylesheet" href="https://unpkg.com/@tabler/icons@latest/iconfont/tabler-icons.min.css"></link>
                            <i class="ti ti-minus"></i>
                        </button>
                    </div>
                
                    <div class="total-price">$549</div>

                    <button class="delete-btn">
                        <link href='https://css.gg/close.css' rel='stylesheet'></link>
                        <i class="gg-close"></i>
                    </button>

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