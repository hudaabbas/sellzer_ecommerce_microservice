package com.sellzer.payment.service;

import com.sellzer.payment.entity.Payment;
import com.sellzer.payment.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.util.Map;

@Service
@Slf4j
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Payment savePayment(Payment payment) {
        log.info("inside savePayment() method of PaymentService");
        return paymentRepository.save(payment);
    }

    public Payment findPaymentById(String paymentId) {
        log.info("inside findPaymentById() method of PaymentService");
        return paymentRepository.findByPaymentId(paymentId);
    }

    public Map<String, Boolean> deletePayment(String paymentId) {
        log.info("inside deletePayment() method of PaymentService");
       Payment payment = paymentRepository.findByPaymentId(paymentId);
       Map<String, Boolean> response = new HashMap<>();
       if(payment == null) {
           log.info("Payment not found for :: " + paymentId);
           response.put("Deleted", Boolean.FALSE);
       } else {
           paymentRepository.delete(payment);
           response.put("Deleted", Boolean.TRUE);
       }
       return response;
    }

}
