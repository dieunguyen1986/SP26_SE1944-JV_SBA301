package edu.lms.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.Date;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class JwtService {

    @Value("${secret.key}")
    private String secretKey;

    @Value("${jwt.expiration}")
    private long expiration;

    private SecretKey getSigningKey() {
//        byte[] keyBytes = secretKey.getBytes(StandardCharsets.UTF_8);
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);

    }

    public String generateToken(UserDetails userDetails) {
        return Jwts.builder()
                .subject(userDetails.getUsername())
                .claims(Map.of("roles", userDetails.getAuthorities().stream()
                        .map((grantedAuthority -> grantedAuthority.getAuthority()))
                        .collect(Collectors.toList())))
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + expiration))
//                .signWith(SignatureAlgorithm.HS256, secretKey.getBytes()).compact();
                .signWith(getSigningKey(), SignatureAlgorithm.HS256).compact();

    }

    /**
     * The method to validate current access token
     * @param token
     * @param userDetails
     * @return
     */
    public boolean validateToken(String token, UserDetails userDetails) {
        return (extractUsername(token).equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    public String extractUsername(String token) {
        return extractAllClaims(token).getSubject();
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractAllClaims(token).getExpiration();
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .verifyWith(getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
}
