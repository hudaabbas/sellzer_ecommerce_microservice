
import React, { Component } from 'react';
import {Redirect, Link, router } from 'react-router-dom';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Dropdown, DropdownToggle, DropdownItem, DropdownButton} from 'react-bootstrap';
import './../Login.css';
import ServiceJobService from '../Services/ServiceJobService';

class AddServiceScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            name: '',
            type: '',
            image:'',
            price:'',
            provider:'',
            location:'',
            errors: {}
        }
        this.handleChangeName= this.handleChangeName.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeProvider = this.handleChangeProvider.bind(this);
        this.submitService = this.submitService.bind(this);
    }

    handleChangeName(e) {
        this.setState({name:e.target.value});
    }

    handleChangeType(e) {
        this.setState({type:e.target.value});
    }

    handleChangeImage(e) {
        this.setState({image:e.target.value});
    }

    handleChangePrice(e) {
        this.setState({price:e.target.value});
    }

    handleChangeProvider(e) {
        this.setState({provider:e.target.value});
    }

    handleChangeLocation(e) {
        this.setState({location:e.target.value});
    }


    submitService(e) {
        e.preventDefault();
        if (this.validateForm()) {
            var data={
                "serviceName": this.state.name,
                "serviceType": this.state.type,
                "servicePrice": this.state.price,
                "serviceImageId": this.state.image,
                "serviceProvider": this.state.provider,
                "serviceLocation": this.state.location,
            }

            console.log(data);
            ServiceJobService.addService(data).then((response) => {
                console.log(response);
                if(response.status = 200){
                    localStorage.setItem('is_done', true);
                    window.location.href = "/service-home/";
                    console.log("Service added successfully");
                }else{
                    alert(response.statusText);
                }
            }).catch(function (error) {
                console.log(error);
            });

        }
    }

    validateForm() {
        let errors = {};
        let formIsValid = true;

        if (!this.state.name) {
            formIsValid = false;
            errors["name"] = "Please enter a name for your service.";
        }

        /*if (!this.state.category) {
          formIsValid = false;
          errors["category"] = "Please select a category for your item.";
        } */

        if (!this.state.type) {
            formIsValid = false;
            errors["type"] = "Please enter a type for your service.";
        }

        if (!this.state.image) {
            formIsValid = false;
            errors["image"] = "Please add an image link.";
        }

        if (!this.state.price) {
            formIsValid = false;
            errors["price"] = "Please enter the brand.";
        }

        if (!this.state.provider) {
            formIsValid = false;
            errors["provider"] = "Please enter the provider.";
        }

        if (!this.state.location) {
            formIsValid = false;
            errors["location"] = "Please enter your location.";
        }

        this.setState({
            errors: errors
        });

        return formIsValid;
    }

    onChangeColor() {
        console.log("tag");
    }

    render() {
        return (
            <div>
                <div className="form">
                    <Form method="post" name="userRegistrationForm" onSubmit= {this.submitService} >
                        <FormGroup>
                            <div className="input-container">
                                <Label for="exampleName">Service Name</Label>
                                <Input type="name" name="name" id="exampleName" value={this.state.name} onChange={this.handleChangeName} placeholder="Enter the service name" />
                                <div className="errorMsg">{this.state.errors.name}</div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="input-container">
                                <Label for="exampleType">Service Type</Label>
                                <Input type="name" name="password" id="exampleDescription" value={this.state.type} onChange={this.handleChangeType} placeholder="Enter a type" />
                                <div className="errorMsg">{this.state.errors.type}</div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="input-container">
                                <Label for="examplePrice">Price ($)</Label>
                                <Input type="number" name="password" id="examplePrice" value={this.state.price} onChange={this.handleChangePrice} placeholder="Enter your desired price" />
                                <div className="errorMsg">{this.state.errors.price}</div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="input-container">
                                <Label for="exampleSize">Provider</Label>
                                <Input type="name" name="password" id="exampleProvider" value={this.state.provider} onChange={this.handleChangeProvider} placeholder="Enter your name" />
                                <div className="errorMsg">{this.state.errors.provider}</div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="input-container">
                                <Label for="examplePassword">Location</Label>
                                <Input type="name" name="password" id="exampleLocation" value={this.state.location} onChange={this.handleChangeLocation} placeholder="Enter the location" />
                                <div className="errorMsg">{this.state.errors.location}</div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="input-container">
                                <Label for="exampleImage">Image Link</Label>
                                <Input type="name" name="password" id="exampleImage" value={this.state.image} onChange={this.handleChangeImage} placeholder="Attach a link to the service image" />
                                <div className="errorMsg">{this.state.errors.image}</div>
                            </div>
                        </FormGroup>
                        <div className="input-container">
                            <Button type="submit" className="btn btn-login">Submit</Button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}
export default AddServiceScreen;