package edu.lms.dto;

import edu.lms.enums.LessonType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LessonResponse {

    private Long id;
    private String title;
    private LessonType lessonType;
    private String contentUrl;
    private String contentRef;
    private int durationSeconds;
    private boolean isPreview;
    private int sortOrder;
}