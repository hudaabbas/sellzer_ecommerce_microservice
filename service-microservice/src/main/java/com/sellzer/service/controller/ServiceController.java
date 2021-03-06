package com.sellzer.service.controller;
// import org.springframework.data.jpa.repository.JpaRepository;
import com.sellzer.service.entity.ServiceJob;
import com.sellzer.service.service.ServiceService;
import com.sellzer.service.repository.ServiceRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.Map;
import java.util.List;


@RestController
@RequestMapping("/services")
@Slf4j
@CrossOrigin(origins = "*")
public class ServiceController{
    @Autowired
    private ServiceService serviceService;
    @Autowired
    private ServiceRepository serviceRepository;

    @PostMapping("/") // as a URL endpoint
    public ServiceJob saveService(@RequestBody ServiceJob service) {
        log.info("Inside saveService method of ServiceController");
        return  serviceService.saveService(service);
    }

    @GetMapping(value = "/")
    public List<ServiceJob> getAllServices() {
        log.info("getting all services");
        return serviceRepository.findAll();
    }

    @GetMapping(value = "/ascendSort/")
    public List<ServiceJob> getAllServiceSortedPriceAscending() {
        log.info("getting services ascending");
        return serviceRepository.findAll(Sort.by("servicePrice").ascending());
    }

    @GetMapping(value = "/descendSort/")
    public List<ServiceJob> getAllServiceSortedPriceDescending() {
        log.info("getting services descending");
        return serviceRepository.findAll(Sort.by(Sort.Order.desc("servicePrice")));
    }

    @GetMapping("/{id}") // path variable
    public ServiceJob findServiceByID(@PathVariable("id") String serviceID) {
        log.info("Inside findServiceById method of ServiceController");
        return serviceService.findServiceByID(serviceID);
    }

    @GetMapping("/name/{serviceName}")
    public ServiceJob[] findServiceByServiceName(@PathVariable("serviceName") String serviceName){
        log.info("inside find service by name in controller");
        return  serviceService.findServiceByServiceName(serviceName);
    }

    @GetMapping("/type/{serviceType}")
    public ServiceJob[] findServiceByServiceType(@PathVariable("serviceType") String serviceType){
        log.info("inside find service by type in controller");
        return  serviceService.findServiceByServiceType(serviceType);
    }

    @GetMapping("/price/{servicePrice}")
    public ServiceJob[] findServiceByServicePrice(@PathVariable("servicePrice") double servicePrice){
        log.info("inside find service by price in controller");
        return  serviceService.findServiceByServicePrice(servicePrice);
    }

    @GetMapping("/provider/{serviceProvider}")
    public ServiceJob[] findServiceByServiceProvider(@PathVariable("serviceProvider") String serviceProvider){
        log.info("inside find service by provider in controller");
        return  serviceService.findServiceByServiceProvider(serviceProvider);
    }

    @GetMapping("/location/{serviceLocation}")
    public ServiceJob[] findServiceByServiceLocation(@PathVariable("serviceLocation") String serviceLocation){
        log.info("inside find service by provider in controller");
        return  serviceService.findServiceByServiceLocation(serviceLocation);
    }

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteService(@PathVariable("id") String serviceID) {
        log.info("inside deleteService method of Service");
        return serviceService.deleteService(serviceID);
    }

    @PostMapping("/allServices")
    public ArrayList<ServiceJob> findCatalogByIds(@RequestBody String[] serviceIds) {
        log.info("inside ;ol");
        ArrayList<ServiceJob> services = new ArrayList<ServiceJob>();
        for(String serviceId: serviceIds) {
            services.add(serviceService.findServiceByID(serviceId));
        }
        log.info(String.valueOf(services));
        return services;
    }

}
