package com.sellzer.cart.service;

import com.sellzer.cart.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import com.sellzer.cart.entity.Cart;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

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

    public Cart findByCartId(String cartId) {
        //log.info("inside findCartById() method of CartService");
        return cartRepository.findByCartId(cartId);
    }


    public Map<String, Boolean> deleteCartById(String cartId)
    {
        Cart cart = cartRepository.findByCartId(cartId);
        Map<String, Boolean> response = new HashMap<>();

        if(cart == null) {
            //log.info("Cart not found for :: " + cartId);
            response.put("Deleted", Boolean.FALSE);
        } else {
            cartRepository.delete(cart);
            response.put("Deleted", Boolean.TRUE);
        }
        return response;
    }


    public Cart updateCartProducts(String cartId, String products) {
        Cart cart = cartRepository.findByCartId(cartId);
        if(cart == null) {
            return null;
        } else {
            ArrayList<String> newproducts = cart.getProducts();
            newproducts.add(products);
            //newproducts.remove(products);
            cart.setProducts(newproducts);
            return cartRepository.save(cart);
        }
    }

    public Cart updateCartServices(String cartId, String services) {
        Cart cart = cartRepository.findByCartId(cartId);
        if(cart == null) {
            return null;
        } else {
            ArrayList<String> newservices = cart.getServices();
            newservices.add(services);
            //newproducts.remove(products);
            cart.setServices(newservices);
            return cartRepository.save(cart);
        }
    }

    // HERE
    public Cart deleteProduct(String cartId, String products) {
        Cart cart = cartRepository.findByCartId(cartId);
        if(cart == null) {
            return null;
        } else {
            ArrayList<String> newproducts = cart.getProducts();
            newproducts.remove(products);
            cart.setProducts(newproducts);
            return cartRepository.save(cart);
        }
    }

    public Cart deleteService(String cartId, String services)
    {
        Cart cart = cartRepository.findByCartId(cartId);
        if(cart == null)
        {
            return null;
        }
        else{
            ArrayList<String> newservices = cart.getServices();
            newservices.remove(services);
            cart.setServices(newservices);
            return cartRepository.save(cart);
        }
    }


    public Cart findByUserId(String userId) {
        //log.info("inside findCartById() method of CartService");
        return cartRepository.findByUserId(userId);
    }
}