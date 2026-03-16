package edu.lms.controller;

import edu.lms.constants.ApiPaths;
import edu.lms.dto.AuthRequest;
import edu.lms.dto.AuthResponse;
import edu.lms.dto.CustomUserDetails;
import edu.lms.dto.RegisterRequest;
import edu.lms.security.JwtService;
import edu.lms.service.AuthApplicationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(ApiPaths.AUTH)
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final AuthApplicationService authApplicationService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody @Valid AuthRequest authRequest) {

        log.info("Login Request: {}", authRequest);

        // Delegate to AuthenticationManager: process login
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(),
                authRequest.getPassword()));

        // Auto: AuthenticationManager gọi UserDetailsService.loadUserByUsername(username)

        // Set to context
        SecurityContextHolder.getContext().setAuthentication(authentication); // Lưu thông tin đăng nhập

        log.info("Authenticated {}", SecurityContextHolder.getContext().getAuthentication().isAuthenticated());

        log.info("Username {}", SecurityContextHolder.getContext().getAuthentication().getName());
        log.info("User logged in {}", ((CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername());

        // Call Gen token function
        CustomUserDetails userDetails = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String accessToken = jwtService.generateToken(userDetails);

        log.info("Access token {}", accessToken);

        List<String> roles = userDetails.getAuthorities().stream().map((grantedAuthority -> grantedAuthority.getAuthority())).toList();

        return ResponseEntity.ok(new AuthResponse(accessToken, userDetails.getUsername(), userDetails.getFullName(), roles));

    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody @Valid RegisterRequest registerRequest) {

        authApplicationService.register(registerRequest);

        return ResponseEntity.ok().build();
    }
}
