package edu.lms.dto;

import jakarta.validation.constraints.Pattern;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AuthRequest {

    @Pattern(regexp = "[A-Za-z0-9_]+\\@[A-Za-z]+\\.[A-Za-z]{2,}", message = "Email is invalid (Ex: huylt@gmail.com)")
    private String email;

    @Pattern(regexp = "\"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=])(?=\\\\S+$).{8,20}$\"\n", message = "At least 8 characters in length, but no more than 20.\n" +
            "At least one digit (0-9).\n" +
            "At least one lowercase letter (a-z).\n" +
            "At least one uppercase letter (A-Z).\n" +
            "At least one special character (e.g., ! @#$%&*()-+=^).\n" +
            "No whitespace characters")
    private String password;

}

