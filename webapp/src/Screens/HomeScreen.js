import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';
import CatalogService from '../Services/CatalogService';
import {Button} from 'reactstrap';
import '../index.css'
class HomeScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            products:[],
            name : ''
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.submitSearchName = this.submitSearchName.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
    }

    componentDidMount(){
        console.log(window.localStorage.getItem('u_code'));
        CatalogService.getCatalog().then((response) => {
            console.log(response.data);
            this.setState({ products: response.data})
        });
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));

        {this.state.isToggleOn ?
            (CatalogService.getProductsAscend().then((response) => {
                console.log(response.data);
                this.setState({ products :  response.data })
            }))
            :
            (CatalogService.getProductsDescend().then((response) => {
                console.log(response.data);
                this.setState({ products :  response.data })
            }))}
    }

    handleRefresh() {
        CatalogService.getCatalog().then((response) => {
            console.log(response.data);
            this.setState({ products :  response.data })
        })
    }


    handleChangeName(e) {
        this.setState({name:e.target.value});
    }

    submitSearchName(e) {
        e.preventDefault();
        console.log(this.state.name);
        (CatalogService.searchByName(this.state.name).then((response) => {
            console.log(response.data);
            this.setState({ products :  response.data })
        }))
        this.setState({name : ''});
    }

    render (){
    return (
    <div> 
        <h2>Featured Products</h2>

        <div className="wrap">
            <div className="row">
                <div className="column">
                    Toggle: <span> </span>
                    <button onClick={this.handleClick} className="toggleButton">
                        {this.state.isToggleOn ? 'Low to High' : 'High to Low'}
                    </button>
                </div>
                <div className="column">
                    <form onSubmit= {this.submitSearchName}>
                        <input type="text" className="searchTerm" placeholder="search by name"
                               value={this.state.name} onChange={this.handleChangeName}/>
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search">send</i>
                        </button>
                    </form>
                </div>
                <div className="column">
                    <button onClick={this.handleRefresh} className="toggleButton">
                        Back To All Products
                    </button>
                </div>
                <div className="column">
                    <Link to="/product" className="toggleButton">  Post A New Product  </Link>
                </div>
            </div>
        </div>

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