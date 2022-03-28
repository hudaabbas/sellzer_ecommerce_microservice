import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';
import CatalogService from '../Services/CatalogService';
import {Button} from 'reactstrap';

class HomeScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
    }

    componentDidMount(){
        console.log(window.localStorage.getItem('u_code'));
        CatalogService.getCatalog().then((response) => {
            console.log(response.data);
            this.setState({ products: response.data})
        });
    }

    render (){
    return (
    <div> 
        <h2>Featured Products</h2>
        <div>
            <Button type="submit" className="btn" href="/product">Sell an item</Button>
        </div>
        <ul className="products">
            {this.state.products.map(
                product =>
                <li>
                <div className="product">
                <Link to={'product/' +product.catalogId}></Link>
                <img className="product-image" src={product.imageId} alt="product"></img>
                    <div className="product-name">
                        <Link to={'product/' +product.catalogId + '/' + window.localStorage.getItem('u_code')}>{product.catalogName}</Link>
                        {/* <a href="product.html">{product.name}</a> */}
                    </div>
                    <div className="product-brand">{product.catalogBrand}</div>
                    <div className="product-price"> ${product.catalogItemPrice}</div>
                    <div className="product-rating">{product.catalogCategory}</div>
                </div>
            </li>)
            }
        </ul>
  </div>)}
}
export default HomeScreen;