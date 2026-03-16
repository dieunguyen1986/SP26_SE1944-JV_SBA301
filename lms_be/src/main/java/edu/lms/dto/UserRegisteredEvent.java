package edu.lms.dto;

import lombok.Getter;

import java.time.Instant;

@Getter
public class UserRegisteredEvent {

    private final String username;
    private final Instant createdAt;

    public UserRegisteredEvent(String username) {
        this.username = username;
        this.createdAt = Instant.now();
    }
}