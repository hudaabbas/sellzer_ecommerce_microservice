package com.sellzer.login.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Login")

public class Login {

    @Id
    // list properties here
    private String email;
    private String password;
    private Boolean verification;
    private Boolean subsidized;

}