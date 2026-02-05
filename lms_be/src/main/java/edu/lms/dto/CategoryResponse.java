package edu.lms.dto;

import lombok.*;

import java.time.LocalDateTime;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class CategoryResponse {
    private Integer id;
    private String categoryName;
    private String description;
    private int sortOrder;
    private boolean isActive;
    private LocalDateTime createAt;
    private Integer parentId;
    private String parentName;
    private LocalDateTime updateAt;
}
