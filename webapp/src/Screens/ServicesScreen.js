import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';
import ServiceJobService from "../Services/ServiceJobService";

class ServicesScreen extends React.Component {

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

    render (){
        return (<div> <h2>Featured Services</h2>
            <div id="toggle-bar">
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'CLICK FOR: Low to High' : 'CLICK FOR: High to Low'}
                </button>
            </div>

            <form>
                <label>
                    Search for a service:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <form>
                <label>
                    Search for a service:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>

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