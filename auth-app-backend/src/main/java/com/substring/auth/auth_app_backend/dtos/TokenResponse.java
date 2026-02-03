package com.substring.auth.auth_app_backend.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

public record TokenResponse (
    String accessToken,
    String refreshToken,
    long expiresIn,
    String tokenType,

    @JsonProperty("user")
    UserDto userDto
){
    public static TokenResponse of(String accessToken, String refreshToken, long expiresIn, UserDto user){
        return new TokenResponse(accessToken, refreshToken, expiresIn, "Bearer", user);
    }
}

