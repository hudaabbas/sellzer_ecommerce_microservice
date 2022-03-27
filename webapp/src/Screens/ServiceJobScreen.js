import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
import ServiceService from "../Services/ServiceJobService";
import ReactSearchBox from "react-search-box";

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

export default ServiceJobScreen;