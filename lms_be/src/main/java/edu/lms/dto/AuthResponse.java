package edu.lms.dto;


import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AuthResponse {
    private String accessToken;
    private String email;
    private String fullName;
    private List<String> roles;
}
