package com.sellzer.eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
// MICROSERVICES: @EnableEurekaClient


/*
service discovery done through eureka, would perform client-side load balancing
would only write: http://services/... instead of localhost:9002/services...


add an @bean to the services for calling rest template:

@Bean
@LoadBalanced
RestTemplate restTemplate() {
	return new RestTemplate();
}
*/

@EnableEurekaServer
public class EurekaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(EurekaServerApplication.class, args);
	}

}
