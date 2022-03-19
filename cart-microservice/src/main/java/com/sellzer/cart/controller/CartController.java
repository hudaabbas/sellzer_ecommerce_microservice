package com.sellzer.cart.controller;

import com.sellzer.cart.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
import com.sellzer.cart.entity.Cart;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/carts")
@Slf4j
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
    public Cart findCartById(@PathVariable("id") String cartId) {
        //log.info("inside findCartById() method of CartController");
        return cartservice.findCartById(cartId);
    }
}