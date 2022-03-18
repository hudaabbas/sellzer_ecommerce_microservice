package com.sellzer.payment.controller;

import com.sellzer.payment.entity.Payment;
import com.sellzer.payment.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/payments")
@Slf4j
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/")
    public Payment savePayment(@RequestBody Payment payment) {
        log.info("inside savePayment() method of PaymentController");
        return paymentService.savePayment(payment);
    }

    @GetMapping("/{id}")
    public Payment findPaymentById(@PathVariable("id") String paymentId) {
        log.info("inside findPaymentById() method of PaymentController");
        return paymentService.findPaymentById(paymentId);
    }
}
