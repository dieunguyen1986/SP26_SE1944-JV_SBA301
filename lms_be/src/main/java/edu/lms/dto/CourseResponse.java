package edu.lms.dto;

import edu.lms.entity.Course;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseResponse {
    private List<CourseSummaryResponse> courses;

    private Integer totalPages;
}
