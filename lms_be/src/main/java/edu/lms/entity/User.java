package edu.lms.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "Users")
@Data @Builder
@NoArgsConstructor @AllArgsConstructor
@ToString(exclude = {"userRoles"})
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "full_name", columnDefinition = "NVARCHAR(255)")
    private String fullName;

    private String email;

    private String phone;

    @Column(name = "avatar_url", columnDefinition = "VARCHAR(1024)")
    private String avatarUrl;

    private String status;

    private String password;

    @Column(name = "last_login_at")
    private LocalDateTime lastLoginAt;

    @Column(name = "create_at")
    private LocalDateTime createdAt;

    @Column(name = "update_at")
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<UserRole> userRoles;

}
