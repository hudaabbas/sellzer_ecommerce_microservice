package com.sellzer.catalog.controller;

import com.sellzer.catalog.entity.Catalog;
import com.sellzer.catalog.repository.CatalogRepository;
import com.sellzer.catalog.service.CatalogService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.aggregation.VariableOperators;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.web.bind.annotation.RequestMethod.DELETE;

@RestController
@RequestMapping("/catalogs")
@Slf4j
@CrossOrigin(origins = "*")
public class CatalogController {
    @Autowired
    private CatalogService catalogService;
    @Autowired
    private CatalogRepository catalogRepository;
    @PostMapping("/")
    public Catalog saveCatalog(@RequestBody Catalog catalog){
        log.info("inside!");
        return catalogService.saveCatalog(catalog);
    }

    @GetMapping(value = "/")
    public List<Catalog> getAllCatalogs() {
        log.info("getAllCatalogs");
        return catalogRepository.findAll();
    }

    @GetMapping(value = "/ascendSort/")
    public List<Catalog> getAllCatalogsSortedPriceAscending() {
        log.info("getAllCatalogs");
        return catalogRepository.findAll(Sort.by("catalogItemPrice").ascending());
    }

    @GetMapping(value = "/descendSort/")
    public List<Catalog> getAllCatalogsSortedPriceDescending() {
        log.info("getAllCatalogs");
        return catalogRepository.findAll(Sort.by(Sort.Order.desc("catalogItemPrice")));
    }

    @GetMapping("/{id}")
    public Catalog findCatalogById(@PathVariable("id") String catalogId) {
        log.info("inside ;ol");
        return catalogService.findCatalogById(catalogId);
    }

    @GetMapping("/allProducts")
    public ArrayList<Catalog> findCatalogByIds(@RequestBody String[] catalogIds) {
        log.info("inside ;ol");
        ArrayList<Catalog> catalogs = new ArrayList<Catalog>();
        for(String catalogId: catalogIds) {
            catalogs.add(catalogService.findCatalogById(catalogId));
        }
        log.info(String.valueOf(catalogs));
        return catalogs;
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
