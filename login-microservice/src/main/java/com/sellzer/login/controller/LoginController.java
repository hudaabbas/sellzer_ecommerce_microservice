package com.sellzer.login.controller;
import com.sellzer.login.entity.Login;

import com.sellzer.login.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import lombok.extern.slf4j.*;

@RestController
@RequestMapping("/logins")
@Slf4j
public class LoginController {

    @Autowired
    private LoginService loginService;


    @PostMapping("/")
    public Login saveLogin(@RequestBody Login login)
    {
        log.info("Inside saveLogin method of LoginController");
        return loginService.saveLogin(login);
    }


    @GetMapping("/{id}")
    public Login findLoginByEmail(@PathVariable("id") String email)
    {
        log.info("Inside findLoginByEmail method of LoginController");
        return loginService.findLoginByEmail(email);
    }


}
