package com.barto.crudspring.model;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class Course {
    
    private Long id;

    private String name;

    private String category;

}
