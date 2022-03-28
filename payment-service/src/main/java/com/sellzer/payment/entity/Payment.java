package com.sellzer.payment.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Payments")
public class Payment{

    @Id
    private String paymentId;
    private String orderId;
    private String customerId;
    private String paymentType;
    private String total;
}
