package com.sellzer.service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;

import com.sellzer.service.entity.ServiceJob;
import com.sellzer.service.repository.ServiceRepository;


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
}
