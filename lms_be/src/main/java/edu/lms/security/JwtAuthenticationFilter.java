package edu.lms.security;

import edu.lms.dto.CustomUserDetails;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
@Slf4j
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        log.info("Filtering request");

        String uri = request.getRequestURI();

        log.info("URI: {}", uri);

        if(uri.contains("/login") || uri.contains("/logout") || uri.contains("/register")) {
            filterChain.doFilter(request, response);
            return;
        }

        try {
            // Get token and verify/validate
            String header = request.getHeader("Authorization");

            // Authenticated: false
            // Send to FE: HttpStatus.UNAUTHORIZED
            if (header == null || !header.startsWith("Bearer ")) {
                filterChain.doFilter(request, response);
                return;
            }

            String accessToken = header.substring(7);

            log.info("JwtAuthenticationFilter Access token: {}", accessToken);
            if (accessToken == null) {
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                return;
            }

            String username = jwtService.extractUsername(accessToken);

            log.info("JWT Token: {}", accessToken);
            log.info("JWT Username: {}", username);

            // Authenticated
            // Store SecurityContext
            CustomUserDetails userDetails = (CustomUserDetails) userDetailsService.loadUserByUsername(username);

            log.info("JWT User: {}", userDetails);
            // Check valid token

            // Store to context
            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);

        } catch (Exception ex) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }

        //
        filterChain.doFilter(request, response); // cho đi qua

    }
}
