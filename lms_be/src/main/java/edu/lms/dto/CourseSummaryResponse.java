package edu.lms.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseSummaryResponse {

    private Integer courseId;

    private String title;
    private String subtitle;

    private String thumbnailUrl;

    private Double price;
    private Double discount;

    private Double rating;
    private Integer ratingCount;

    private Integer students;

    private Double totalHours;

    private String level; // Beginner / Intermediate

    private String language;
}