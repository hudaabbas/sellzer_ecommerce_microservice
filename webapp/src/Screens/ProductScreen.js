import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
import CatalogService from '../Services/CatalogService';
import CartsService from '../Services/CartsService';

class ProductScreen extends React.Component {
   // const product= data.products.find( x=> x._id === props.match.params.id);
    
    constructor(props){
        console.log(props.match.params.id);
        super(props)
        this.state = {
            products:[]
        }
    }

    componentDidMount(){
        CatalogService.getProduct(this.props.match.params.id).then((response) => {
            console.log(response.data);
            this.setState({ products: response.data})
        });
    }

    addToCart(e, productId)
    {
        console.log("Product id");
        console.log(productId);
        CartsService.productExists(window.localStorage.getItem('u_code'), productId).then((response) => {
            console.log("Product Exists:");
            console.log(response.data);
            if(response.data == false)
            {
                CartsService.getUserId(window.localStorage.getItem('u_code')).then((response) => {
                    console.log(response.data);
                    CartsService.addProduct(response.data.cartId, productId).then((response) => {
                        console.log(response.data);
                        if(response.status == 200)
                        {
                            alert("Product added to cart!")
                        }
                        else
                        {
                            alert("Failed to add product to cart!");
                        }
                    })
                })

            }
            else
            {
                alert("This product already exists in cart!");
            }
        })

    }

    render (){
        return (
            <div>
                <div className='titleOnPage'>
                    <br></br><br></br>
                    <h2>Product Details</h2>
                </div>

                <div className='back-2-result'>
                    <Link to="/product-home/" className="toggleButton">  Back to results  </Link>
                </div>

                {
                <div className='details'>

                    <div className='details-image'>
                        <img className="product-image" src={this.state.products.imageId} alt="product"></img>
                        {/* if(this.state.products.imageId != null)
                        <video width="820" height="540" loop autoplay="autoplay">
                            <source src="https://static.nike.com/a/videos/q_90,vc_vp9/d0f7de5f-a845-4614-9b89-9b9455714b0d/video.webm" type="video/mp4"/>
                        </video>                 */}
                    </div>

                    <div className='details-info'>
                        <ul>
                            <li padding=''>
                                <h4>{this.state.products.catalogName}</h4>
                            </li>
                            <li class="product-description">
                                <b>Description:</b>
                                <div>
                                    {this.state.products.catalogDescription}
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className='details-action'>
                        <ul>
                            <li>
                                <b>Price: ${this.state.products.catalogItemPrice}</b>
                            </li>

                            {<li>
                                <b>Category: {this.state.products.catalogCategory}</b>
                            </li> }

                            <li>
                                <button className="button-primary-add" onClick={(e) => this.addToCart(e, this.state.products.catalogId)}> Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div> 
                }
            </div>
        )
    }

}

export default ProductScreen;