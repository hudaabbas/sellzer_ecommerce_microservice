package com.sellzer.service.controller;
// import org.springframework.data.jpa.repository.JpaRepository;
import com.sellzer.service.entity.ServiceJob;
import com.sellzer.service.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/services")
@Slf4j
public class ServiceController{
    @Autowired
    private ServiceService serviceService;

    @PostMapping("/") // as a URL endpoint
    public ServiceJob saveService(@RequestBody ServiceJob service) {
        log.info("Inside saveService method of ServiceController");
        return  serviceService.saveService(service);
    }

    @GetMapping("/{id}") // path variable
    public ServiceJob findServiceByID(@PathVariable("id") String serviceID) {
        log.info("Inside findServiceById method of ServiceController");
        return serviceService.findServiceByID(serviceID);
    }
}