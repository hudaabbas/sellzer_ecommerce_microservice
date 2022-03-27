import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
import CatalogService from '../Services/PaymentService';

class ProductScreen extends React.Component {
       // const product= data.products.find( x=> x._id === props.match.params.id);
    
    constructor(props){
        console.log(props.match.params.id);
        super(props)
        this.state = {
            payments:[]
        }
    }

    componentDidMount(){
        CatalogService.getProduct(this.props.match.params.id).then((response) => {
            console.log(response.data);
            this.setState({ products: response.data})
        });
    }

    render (){

    }

}