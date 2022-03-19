package com.sellzer.cart.repository;

import com.sellzer.cart.entity.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends MongoRepository<Cart, String> 
{
    Cart findByCartId(String cartId);
}
