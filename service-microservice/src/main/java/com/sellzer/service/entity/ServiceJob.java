package com.sellzer.service.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "ServiceJob")
public class ServiceJob{

    @Id
	private String serviceID;
    private String serviceName;
    private String serviceType;
    private String serviceImageId;
    private Long servicePrice;
    private String serviceProvider;
    private String serviceLocation; // changed from initial design!

}
