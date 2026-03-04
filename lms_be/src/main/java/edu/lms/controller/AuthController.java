package edu.lms.controller;

import edu.lms.constants.ApiPaths;
import edu.lms.dto.AuthRequest;
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

@RestController
@RequestMapping(ApiPaths.AUTH)
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private final AuthenticationManager authenticationManager;

    @PostMapping
    public ResponseEntity<?> login(@RequestBody @Valid AuthRequest authRequest) {

        // Delegate to AuthenticationManager: process login
        Authentication authentication = new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword());
        authenticationManager.authenticate(authentication);

        // Auto: AuthenticationManager gọi UserDetailsService.loadUserByUsername(username)

        log.info("Authenticated {}", SecurityContextHolder.getContext().getAuthentication().isAuthenticated());

        log.info("User logged {}", SecurityContextHolder.getContext().getAuthentication().getPrincipal());

        // Call Gen token function

        return ResponseEntity.ok().build();
    }
}
