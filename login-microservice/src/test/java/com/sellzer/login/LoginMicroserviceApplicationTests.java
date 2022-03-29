package com.sellzer.login;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.sellzer.login.entity.Login;
import com.sellzer.login.service.LoginService;
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
class LoginMicroserviceApplicationTests {

	@MockBean
	private LoginService service;

	@Autowired
	private MockMvc mockMvc;

	@Test
	@DisplayName("GET /logins/1 success")
	void testGetLoginsByIdSuccess() throws Exception {
		// Setup our mocked service
		Login login = new Login("1","john@email.com","password",true,false);
		doReturn(login).when(service).findLoginById("1");

		// Execute the GET request
		mockMvc.perform(get("/logins/{id}","1"))
				// Validate the response code and content type
				.andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))

				// Validate the returned fields
				.andExpect(jsonPath("$.loginId", is("1")))
				.andExpect(jsonPath("$.email", is("john@email.com")))
				.andExpect(jsonPath("$.password", is("password")))
				.andExpect(jsonPath("$.verification").isBoolean())
				.andExpect(jsonPath("$.subsidized", is(false)));
	}

	@Test
	@DisplayName("GET /logins/1 - Not Found")
	void testGetLoginByIdNotFound() throws Exception {
		// Setup our mocked service
		Login login = new Login();
		doReturn(login).when(service).findLoginById("1");

		// Execute the GET request
		mockMvc.perform(get("/logins/{id}", "1"))
				// Validate the response code
				.andExpect(jsonPath("$.loginId").doesNotExist());
	}

	@Test
	@DisplayName("POST /logins/")
	void testCreateLogin() throws Exception {
		// Setup our mocked service
		Login loginToPost = new Login("1","john@email.com","password",true,false);
		Login loginToReturn = new Login("1","john@email.com","password",true,false);


		doReturn(loginToReturn).when(service).saveLogin(any());

		// Execute the POST request
		mockMvc.perform(post("/logins/")
						.contentType(MediaType.APPLICATION_JSON)
						.content(asJsonString(loginToPost)))

				// Validate the response code and content type
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))

				// Validate the returned fields
				.andExpect(jsonPath("$.loginId", is("1")))
				.andExpect(jsonPath("$.email", is("john@email.com")))
				.andExpect(jsonPath("$.password", is("password")))
				.andExpect(jsonPath("$.verification").isBoolean())
				.andExpect(jsonPath("$.subsidized", is(false)));
	}

	static String asJsonString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
