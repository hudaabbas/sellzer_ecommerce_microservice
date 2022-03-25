import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
import CatalogService from '../Services/CatalogService';

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

    render (){
        return (
            <div>
                <div className='back-2-result'>
                    <Link to="/">Back to results</Link>
                </div>

                {<div className='details'>
                    <div className='details-image'>
                        <video width="820" height="540" loop autoplay="autoplay">
                            <source src="https://static.nike.com/a/videos/q_90,vc_vp9/d0f7de5f-a845-4614-9b89-9b9455714b0d/video.webm" type="video/mp4"/>
                        </video>                
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
                                <button className="button-primary-add"> Add to Cart</button>
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