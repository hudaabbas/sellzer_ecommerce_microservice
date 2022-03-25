package com.sellzer.login.controller;
import com.sellzer.login.entity.Login;

import com.sellzer.login.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.extern.slf4j.*;

import java.util.Map;

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


    @GetMapping("/email/{email}")
    public Login findLoginByEmail(@PathVariable("email") String email)
    {
        log.info("Inside findLoginByEmail method of LoginController");
        return loginService.findLoginByEmail(email);
    }

    @GetMapping("/{id}")
    public Login findLoginById(@PathVariable("id") String loginId)
    {
        log.info("Inside findLoginByLoginId method of LoginController");
        return loginService.findLoginById(loginId);
    }


    @DeleteMapping("/delete/{id}")
    public Map<String, Boolean> deleteLoginById(@PathVariable("id") String loginId)
    {
        log.info("Inside deleteLoginById method of LoginController");
        return loginService.deleteLoginById(loginId);
    }

    @PutMapping("/verification/{id}")
    public Object updateLoginVerification(@PathVariable(value = "id") String loginId, @RequestBody Login login){

        Login user = loginService.findLoginById(loginId);

//        Boolean result = false;
        if(user == null)
        {
            String message = "User not found for :: " + loginId;
            log.info("User not found for :: " + loginId);
            return message;
        }
        else
        {
            user.setVerification(login.getVerification());
            final Login updatedUser = loginService.saveLogin(user);
            return ResponseEntity.ok(updatedUser);

        }
    }


    @PutMapping("/subsidization/{id}")
    public Object updateLoginSubsidization(@PathVariable(value = "id") String loginId, @RequestBody Login login) {

        Login user = loginService.findLoginById(loginId);

//        Boolean result = false;
        if (user == null) {
            String message = "User not found for :: " + loginId;
            log.info("User not found for :: " + loginId);
            return message;
        } else {
            user.setSubsidized(login.getSubsidized());
            final Login updatedUser = loginService.saveLogin(user);
            return ResponseEntity.ok(updatedUser);

        }
    }


    @PutMapping("/password/{id}")
    public Object updateLoginPassword(@PathVariable(value = "id") String loginId, @RequestBody Login login){

        Login user = loginService.findLoginById(loginId);

//        Boolean result = false;
        if(user == null)
        {
            String message = "User not found for :: " + loginId;
            log.info("User not found for :: " + loginId);
            return message;
        }
        else
        {
            user.setPassword(login.getPassword());
            final Login updatedUser = loginService.saveLogin(user);
            return ResponseEntity.ok(updatedUser);

        }
    }


}
