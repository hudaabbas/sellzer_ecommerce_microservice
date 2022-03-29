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

    </div>
    )}
}
export default HomeScreen;
