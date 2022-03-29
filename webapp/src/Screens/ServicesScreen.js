import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';
import ServiceJobService from "../Services/ServiceJobService";
import { useState, useEffect } from 'react';
import '../index.css'

class ServicesScreen extends React.Component {

    constructor(props){
        console.log(props.match.params.id);
        super(props)
        this.state = {
            services : [],
            name : '',
            location: ''
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.submitSearchName = this.submitSearchName.bind(this);
        this.submitSearchLocation = this.submitSearchLocation.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
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

    handleRefresh() {
        ServiceJobService.getService().then((response) => {
            console.log(response.data);
            this.setState({ services :  response.data })
        })
    }


    handleChangeName(e) {
        this.setState({name:e.target.value});
    }
    handleChangeLocation(e) {
        this.setState({location:e.target.value});
    }

    submitSearchName(e) {
        e.preventDefault();
        console.log(this.state.name);
        (ServiceJobService.searchByName(this.state.name).then((response) => {
            console.log(response.data);
            this.setState({ services :  response.data })
        }))
        this.setState({name : ''});
    }

    submitSearchLocation(e) {
        e.preventDefault();
        console.log(this.state.location);
        (ServiceJobService.searchByLocation(this.state.location).then((response) => {
            console.log(response.data);
            this.setState({ services :  response.data })
        }))
        this.setState({location : ''});
    }

    render (){
        return (<div>
            <div className='titleOnPage'>
                <br></br><br></br>
                <h2>Featured Services</h2>
            </div>

            <div className="wrap">
                <div className="row">
                    <div className="column">
                        <button onClick={this.handleClick} className="toggleButton">
                            {
                                (this.state.isToggleOn ? 'Low to High' : 'High to Low')
                            }
                        </button>
                    </div>
                    <div className="column-search">
                        <form onSubmit= {this.submitSearchName}>
                            <input type="text" className="searchTerm" placeholder="search by service"
                                   value={this.state.name} onChange={this.handleChangeName}/>
                            <button type="submit" className="searchButton">
                                <i className="fa fa-search"></i>
                            </button>
                        </form>
                    </div>
                    <div className="column-search">
                        <form onSubmit= {this.submitSearchLocation}>
                            <input type="text" className="searchTerm" placeholder="search by location"
                                   value={this.state.location} onChange={this.handleChangeLocation}/>
                            <button type="submit" className="searchButton">
                                <i className="fa fa-search"></i>
                            </button>
                        </form>
                    </div>
                    <div className="column">
                        <button onClick={this.handleRefresh} className="toggleButton">
                            Back To All Services
                        </button>
                    </div>
                    <div className="column">
                        <Link to="/add-service" className="toggleButton">  Post A New Service  </Link>
                    </div>
                </div>
            </div>

            <ul className="services">
                {this.state.services.map(
                    service =>
                        <li>
                            <div className="service">
                                <Link to={'service-home/' +service.serviceID}></Link>
                                { service.serviceImageId == null ?
                                    ( <img className="service-image" src={"https://fl-1.cdn.flockler.com/embed/no-image.svg"} alt="service"></img> )
                                    :
                                    ( <img className="service-image" src={service.serviceImageId} alt="service"></img> )
                                }
                                <div className="service-name">
                                    <Link to={service.serviceID}>{service.serviceName}</Link>
                                </div>
                                <div className="service-type">{service.serviceType}</div>
                                <div className="service-price"> ${service.servicePrice}</div>
                                <div className="service-location">{service.serviceLocation}</div>
                                <div className="service-category">{service.serviceProvider}</div>
                            </div>
                        </li>)
                }
            </ul>
        </div>)}
}
export default ServicesScreen;