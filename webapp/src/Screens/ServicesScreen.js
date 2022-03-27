import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';
import ServiceJobService from "../Services/ServiceJobService";
import { useState, useEffect } from 'react';
import { Card, Input } from 'semantic-ui-react'

class ServicesScreen extends React.Component {

    static searchName = useState('')

    constructor(props){
        console.log(props.match.params.id);
        super(props)
        this.state = {
            services : []
        }
    }

    componentDidMount(){
        ServiceJobService.getService().then((response) => {
            console.log(response.data);
            this.setState({ services :  response.data })
        });
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));

        {this.state.isToggleOn ?
        (ServiceJobService.getServicesAscend().then((response) => {
            console.log(response.data);
            this.setState({ services :  response.data })
        }))
        :
        (ServiceJobService.getServicesDescend().then((response) => {
            console.log(response.data);
            this.setState({ services :  response.data })
        }))}

    }

    handleSearch() {

        (ServiceJobService.searchByName(this.searchName).then((response) => {
            console.log(response.data);
            this.setState({ services :  response.data })
        }))

    }



    render (){
        return (<div> <h2>Featured Services</h2>
            <div className="wrap">
                <div className="row">
                    <div className="column">
                        Toggle: <span> </span>
                        <button onClick={this.handleClick} className="toggleButton">
                            {this.state.isToggleOn ? 'Low to High' : 'High to Low'}
                        </button>
                    </div>
                    <div className="column">
                        <input type="text" className="searchTerm" placeholder="search by service" onChange={event => this.searchName(event.target.value)} />
                        <button type="submit" className="searchButton" onClick={this.handleSearch}>
                            <i className="fa fa-search">send </i>
                        </button>
                    </div>
                    <div className="column">
                        <input type="text" className="searchTerm" placeholder="search by location"/>
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search">send</i>
                        </button>
                    </div>
                </div>


            </div>

            <ul className="services">
                {this.state.services.map(
                    service =>
                        <li>
                            <div className="service">
                                <Link to={'service/' +service.serviceID}></Link>
                                {/*<img className="service-image" src={service.imageId} alt="service"></img>*/}
                                <div className="service-name">
                                    <Link to={service.serviceID}>{service.serviceName}</Link>
                                    {/* <a href="service.html">{service.name}</a> */}
                                </div>
                                <div className="service-type">{service.serviceType}</div>
                                <div className="service-price"> ${service.servicePrice}</div>
                                <div className="service-category">{service.serviceCategory}</div>
                            </div>
                        </li>)
                }

            </ul>
        </div>)}
}
export default ServicesScreen;