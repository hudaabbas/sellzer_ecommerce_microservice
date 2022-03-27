
import React, { Component } from 'react';
import {Redirect, Link, router } from 'react-router-dom';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Dropdown, DropdownToggle, DropdownItem, DropdownButton} from 'react-bootstrap';
import './../Login.css';
import CatalogService from '../Services/CatalogService';

class AddProductScreen extends React.Component {

constructor(props) {
  super(props);
  this.state={
    name: '',
    category:'',
    description:'',
    brand:'',
    image:'',
    price:'',
    size:'',
    errors: {},
  }
  this.handleChangeName= this.handleChangeName.bind(this);
  this.handleChangeCategory = this.handleChangeCategory.bind(this);
  this.handleChangeDescription = this.handleChangeDescription.bind(this);
  this.handleChangeBrand = this.handleChangeBrand.bind(this);
  this.handleChangeImage = this.handleChangeImage.bind(this);
  this.handleChangePrice = this.handleChangePrice.bind(this);
  this.handleChangeSize = this.handleChangeSize.bind(this);
  this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
}

handleChangeName(e) {
  this.setState({name:e.target.value});
}

handleChangeCategory(e) {
  this.setState({category:e.target.value});
}

handleChangeSize(e) {
    this.setState({size:e.target.value});
}

handleChangeBrand(e) {
    this.setState({brand:e.target.value});
}

handleChangePrice(e) {
    this.setState({price:e.target.value});
}

handleChangeDescription(e) {
    this.setState({description:e.target.value});
}

handleChangeImage(e) {
    this.setState({image:e.target.value});
}


submituserRegistrationForm(e) {
  e.preventDefault();
  if (this.validateForm()) {
    var data={
      "catalogName": this.state.name,
      "catalogCategory": this.state.category,
      "catalogDescription": this.state.description,
      "catalogBrand": this.state.brand,
      "imageId": this.state.image,
      "catalogItemPrice": this.state.price,
      "sizes": this.state.size,
      "quantity": 1,
      "catalogItemSubsided": false
    }

    console.log(data);
    CatalogService.addProduct(data).then((response) => {
      console.log(response);
      if(response.status = 200){
        localStorage.setItem('is_done', true);
        window.location.href = "/";
        console.log("Item added successfully");
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
    errors["name"] = "Please enter a name for your item.";
  }

  /*if (!this.state.category) {
    formIsValid = false;
    errors["category"] = "Please select a category for your item.";
  } */

  if (!this.state.description) {
    formIsValid = false;
    errors["description"] = "Please enter a description for your product.";
  }

  if (!this.state.image) {
    formIsValid = false;
    errors["image"] = "Please add an image link.";
  }

  if (!this.state.brand) {
    formIsValid = false;
    errors["brand"] = "Please enter the brand.";
  }

  if (!this.state.size) {
    formIsValid = false;
    errors["size"] = "Please enter the size.";
  }

  if (!this.state.price) {
    formIsValid = false;
    errors["price"] = "Please enter your desired price.";
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
        <Form method="post" name="userRegistrationForm" onSubmit= {this.submituserRegistrationForm} >
          <FormGroup>
            <div className="input-container">
              <Label for="exampleName">Product Name</Label>
              <Input type="name" name="name" id="exampleName" value={this.state.name} onChange={this.handleChangeName} placeholder="Enter the item name" />
              <div className="errorMsg">{this.state.errors.name}</div>
            </div>
          </FormGroup>
          <FormGroup>
            <div className="input-container">
                <Label for="exampleDescription">Product Description</Label>
                <Input type="name" name="password" id="exampleDescription" value={this.state.description} onChange={this.handleChangeDescription} placeholder="Enter a description" />
                <div className="errorMsg">{this.state.errors.description}</div>
            </div>
          </FormGroup>
          {/* <FormGroup>
          <div className="input-container">
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item value={this.state.category}>Apparel</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Shoes</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Electronics</Dropdown.Item>
            </DropdownButton>
            </div>
            </FormGroup> */}
            <FormGroup>
            <div className="input-container2">
                <select>
                    <option value={this.state.category} onChange={this.handleChangeCategory}>Apparel</option>
                    <option value={this.state.category} onChange={this.handleChangeCategory}> Shoes</option>
                    <option value={this.state.category} onChange={this.handleChangeCategory}> Jewelry</option>
                    <option value={this.state.category} onChange={this.handleChangeCategory}>Electronics</option>
                    <option value={this.state.category} onChange={this.handleChangeCategory}>Other</option>
                </select>
                <div className="errorMsg">{this.state.errors.category}</div>
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
                <Label for="exampleSize">Size</Label>
                <Input type="name" name="password" id="exampleSize" value={this.state.size} onChange={this.handleChangeSize} placeholder="Enter the size" />
                <div className="errorMsg">{this.state.errors.size}</div>
            </div>
          </FormGroup>
          <FormGroup>
            <div className="input-container">
                <Label for="examplePassword">Brand</Label>
                <Input type="name" name="password" id="examplePassword" value={this.state.brand} onChange={this.handleChangeBrand} placeholder="Enter the brand" />
                <div className="errorMsg">{this.state.errors.brand}</div>
            </div>
          </FormGroup>
          <FormGroup>
            <div className="input-container">
                <Label for="exampleImage">Image Link</Label>
                <Input type="name" name="password" id="exampleImage" value={this.state.image} onChange={this.handleChangeImage} placeholder="Attach a link to the product image" />
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
export default AddProductScreen;