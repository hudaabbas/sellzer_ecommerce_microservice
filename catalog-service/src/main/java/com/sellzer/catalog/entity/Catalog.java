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
    private String catalogCategory;
    private String catalogDescription;
    private String catalogBrand;
    private String imageId;
    private String imageId2;
    private String sizes;
    private String videoId;
    private Integer quantity;
    private double catalogItemPrice;
    private boolean catalogItemSubsided;
}
