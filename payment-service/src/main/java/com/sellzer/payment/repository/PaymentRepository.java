package com.sellzer.payment.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.sellzer.payment.entity.Payment;

@Repository

public interface PaymentRepository extends MongoRepository<Payment, String> {
    Payment findByPaymentId(String paymentId);
    Payment[] findByOrderId(String orderId);
}


