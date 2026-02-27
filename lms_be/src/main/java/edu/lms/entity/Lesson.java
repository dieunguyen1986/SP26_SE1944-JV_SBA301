package edu.lms.entity;

import edu.lms.enums.LessonType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "Lesson")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Lesson {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lesson_id")
    private Long lessonId;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(name = "lesson_type")
    @Enumerated(EnumType.STRING)
    private LessonType lessonType;

    @Column(name = "content_url")
    private String contentURL;

    @Column(name = "content_ref")
    private String contentRef;

    @Column(name = "duration_seconds")
    private int durationSeconds;

    @Column(name = "is_preview")
    private boolean isPreview;

    @Column(name = "sort_order")
    private int sortOrder;

    private String status;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "module_id", referencedColumnName = "module_id")
    private Module module;

}
