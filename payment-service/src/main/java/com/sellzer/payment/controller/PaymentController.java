package com.sellzer.payment.controller;

import com.sellzer.payment.entity.Payment;
import com.sellzer.payment.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import lombok.extern.slf4j.Slf4j;

import java.util.Map;

@RestController
@RequestMapping("/payments")
@Slf4j
@CrossOrigin(origins = "*")
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

    @GetMapping("/orderId/{orderId}")
    public Payment[] findByOrderId(@PathVariable("orderId") String orderId) {
        log.info("inside findByOrderId() method of PaymentController");
        return paymentService.findByOrderId(orderId);
    }

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deletePayment(@PathVariable("id") String paymentId) {
        log.info("inside deletePayment() method of PaymentController");
        return paymentService.deletePayment(paymentId);
    }
}
