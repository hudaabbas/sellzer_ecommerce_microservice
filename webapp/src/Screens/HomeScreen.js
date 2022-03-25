import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';
import CatalogService from '../Services/CatalogService';

class HomeScreen extends React.Component {

    constructor(props){
        console.log(props.match.params.id);
        super(props)
        this.state = {
            products:[]
        }
    }

    componentDidMount(){
        CatalogService.getCatalog().then((response) => {
            console.log(response.data);
            this.setState({ products: response.data})
        });
    }

    render (){
    return (<div> <h2>Featured Products and Services</h2>
    <ul className="products">
    {this.state.products.map(
        product =>
       <li>
        <div className="product">
        <Link to={'product/' +product.catalogId}></Link>
        <img className="product-image" src={product.imageId} alt="product"></img>
            <div className="product-name">
                <Link to={'product/' +product.catalogId}>{product.catalogName}</Link>
                {/* <a href="product.html">{product.name}</a> */}
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price"> ${product.catalogItemPrice}</div>
            <div className="product-rating">{product.rating}</div>
        </div>
    </li>)
    }

  </ul>
  </div>)}
}
export default HomeScreen;