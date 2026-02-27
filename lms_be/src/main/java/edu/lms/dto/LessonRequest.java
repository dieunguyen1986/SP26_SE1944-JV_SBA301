package edu.lms.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LessonRequest {
    private String title;

    private String lessonType;

    private int durationSeconds;

    private boolean isPreview;

    private int sortOrder;

    private String status;
}
