package com.sellzer.payment;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.assertj.core.api.Assertions.assertThat;
import com.sellzer.payment.controller.PaymentController;
import com.sellzer.payment.entity.Payment;
import com.sellzer.payment.repository.PaymentRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;


@SpringBootTest//(SpringBootTest.WebEnvironment.MOCK, classes = Application.class)
@AutoConfigureMockMvc
//@TestPropertySource(locations = "classpath:application-integrationtest.properties")
class PaymentServiceApplicationTests {

	@Autowired
	private MockMvc mvc;

	@Autowired
	private PaymentRepository repository;

	@Autowired
	private PaymentController controller;

	// write test cases here

	@Test
	void contextLoads() {
		assertThat(controller).isNotNull();
	}

	@Test
	public void postPayment_thenStatus200() throws Exception {
		Payment payment = new Payment("123",4093,12504,"debit");
		this.mvc.perform(post("/payments",payment))
				.contentType("application/json")
				.param("sendWelcomeMail", "true")
				.content(objectMapper.writeValueAsString(payment))
				.andDo(print())
				.andExpect(status().isOk());
				//.andExpect(content().string(containsString("180")));
	}

	@Test
	public void givenPayment_whenGetPayment_thenStatus200() throws Exception {
		this.mvc.perform(get("/payments/6234a95583e85e261b82d2d3"))
				.andDo(print())
				.andExpect(status().isOk());
		//.andExpect(content().string(containsString("180")));
	}

	@Test
	public void givenPayment_deletePayment() throws Exception {
		this.mvc.perform(get("/payments/6234a95583e85e261b82d2d3"))
				.andDo(print())
				.andExpect(status().isOk());
		//.andExpect(content().string(containsString("180")));
	}

	/*@Test
	public void givenPayment_whenGetPayment_thenStatus200() throws Exception {

		createTestEmployee("bob");

		mvc.perform(get("/payments/")
			.contentType(MediaType.APPLICATION_JSON))
			.andExpect(status().isOk())
			.andExpect(content()
			.contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
			.andExpect(jsonPath("$[0].name", is("bob")));
	}*/

}