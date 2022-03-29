import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
import ServiceService from "../Services/ServiceJobService";
import CartService from "../Services/CartsService";

class ServiceJobScreen extends React.Component {
    // const product= data.products.find( x=> x._id === props.match.params.id);

    constructor(props){
        console.log(props.match.params.id);
        super(props)
        this.state = {
            service:[]
        }
    }

    componentDidMount(){
        ServiceService.getServiceById(this.props.match.params.id).then((response) => {
            console.log(response.data);
            this.setState({ service: response.data})
        });
    }

    addToCart(e, serviceId)
    {
        console.log("Service id");
        console.log(serviceId);
        CartService.serviceExists(window.localStorage.getItem('u_code'), serviceId).then((response) => {
            console.log("Service Exists:");
            console.log(response.data);
            if(response.data == false)
            {
                CartService.getUserId(window.localStorage.getItem('u_code')).then((response) => {
                    console.log(response.data);
                    CartService.addService(response.data.cartId, serviceId).then((response) => {
                        console.log(response.data);
                        if(response.status == 200)
                        {
                            alert("Service added to cart!")
                        }
                        else
                        {
                            alert("Failed to add service to cart!");
                        }
                    })
                })

            }
            else
            {
                alert("This service already exists in cart!");
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
                        {/*<img className="service-image" src={this.state.service.imageId} alt="product"></img>*/}
                    </div>
                    <div className='details-info'>
                        <ul>
                            <li>
                                <h4>{this.state.service.serviceName}</h4>
                            </li>

                            <li>
                                <b>{this.state.service.servicePrice}</b>
                            </li>

                            <li>
                                Description:
                                <div>
                                    {this.state.service.serviceType}
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className='details-action'>
                        <ul>
                            <li>
                                Price: ${this.state.service.servicePrice}
                            </li>

                            {<li>
                                Type: {this.state.service.serviceType}
                            </li> }

                            <li>
                                <button className="button-primary-add" onClick={(e) => this.addToCart(e, this.state.service.serviceID)}> Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
                }
            </div>
        )
    }

}

export default ServiceJobScreen;