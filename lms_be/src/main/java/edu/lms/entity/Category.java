package edu.lms.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "category_name", columnDefinition = "NVARCHAR(250)")
    @JsonProperty(namespace = "categoryName", required = true)
    private String categoryName;

    private String description;

    @Column(name = "sort_order")
    private int sortOrder;
    private boolean isActive;

    @Column(name = "create_at")
    private LocalDateTime createAt;

    @Column(name = "update_at")
    private LocalDateTime updateAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name ="parent_id", referencedColumnName = "id")
    private Category parent;

    @OneToMany(mappedBy = "category")
    private Set<CourseCategory> courseCategories;

}
