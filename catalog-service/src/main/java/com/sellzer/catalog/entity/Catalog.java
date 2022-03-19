package com.sellzer.catalog.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection ="Catalog")
public class Catalog
{
    @Id
    private String catalogId;
    private String catalogName;
    private String catalogItemPrice;
    private boolean catalogItemSubsided;
}
