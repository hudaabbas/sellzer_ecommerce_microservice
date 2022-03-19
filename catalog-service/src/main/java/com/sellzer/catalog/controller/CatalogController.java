package com.sellzer.catalog.controller;

import com.sellzer.catalog.entity.Catalog;
import com.sellzer.catalog.service.CatalogService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/catalogs")
@Slf4j
public class CatalogController {
    @Autowired
    private CatalogService catalogService;

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
}
