package com.sellzer.cart.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.ArrayList; // import the ArrayList class

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
//Product and Service

//import org.springframework.boot.autoconfigure.domain.EntityScan;

//need to have access to Product microservice somehow???
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Cart")
public class Cart{
    @Id
    private String cartId;
    private String userId;
    private ArrayList<String> products = new ArrayList<>();  //string of productIds
    private ArrayList<String> services = new ArrayList<>(); //string of serviceIds
}

//connecting mongoDB to spring boot (java framework)
