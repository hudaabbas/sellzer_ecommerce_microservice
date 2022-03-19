package com.sellzer.service.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.sellzer.service.entity.ServiceJob;

@Repository
public interface ServiceRepository extends MongoRepository <ServiceJob, String>{

    ServiceJob findByServiceID(String serviceID);
}
