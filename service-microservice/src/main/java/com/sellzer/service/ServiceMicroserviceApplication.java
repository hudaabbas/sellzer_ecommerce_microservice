package com.sellzer.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class ServiceMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServiceMicroserviceApplication.class, args);
	}

}
