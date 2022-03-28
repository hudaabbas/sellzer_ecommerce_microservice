package com.sellzer.cart.controller;

import com.sellzer.cart.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
import com.sellzer.cart.entity.Cart;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/carts")
@Slf4j
@CrossOrigin(origins = "*")
public class CartController {
    @Autowired
    private CartService cartservice;

    @PostMapping("/")
    public Cart saveCart(@RequestBody Cart cart)
    {
        //log.info("inside saveCart() method of CartController");
        return cartservice.saveCart(cart);
    }

    @GetMapping("/{id}")
    public Cart findByCartId(@PathVariable("id") String cartId) {
        //log.info("inside findCartById() method of CartController");
        return cartservice.findByCartId(cartId);
    }

    @GetMapping("/userId/{id}")
    public Cart findByUserId(@PathVariable("id") String userId) {
        //log.info("inside findCartById() method of CartController");
        return cartservice.findByUserId(userId);
    }

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteCartById(@PathVariable("id") String cartId) {
        return cartservice.deleteCartById(cartId);
    }

    //updating Cart by adding new product
    @PutMapping("/products/{id}")
    public Cart updateProduct(@PathVariable("id") String cartId, @RequestBody String products)
    {
        return cartservice.updateCartProducts(cartId, products);
    }

    //updating Cart by adding new service
    @PutMapping("/services/{id}")
    public Cart updateService(@PathVariable("id") String cartId, @RequestBody String services)
    {
        return cartservice.updateCartServices(cartId, services);
    }

    //updating Cart by deleting a product from cart
    @DeleteMapping ("/products/{id}")
    public Cart deleteProductCart(@PathVariable("id") String cartId, @RequestBody String products)
    {
        return cartservice.deleteProduct(cartId, products);
    }

    //updating Cart by deleting a service from cart
    @DeleteMapping ("/services/{id}")
    public Cart deleteServiceCart(@PathVariable("id") String cartId, @RequestBody String services)
    {
        return cartservice.deleteService(cartId, services);
    }

    @PostMapping("/productExists/{id}")
    public Boolean findIfProductExistsByProductId(@PathVariable("id") String userId, @RequestBody String productId) {
        log.info("inside ;ol");
        Cart cart = findByUserId(userId);
        ArrayList<String> products = cart.getProducts();
        return products.contains(productId);
    }

}

    /*  Adding/updating a product/service in the cart
        (add ID to array or update service/product using the ID) */



