package com.sellzer.payment;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.sellzer.payment.entity.Payment;
import com.sellzer.payment.service.PaymentService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.doReturn;
import static org.mockito.ArgumentMatchers.any;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import static org.hamcrest.Matchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class PaymentServiceApplicationTests {

	@MockBean
	private PaymentService service;

	@Autowired
	private MockMvc mockMvc;

	@Test
	@DisplayName("GET /payments/1 success")
	void testGetPaymentsByIdSuccess() throws Exception {
		// Setup our mocked service
		Payment payment1 = new Payment("1d","1","1","debit","100");
		doReturn(payment1).when(service).findPaymentById("1d");

		// Execute the GET request
		mockMvc.perform(get("/payments/{id}","1d"))
				// Validate the response code and content type
				.andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))

				// Validate the returned fields
				.andExpect(jsonPath("$.paymentId", is("1d")))
				.andExpect(jsonPath("$.orderId", is("1")))
				.andExpect(jsonPath("$.customerId", is("1")))
				.andExpect(jsonPath("$.paymentType", is("debit")))
				.andExpect(jsonPath("$.total", is("100")));
	}

	@Test
	@DisplayName("GET /payments/1 - Not Found")
	void testGetWidgetByIdNotFound() throws Exception {
		// Setup our mocked service
		Payment payment = new Payment();
		doReturn(payment).when(service).findPaymentById("1");

		// Execute the GET request
		mockMvc.perform(get("/payments/{id}", "1"))
				// Validate the response code
				.andExpect(jsonPath("$[0].orderId").doesNotExist())
				.andExpect(jsonPath("$[0].customerId").doesNotExist())
				.andExpect(jsonPath("$[0].paymentType").doesNotExist())
				.andExpect(jsonPath("$[0].total").doesNotExist());
	}

	@Test
	@DisplayName("POST /rest/widget")
	void testCreateWidget() throws Exception {
		// Setup our mocked service
		Payment paymentToPost = new Payment("id","order","user","debit","100");
		Payment paymentToReturn = new Payment("id","order","user","debit","100");
		doReturn(paymentToReturn).when(service).savePayment(any());

		// Execute the POST request
		mockMvc.perform(post("/payments/")
						.contentType(MediaType.APPLICATION_JSON)
						.content(asJsonString(paymentToPost)))

				// Validate the response code and content type
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))

				// Validate headers
				//.andExpect(header().string(HttpHeaders.LOCATION, "/rest/widget/1"))
				//.andExpect(header().string(HttpHeaders.ETAG, "\"1\""))

				// Validate the returned fields
				.andExpect(jsonPath("$.paymentId", is("id")))
				.andExpect(jsonPath("$.orderId", is("order")))
				.andExpect(jsonPath("$.customerId", is("user")))
				.andExpect(jsonPath("$.paymentType", is("debit")))
				.andExpect(jsonPath("$.total", is("100")));
	}

	/*@Test
	@DisplayName("PUT /rest/widget/1")
	void testUpdateWidget() throws Exception {
		// Setup our mocked service
		Widget widgetToPut = new Widget("New Widget", "This is my widget");
		Widget widgetToReturnFindBy = new Widget(1L, "New Widget", "This is my widget", 2);
		Widget widgetToReturnSave = new Widget(1L, "New Widget", "This is my widget", 3);
		doReturn(Optional.of(widgetToReturnFindBy)).when(service).findById(1L);
		doReturn(widgetToReturnSave).when(service).save(any());

		// Execute the POST request
		mockMvc.perform(put("/rest/widget/{id}", 1l)
						.contentType(MediaType.APPLICATION_JSON)
						.header(HttpHeaders.IF_MATCH, 2)
						.content(asJsonString(widgetToPut)))

				// Validate the response code and content type
				.andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))

				// Validate headers
				.andExpect(header().string(HttpHeaders.LOCATION, "/rest/widget/1"))
				.andExpect(header().string(HttpHeaders.ETAG, "\"3\""))

				// Validate the returned fields
				.andExpect(jsonPath("$.id", is(1)))
				.andExpect(jsonPath("$.name", is("New Widget")))
				.andExpect(jsonPath("$.description", is("This is my widget")))
				.andExpect(jsonPath("$.version", is(3)));
	}*/

	static String asJsonString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}