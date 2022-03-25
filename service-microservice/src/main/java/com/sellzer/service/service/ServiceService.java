package com.sellzer.service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;

import com.sellzer.service.entity.ServiceJob;
import com.sellzer.service.repository.ServiceRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.HashMap;
import java.util.Map;


@Service
@Slf4j
public class ServiceService{
    @Autowired
    private ServiceRepository serviceRepository;

    public ServiceJob saveService(ServiceJob serviceInput) {
        log.info("Inside saveService of ServiceService");
        return serviceRepository.save(serviceInput);
    }

    public ServiceJob findServiceByID(String serviceID) {
        log.info("Inside saveService of ServiceService");
        return serviceRepository.findByServiceID(serviceID);
    }

    public ServiceJob[] findServiceByServiceName(String serviceName) {
        log.info("inside findServiceByServiceName method of serviceService");
        return serviceRepository.findServiceByServiceName(serviceName);
    }

    public ServiceJob[] findServiceByServiceType(String serviceCategory) {
        log.info("inside findServiceByServiceType method of serviceService");
        return serviceRepository.findServiceByServiceType(serviceCategory);
    }

    public ServiceJob[] findServiceByServicePrice(double servicePrice){
        log.info("inside findServiceByServicePrice method of serviceService");
        return serviceRepository.findServiceByServicePrice(servicePrice);
    }

    public ServiceJob[] findServiceByServiceProvider(String serviceProvider) {
        log.info("inside findServiceByProvider method of serviceService");
        return serviceRepository.findServiceByServiceProvider(serviceProvider);
    }

    public ServiceJob[] findServiceByServiceLocation(String serviceLocation) {
        log.info("inside findServiceByLocation method of serviceService");
        return serviceRepository.findServiceByServiceLocation(serviceLocation);
    }

    public Map<String, Boolean> deleteService(String serviceID) {
        ServiceJob service = serviceRepository.findByServiceID(serviceID);
        Map<String, Boolean> response = new HashMap<>();
        if(service == null) {
            log.info("Service not found for :: " + serviceID);
            response.put("Deleted", Boolean.FALSE);
        } else {
            serviceRepository.delete(service);
            response.put("Deleted", Boolean.TRUE);
        }
        return response;
    }
}
