package com.sellzer.login.service;

import com.sellzer.login.entity.Login;
import com.sellzer.login.repository.LoginRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import lombok.extern.slf4j.Slf4j;


@Service
@Slf4j
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public Login saveLogin(Login login)
    {
        //log.info("Inside saveDepartment method of LoginService");
        return loginRepository.save(login);
    }


    public Login findLoginByEmail(String email)
    {
        //log.info("Inside findLoginByEmail method of LoginService");
        return loginRepository.findByEmail(email);
    }


}
