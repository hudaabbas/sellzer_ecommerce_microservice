package com.sellzer.service;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.sellzer.service.entity.ServiceJob;
import com.sellzer.service.service.ServiceService;
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
class ServiceMicroserviceApplicationTests {

	@MockBean
	private ServiceService service;

	@Autowired
	private MockMvc mockMvc;

	@Test
	@DisplayName("GET /services/1 success")
	void testGetServicesByIdSuccess() throws Exception {
		// Setup our mocked service
		ServiceJob services = new ServiceJob("1","name","type","image",150L,"provider","location");
		doReturn(services).when(service).findServiceByID("1");

		// Execute the GET request
		mockMvc.perform(get("/services/{id}","1"))
				// Validate the response code and content type
				.andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))

				// Validate the returned fields
				.andExpect(jsonPath("$.serviceID", is("1")))
				.andExpect(jsonPath("$.serviceName", is("name")))
				.andExpect(jsonPath("$.serviceType", is("type")))
				.andExpect(jsonPath("$.serviceImageId", is("image")))
				.andExpect(jsonPath("$.servicePrice", is(150)))
				.andExpect(jsonPath("$.serviceProvider", is("provider")))
				.andExpect(jsonPath("$.serviceLocation", is("location")));
	}

	@Test
	@DisplayName("GET /services/1 - Not Found")
	void testGetServicesByIdNotFound() throws Exception {
		// Setup our mocked service
		ServiceJob services = new ServiceJob();
		doReturn(services).when(service).findServiceByID("1");

		// Execute the GET request
		mockMvc.perform(get("/services/{id}", "1"))
				// Validate the response code
				.andExpect(jsonPath("$.serviceID").doesNotExist());
	}

	@Test
	@DisplayName("POST /services/")
	void testCreateServices() throws Exception {
		// Setup our mocked service
		ServiceJob serviceToPost = new ServiceJob("1","name","type","image",150L,"provider","location");
		ServiceJob serviceToReturn = new ServiceJob("1","name","type","image",150L,"provider","location");

		doReturn(serviceToReturn).when(service).saveService(any());

		// Execute the POST request
		mockMvc.perform(post("/services/")
						.contentType(MediaType.APPLICATION_JSON)
						.content(asJsonString(serviceToPost)))

				// Validate the response code and content type
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))

				// Validate the returned fields
				.andExpect(jsonPath("$.serviceID", is("1")))
				.andExpect(jsonPath("$.serviceName", is("name")))
				.andExpect(jsonPath("$.serviceType", is("type")))
				.andExpect(jsonPath("$.serviceImageId", is("image")))
				.andExpect(jsonPath("$.servicePrice", is(150)))
				.andExpect(jsonPath("$.serviceProvider", is("provider")))
				.andExpect(jsonPath("$.serviceLocation", is("location")));
	}

	static String asJsonString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
