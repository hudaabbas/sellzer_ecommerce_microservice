package com.sellzer.catalog.controller;

import com.sellzer.catalog.entity.Catalog;
import com.sellzer.catalog.repository.CatalogRepository;
import com.sellzer.catalog.service.CatalogService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.aggregation.VariableOperators;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.web.bind.annotation.RequestMethod.DELETE;

@RestController
@RequestMapping("/catalogs")
@Slf4j
public class CatalogController {
    @Autowired
    private CatalogService catalogService;
    private CatalogRepository catalogRepository;

    @PostMapping("/")
    public Catalog saveCatalog(@RequestBody Catalog catalog){
        log.info("inside!");
        return catalogService.saveCatalog(catalog);
    }

    @GetMapping("/{id}")
    public Catalog findCatalogById(@PathVariable("id") String catalogId) {
        log.info("inside ;ol");
        return catalogService.findCatalogById(catalogId);
    }


    @GetMapping("/price/{catalogItemPrice}")
    public Catalog[] findCatalogByCatalogItemPrice(@PathVariable("catalogItemPrice") double catalogItemPrice){
        log.info("inside find catalog by price in controller");
        return  catalogService.findCatalogByCatalogItemPrice(catalogItemPrice);
    }

    @GetMapping("/name/{catalogName}")
    public Catalog[] findCatalogByCatalogName(@PathVariable("catalogName") String catalogName){
        log.info("inside find catalog by name in controller");
        return  catalogService.findCatalogByCatalogName(catalogName);
    }

    @GetMapping("/category/{catalogCategory}")
    public Catalog[] findCatalogByCatalogCategory(@PathVariable("catalogCategory") String catalogCategory){
        log.info("inside find catalog by category in controller");
        return  catalogService.findCatalogByCatalogCategory(catalogCategory);
    }

    @GetMapping("/quantity/{quantity}")
    public Catalog[] findCatalogByQuantity(@PathVariable("quantity") Integer quantity){
        log.info("inside find catalog by category in controller");
        return  catalogService.findCatalogByQuantity(quantity);
    }

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deletePayment(@PathVariable("id") String catalogId) {
        log.info("inside deletePayment() method of PaymentService");
        return catalogService.deleteCatalog(catalogId);
    }


}
