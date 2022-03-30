import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';
import CatalogService from '../Services/CatalogService';
import {Button} from 'reactstrap';
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../animation.css'
import ServiceJobService from "../Services/ServiceJobService";

class HomeScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            products: [],
            services: [],
        }

    }

    componentDidMount(){
        console.log(window.localStorage.getItem('u_code'));
        CatalogService.getCatalog().then((response) => {
            console.log(response.data);
            this.setState({ products: response.data})
        });

        ServiceJobService.getService().then((response) => {
            console.log(response.data);
            this.setState({ services :  response.data })
        });
    }




    render (){
    return (

        <div>
        <section id="title">

            <div className="container-fluid">
                <div className="logo">
                <div className="row-logo">
                    <div className="col-lg-6">
                        <img src="https://i.imgur.com/rQ8A1Cy.png" className="title-image" alt="..."></img>
                    </div>

                    <div className="col-lg-6-text">
                        <br></br><br></br>
                            <h1> e-commerce, the right way!</h1>
                            <h4> Sellzer makes the process of buying and selling online easier, efficient, and accessible.
                                We aim to use this platform to build resilient communities.</h4>
                        <br></br><br></br>
                    </div>

                </div>
                </div>
            </div>

            <br></br><br></br>
            <div className="loop-wrapper">
                <div className='titleOnPage'>
                   
                    <h2 className="experience">Experience the Difference</h2>
                </div>
                <div className="mountain"></div>
                <div className="hill"></div>
                <div className="tree"></div>
                <div className="tree"></div>
                <div className="tree"></div>
                <div className="rock"></div>
                <div className="truck"></div>
                <div className="wheels"></div>
            </div>
            <br></br><br></br>

            <div className="container-fluid">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                        </div>
                        <div className="carousel-inner" >
                            <div className="carousel-item active">
                                <ul className="">
                                        <div className="row" >
                                            {this.state.products.slice(0, 6).map(
                                                product =>
                                                    <div className="small-box">
                                                        <img className="product-image" src={product.imageId} width="250px" height="250"  alt="product"></img>
                                                    </div>)
                                            }
                                        </div>
                                </ul>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h2><a href="/product-home/">Products</a></h2>
                                    </div>
                            </div>
                            <div className="carousel-item">
                                <ul className="">
                                    <div className="row">
                                        {this.state.services.slice(0, 6).map(
                                            service =>
                                                <div className="small-box">
                                                    <img className="product-image" src={service.serviceImageId} width="250px" height="250"  alt="services"></img>
                                                </div>)
                                        }
                                    </div>
                                </ul>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h2><a href="/service-home/">Services</a></h2>
                                    </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
            </div>

        </section>
    </div>
    )}
}
export default HomeScreen;
