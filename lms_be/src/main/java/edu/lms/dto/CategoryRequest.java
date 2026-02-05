package edu.lms.dto;


import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.time.LocalDateTime;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CategoryRequest {
    @NotBlank
    private String categoryName;

    private String description;
    private int sortOrder;

    @Builder.Default
    private boolean isActive = true;
    private Integer parentId;
}
