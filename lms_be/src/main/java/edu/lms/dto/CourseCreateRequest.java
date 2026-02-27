package edu.lms.dto;

import edu.lms.enums.CourseLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseCreateRequest {

    private String title;
    private String subtitle;
    private String shortDescription;
    private String description;

    private CourseLevel courseLevel;
    private String language;

    private Double price;
    private Double discount;

    private String status; // DRAFT / PUBLISHED

    private Set<Integer> categoryIds; // chỉ cần id
}