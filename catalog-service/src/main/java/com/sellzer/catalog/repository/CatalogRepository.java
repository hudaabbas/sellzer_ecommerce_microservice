package com.sellzer.catalog.repository;

import com.sellzer.catalog.entity.Catalog;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CatalogRepository extends MongoRepository<Catalog, String> {
    Catalog findByCatalogId(String catalogId);
}
