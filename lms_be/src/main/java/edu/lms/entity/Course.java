package edu.lms.entity;

import edu.lms.enums.CourseLevel;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "Course")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "course_id")
    private Integer courseId;

    @Column(columnDefinition = "NVARCHAR(250)")
    private String title;

    private String subtitle;

    @Column(name = "short_description", columnDefinition = "TEXT")
    private String shortDescription;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    private CourseLevel level;

    private String language;

    @Column(name ="thumbnail_url", columnDefinition = "VARCHAR(1024)")
    private String thumbnailUrl;

    private Double rating;

    @Column(name = "rating_count")
    private Integer ratingCount;
    private Integer students;

    @Column(name = "total_hours")
    private Double totalHours;

    private Double price;

    private Double discount;

    private String status;

    @Column(name = "publish_at")
    private LocalDateTime publishedAt;

    @Column(name = "create_at")
    private LocalDateTime createdAt;

    @Column(name = "update_at")
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "course", fetch = FetchType.LAZY)
    private Set<CourseCategory> courseCategories;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name ="owner_user_id", referencedColumnName = "user_id")
    private User creator;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Module> modules;
}
