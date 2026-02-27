package edu.lms.dto;

import edu.lms.enums.CourseLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseDetailResponse {

    private Integer courseId;

    private String title;
    private String subtitle;

    private String description;
    private String shortDescription;

    private String thumbnailUrl;

    private CourseLevel courseLevel;
    private String language;

    private Double price;
    private Double discount;

    private Double rating;
    private Integer ratingCount;

    private Integer students;
    private Double totalHours;

    private String status;

    private LocalDateTime publishAt;

    private Set<CategoryResponse> categories;

    private Set<ModuleResponse> modules;
}