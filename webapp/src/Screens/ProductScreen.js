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
        CatalogService.getProduct().then((response) => {
            console.log(response.data);
            this.setState({ products: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Users List</h1>
                {/* <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> User Id</td>
                            <td> User First Name</td>
                            <td> User Last Name</td>
                            <td> User Email Id</td>
                        </tr>

                    </thead>
                    <tbody>
                    {
                            // this.state.products.map(
                            //     user => 
                            //     <tr key = {user.catalogName}>
                            //             <td> {user.catalogName}</td>   
                            //             <td> {user.catalogItemPrice}</td>   
                            //             <td> {user.catalogCategory}</td>   
                            //             <td> {user.catalogItemSubsided}</td>   
                            //     </tr>
                            // )
                        }

                    </tbody>
                </table> */}

                <div className='back-2-result'>
                    <Link to="/">Back to results</Link>
                </div>

                {<div className='details'>
                    <div className='details-image'>
                        {/* <img src={this.state.products.imageId} alt="product"></img> */}
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
                                    {this.state.products.catalogCategory}
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
                                Status: ${this.state.products.status}
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