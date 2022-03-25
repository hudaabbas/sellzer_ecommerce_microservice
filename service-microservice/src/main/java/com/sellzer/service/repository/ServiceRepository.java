package com.sellzer.service.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.sellzer.service.entity.ServiceJob;

@Repository
public interface ServiceRepository extends MongoRepository <ServiceJob, String>{

    ServiceJob findByServiceID(String serviceID);
    ServiceJob[] findServiceByServiceName(String serviceName);
    ServiceJob[] findServiceByServiceType(String serviceCategory);
    ServiceJob[] findServiceByServicePrice(double servicePrice);
    ServiceJob[] findServiceByServiceProvider(String serviceProvider);
    ServiceJob[] findServiceByServiceLocation(String serviceLocation);
}
