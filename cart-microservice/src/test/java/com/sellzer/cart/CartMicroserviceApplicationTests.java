package com.sellzer.cart;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.sellzer.cart.entity.Cart;
import com.sellzer.cart.service.CartService;
import org.assertj.core.util.Lists;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;

import static org.mockito.Mockito.doReturn;
import static org.mockito.ArgumentMatchers.any;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import static org.hamcrest.Matchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class CartMicroserviceApplicationTests {

	@MockBean
	private CartService service;

	@Autowired
	private MockMvc mockMvc;

	@Test
	@DisplayName("GET /carts/1 success")
	void testGetCartsByIdSuccess() throws Exception {
		// Setup our mocked service
		Cart cart = new Cart("1","john",new ArrayList<String>(),new ArrayList<String>());
		doReturn(cart).when(service).findByCartId("1");

		// Execute the GET request
		mockMvc.perform(get("/carts/{id}","1"))
				// Validate the response code and content type
				.andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))

				// Validate the returned fields
				.andExpect(jsonPath("$.cartId", is("1")))
				.andExpect(jsonPath("$.userId", is("john")))
				.andExpect(jsonPath("$.products").isArray())
				.andExpect(jsonPath("$.services").isArray());
	}

	@Test
	@DisplayName("GET /carts/1 - Not Found")
	void testGetWidgetByIdNotFound() throws Exception {
		// Setup our mocked service
		Cart cart = new Cart();
		doReturn(cart).when(service).findByCartId("1");

		// Execute the GET request
		mockMvc.perform(get("/carts/{id}", "1"))
				// Validate the response code
				.andExpect(jsonPath("$.cartId").doesNotExist());
	}

	@Test
	@DisplayName("POST /carts/")
	void testCreateWidget() throws Exception {
		// Setup our mocked service
		Cart cartToPost = new Cart("1","john",new ArrayList<String>(),new ArrayList<String>());
		Cart cartToReturn = new Cart("1","john",new ArrayList<String>(),new ArrayList<String>());

		doReturn(cartToReturn).when(service).saveCart(any());

		// Execute the POST request
		mockMvc.perform(post("/carts/")
						.contentType(MediaType.APPLICATION_JSON)
						.content(asJsonString(cartToPost)))

				// Validate the response code and content type
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))

				// Validate the returned fields
				.andExpect(jsonPath("$.cartId", is("1")))
				.andExpect(jsonPath("$.userId", is("john")))
				.andExpect(jsonPath("$.products").isArray())
				.andExpect(jsonPath("$.services").isArray());
	}

	static String asJsonString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
