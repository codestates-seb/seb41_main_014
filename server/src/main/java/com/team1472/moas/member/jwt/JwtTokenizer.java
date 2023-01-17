package com.team1472.moas.member.jwt;

import com.team1472.moas.member.repository.TokenRepository;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.*;

@Slf4j
@RequiredArgsConstructor
@Component
public class JwtTokenizer {
    @Getter
    @Value("ppp11112341111123411112341111123411111234pppppp11112341111123411112341111123411111234ppp")
    private String secretKey;

    @Getter
    @Value("550000")
    private int accessTokenExpirationMinutes;

    @Getter
    @Value("420")
    private int refreshTokenExpirationMinutes;

    private final TokenRepository tokenRepository;

    //generateAccessToken메서드 (사용자 email, role 넣은 엑세스 토큰 발급)
    public String generateAccessToken(Map<String, Object> claims,
                                      String subject,
                                      Date expiration,
                                      Key secretkey) {
        ;

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(Calendar.getInstance().getTime())
                .setExpiration(expiration)
//                .signWith(secretkey)
                .signWith(secretkey, SignatureAlgorithm.HS256)
                .compact();
    }

    //generateRefreshToken 메서드 (리프레시 토큰 발급)

    public String generateRefreshToken(String subject,
                                       Date expiration,
                                       Key secretkey) {

        return Jwts.builder()
                .setSubject(subject)
                .setIssuedAt(Calendar.getInstance().getTime())
                .setExpiration(expiration)
                .signWith(secretkey)
                .compact();
    }

    // getTokenExpiration 메서드 (토큰 만료시간을 가져오는 메서드)
    public Date getTokenExpiration(int expirationMinutes) {
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.MINUTE, expirationMinutes);
        Date expiration = calendar.getTime();

        return expiration;
    }


    // getUserEmail 메서드 (토큰에서 email 가져오는 메서드)
    public String getUserEmail(String token) {
        return Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(token).getBody().getSubject();
    }

    // validateToken 메서드 (토큰 유효성, 만료일자 확인 메서드)
    // 토큰의 유효성 + 만료일자 확인
    public boolean validateToken(String jwtToken) {
        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(jwtToken);
            return !claims.getBody().getExpiration().before(new Date());
        } catch (ExpiredJwtException e) {
            return false;
        }
    }


    //existsRefreshToken 메서드 (리프레시 토큰 존재유무 확인 메서드)
    // RefreshToken 존재유무 확인
    public boolean existsRefreshToken(String refreshToken) {
        return tokenRepository.existsByRefreshToken(refreshToken);
    }

    //getSecretKeyFromPlainSecretKey 메서드 (시크릿 키 조회 메서드(토큰의 시크릿 키))
    public Key getSecretKeyFromPlainSecretKey() {


        byte[] bytes = secretKey.getBytes();
        SecretKey key = Keys.hmacShaKeyFor(bytes);
        return key;
    }

    //createNewToken 메서드 (멤버 서비스에서 리프레시 기능을 사용할 때 엑세스 토큰을 재발큽 해주기 위한 엑세스 토큰 생성 메서드)
    // Access Token 생성.
    public String createNewToken(String email, List<GrantedAuthority> authorities) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", email);
        claims.put("roles", authorities);

        String subject = email;
        Date expiration = getTokenExpiration(getAccessTokenExpirationMinutes());

        Key secretKey = getSecretKeyFromPlainSecretKey();

        String accessToken = generateAccessToken(claims, subject, expiration, secretKey);

        return accessToken;
    }
}


