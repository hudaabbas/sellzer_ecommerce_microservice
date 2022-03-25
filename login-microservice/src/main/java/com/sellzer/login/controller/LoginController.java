package com.sellzer.login.controller;
import com.sellzer.login.entity.Login;

import com.sellzer.login.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import lombok.extern.slf4j.*;

@RestController
@RequestMapping("/logins")
@Slf4j
@CrossOrigin(origins = "*")
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
