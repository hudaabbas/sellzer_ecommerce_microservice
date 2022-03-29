package com.sellzer.catalog;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.sellzer.catalog.entity.Catalog;
import com.sellzer.catalog.service.CatalogService;
import org.assertj.core.util.Lists;
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
class CatalogServiceApplicationTests {

	@MockBean
	private CatalogService service;

	@Autowired
	private MockMvc mockMvc;

	@Test
	@DisplayName("GET /catalogs/1 success")
	void testGetCatalogsByIdSuccess() throws Exception {
		// Setup our mocked service
		Catalog catalog = new Catalog("1","Air Max","shoes","fun","nike","image","image2","Large","video",(int)5,34.00,false);
		doReturn(catalog).when(service).findCatalogById("1");

		// Execute the GET request
		mockMvc.perform(get("/catalogs/{id}","1"))
				// Validate the response code and content type
				.andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))

				// Validate the returned fields
				.andExpect(jsonPath("$.catalogId", is("1")))
				.andExpect(jsonPath("$.catalogName", is("Air Max")))
				.andExpect(jsonPath("$.catalogCategory", is("shoes")))
				.andExpect(jsonPath("$.catalogDescription", is("fun")))
				.andExpect(jsonPath("$.catalogBrand", is("nike")))
				.andExpect(jsonPath("$.imageId", is("image")))
				.andExpect(jsonPath("$.imageId2", is("image2")))
				.andExpect(jsonPath("$.videoId", is("video")))
				.andExpect(jsonPath("$.sizes", is("Large")))
				.andExpect(jsonPath("$.quantity", is(5)))
				.andExpect(jsonPath("$.catalogItemPrice", is(34.0)))
				.andExpect(jsonPath("$.catalogItemSubsided", is(false)));
	}

	@Test
	@DisplayName("GET all /catalogs/ success")
	void testGetCatalogsAll() throws Exception {
		// Setup our mocked service
		Catalog catalog1 = new Catalog("1","Air Max","shoes","fun","nike","image","image2","Large","video",5,34.00,false);
		Catalog catalog2 = new Catalog("2","Air Max","shirt","nice","adidas","image","image2","Large","video",2,84.00,true);
		doReturn(Lists.newArrayList(catalog1, catalog2)).when(service).getAllCatalogs();

		// Execute the GET request
		mockMvc.perform(get("/catalogs/"))
				// Validate the response code and content type
				.andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))

				// Validate the returned fields
				.andExpect(jsonPath("$", hasSize(2)))
				.andExpect(jsonPath("$[0].catalogId", is("1")))
				.andExpect(jsonPath("$[0].catalogName", is("Air Max")))
				.andExpect(jsonPath("$[0].catalogCategory", is("shoes")))
				.andExpect(jsonPath("$[0].catalogDescription", is("fun")))
				.andExpect(jsonPath("$[0].catalogBrand", is("nike")))
				.andExpect(jsonPath("$[0].imageId", is("image")))
				.andExpect(jsonPath("$[0].imageId2", is("image2")))
				.andExpect(jsonPath("$[0].videoId", is("video")))
				.andExpect(jsonPath("$[0].sizes", is("Large")))
				.andExpect(jsonPath("$[0].quantity", is(5)))
				.andExpect(jsonPath("$[0].catalogItemPrice", is(34.0)))
				.andExpect(jsonPath("$[0].catalogItemSubsided", is(false)))
				.andExpect(jsonPath("$[1].catalogId", is("2")))
				.andExpect(jsonPath("$[1].catalogName", is("Air Max")))
				.andExpect(jsonPath("$[1].catalogCategory", is("shirt")))
				.andExpect(jsonPath("$[1].catalogDescription", is("nice")))
				.andExpect(jsonPath("$[1].catalogBrand", is("adidas")))
				.andExpect(jsonPath("$[1].imageId", is("image")))
				.andExpect(jsonPath("$[1].imageId2", is("image2")))
				.andExpect(jsonPath("$[1].videoId", is("video")))
				.andExpect(jsonPath("$[1].sizes", is("Large")))
				.andExpect(jsonPath("$[1].quantity", is(2)))
				.andExpect(jsonPath("$[1].catalogItemPrice", is(84.0)))
				.andExpect(jsonPath("$[1].catalogItemSubsided", is(true)));
	}

	@Test
	@DisplayName("GET /catalogs/1 - Not Found")
	void testGetCatalogsByIdNotFound() throws Exception {
		// Setup our mocked service
		Catalog catalog = new Catalog();
		doReturn(catalog).when(service).findCatalogById("1");

		// Execute the GET request
		mockMvc.perform(get("/catalogs/{id}", "1"))
				// Validate the response code
				.andExpect(jsonPath("$.catalogId").doesNotExist());
	}

	@Test
	@DisplayName("POST /catalogs/")
	void testCreateCatalogs() throws Exception {
		// Setup our mocked service
		Catalog catalogToPost = new Catalog("1","Air Max","shoes","fun","nike","image","image2","Large","video",5,34.00,false);
		Catalog catalogToReturn = new Catalog("1","Air Max","shoes","fun","nike","image","image2","Large","video",5,34.00,false);

		doReturn(catalogToReturn).when(service).saveCatalog(any());

		// Execute the POST request
		mockMvc.perform(post("/catalogs/")
						.contentType(MediaType.APPLICATION_JSON)
						.content(asJsonString(catalogToPost)))

				// Validate the response code and content type
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))

				// Validate the returned fields
				.andExpect(jsonPath("$.catalogId", is("1")))
				.andExpect(jsonPath("$.catalogName", is("Air Max")))
				.andExpect(jsonPath("$.catalogCategory", is("shoes")))
				.andExpect(jsonPath("$.catalogDescription", is("fun")))
				.andExpect(jsonPath("$.catalogBrand", is("nike")))
				.andExpect(jsonPath("$.imageId", is("image")))
				.andExpect(jsonPath("$.imageId2", is("image2")))
				.andExpect(jsonPath("$.videoId", is("video")))
				.andExpect(jsonPath("$.sizes", is("Large")))
				.andExpect(jsonPath("$.quantity", is(5)))
				.andExpect(jsonPath("$.catalogItemPrice", is(34.0)))
				.andExpect(jsonPath("$.catalogItemSubsided", is(false)));
	}

	static String asJsonString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
