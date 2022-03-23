package com.sellzer.login.service;

import com.sellzer.login.entity.Login;
import com.sellzer.login.repository.LoginRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.util.Map;


@Service
@Slf4j
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public Login saveLogin(Login login)
    {
        log.info("Inside saveDepartment method of LoginService");
        return loginRepository.save(login);
    }


    public Login findLoginByEmail(String email)
    {
        log.info("Inside findLoginByEmail method of LoginService");
        return loginRepository.findByEmail(email);
    }


    public Login findLoginById(String loginId) {
        log.info("Inside findLoginByLoginId method of LoginService");
        return loginRepository.findByLoginId(loginId);
    }

    public Map<String, Boolean> deleteLoginById(String loginId) {
        log.info("Inside deleteLoginById method of LoginService");

        Login login = loginRepository.findByLoginId(loginId);
        Map<String, Boolean> response = new HashMap<>();
        if (login == null) {
            log.info("User not found for :: " + loginId);
            response.put("Deleted", Boolean.FALSE);
        } else {
            loginRepository.delete(login);
            response.put("Deleted", Boolean.TRUE);
        }
        return response;
    }

}
