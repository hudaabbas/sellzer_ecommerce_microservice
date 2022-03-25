package com.sellzer.login.repository;

import com.sellzer.login.entity.Login;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;



@Repository
public interface LoginRepository extends MongoRepository <Login, String> {

    Login findByEmail (String email);

    Login findByLoginId(String loginId);

    // boolean deleteByLoginId(String loginId);
}
