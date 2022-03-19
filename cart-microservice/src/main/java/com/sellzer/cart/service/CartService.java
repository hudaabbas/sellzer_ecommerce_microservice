package com.sellzer.cart.service;

import com.sellzer.cart.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import com.sellzer.cart.entity.Cart;

@Service
@Slf4j
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public Cart saveCart(Cart cart)
    {
        //log.info("inside saveCart() method of CartService");
        return cartRepository.save(cart);
    }

    public Cart findCartById(String cartId) {
        //log.info("inside findCartById() method of CartService");
        return cartRepository.findByCartId(cartId);
    }
}