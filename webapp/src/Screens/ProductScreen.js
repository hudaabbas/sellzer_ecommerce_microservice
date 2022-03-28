import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
import CatalogService from '../Services/CatalogService';
import CartsService from '../Services/CartsService';

class ProductScreen extends React.Component {
   // const product= data.products.find( x=> x._id === props.match.params.id);
    
    constructor(props){
        console.log(props.match.params.id);
        console.log(props.match.params.uid);
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
        console.log("Product id: " + productId);
        CartsService.productExists(this.props.match.params.uid, productId).then((response) => {
            console.log("Product Exists:");
            console.log(response.data);
            if(response.data == false)
            {
                CartsService.getUserId(this.props.match.params.uid).then((response) => {
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
                <div className='back-2-result'>
                    <Link to="/">Back to results</Link>
                </div>

                {<div className='details'>
                    <div className='details-image'>
                        <img className="product-image" src={this.state.products.imageId} alt="product"></img>
                        {/* if(this.state.products.imageId != null)
                        <video width="820" height="540" loop autoplay="autoplay">
                             <source src="https://static.nike.com/a/videos/q_90,vc_vp9/d0f7de5f-a845-4614-9b89-9b9455714b0d/video.webm" type="video/mp4"/>
                        </video>                 */}
                    </div>
                    <div className='details-info'>
                        <ul>
                            <li>
                                <h4>{this.state.products.catalogName}</h4>
                            </li>

                            <li>
                                <b>{this.state.products.catalogItemPrice}</b>
                            </li>

                            <li>
                                Description:
                                <div>
                                    {this.state.products.catalogDescription}
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className='details-action'>
                        <ul>
                            <li>
                                Price: ${this.state.products.catalogItemPrice}
                            </li>

                            {<li>
                                Category: {this.state.products.catalogCategory}
                            </li> }

                            <li>
                                Qty: <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </li>

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