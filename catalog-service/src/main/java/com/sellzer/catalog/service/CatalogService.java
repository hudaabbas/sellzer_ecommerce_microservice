package com.sellzer.catalog.service;

import com.sellzer.catalog.entity.Catalog;
import com.sellzer.catalog.repository.CatalogRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
