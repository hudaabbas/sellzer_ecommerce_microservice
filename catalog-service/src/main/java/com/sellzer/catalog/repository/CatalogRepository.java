package com.sellzer.catalog.repository;

import com.sellzer.catalog.entity.Catalog;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CatalogRepository extends MongoRepository<Catalog, String> {
    Catalog findByCatalogId(String catalogId);
    Catalog[] findCatalogByCatalogItemPrice(double catalogItemPrice);
    Catalog findCatalogByCatalogName(String catalogName);
    Catalog findCatalogByCatalogCategory(String catalogCategory);
    Catalog findCatalogByQuantity(Integer quantity);
}
