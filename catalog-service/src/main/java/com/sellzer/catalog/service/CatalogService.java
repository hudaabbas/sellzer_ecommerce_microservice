package com.sellzer.catalog.service;

import com.sellzer.catalog.entity.Catalog;
import com.sellzer.catalog.repository.CatalogRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@Slf4j
public class CatalogService {
    @Autowired
    private CatalogRepository catalogRepository;

    public Catalog saveCatalog(Catalog catalog) {
        log.info("inside saveCatalog() method of CataslogServoce");
        return catalogRepository.save(catalog);
    }

    public Catalog findCatalogById(String catalogId) {
        log.info("inside findCatalogById() method of CataslogServoce");
        return catalogRepository.findByCatalogId(catalogId);
    }

    public Catalog[] findCatalogByCatalogItemPrice(double catalogItemPrice){
        log.info("inside findCatalogByPrice() method of CataslogServoce");
        return catalogRepository.findCatalogByCatalogItemPrice(catalogItemPrice);
    }

    public Catalog[] findCatalogByCatalogName(String catalogName) {
        log.info("inside findCatalogById() method of CataslogServoce");
        return catalogRepository.findCatalogByCatalogName(catalogName);
    }

    public Catalog[] findCatalogByCatalogCategory(String catalogCategory) {
        log.info("inside findCatalogById() method of CataslogServoce");
        return catalogRepository.findCatalogByCatalogCategory(catalogCategory);
    }

    public Catalog[] findCatalogByQuantity(Integer quantity) {
        log.info("inside findCatalogById() method of CataslogServoce");
        return catalogRepository.findCatalogByQuantity(quantity);
    }

    public Map<String, Boolean> deleteCatalog(String catalogId) {
        Catalog catalog = catalogRepository.findByCatalogId(catalogId);
        Map<String, Boolean> response = new HashMap<>();
        if(catalog == null) {
            log.info("Payment not found for :: " + catalogId);
            response.put("Deleted", Boolean.FALSE);
        } else {
            catalogRepository.delete(catalog);
            response.put("Deleted", Boolean.TRUE);
        }
        return response;
    }

}
