package edu.lms.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ModuleResponse {

    private Long id;
    private String title;
    private String description;
    private int sortOrder;
    private String status;

    private List<LessonResponse> lessons;
}