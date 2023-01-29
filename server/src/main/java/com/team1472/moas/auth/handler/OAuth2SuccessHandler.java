package com.team1472.moas.auth.handler;

import com.google.gson.Gson;
import com.team1472.moas.auth.utils.CustomAuthorityUtil;
import com.team1472.moas.member.dto.SimpleMemberResponseDto;
import com.team1472.moas.member.entity.Member;
import com.team1472.moas.member.jwt.JwtTokenizer;
import com.team1472.moas.member.jwt.RefreshToken;
import com.team1472.moas.member.mapper.MemberMapper;
import com.team1472.moas.member.repository.MemberRepository;
import com.team1472.moas.member.repository.TokenRepository;
import com.team1472.moas.response.SingleResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Transactional
@Component
@RequiredArgsConstructor
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtTokenizer jwtTokenizer;
    private final MemberRepository memberRepository;
    private final MemberMapper memberMapper;
    private final Gson gson;
    private final TokenRepository tokenRepository;
    private final CustomAuthorityUtil customAuthorityUtil;

    //OAuth2로그인 성공 시 토큰 발급 (Authorization, RefreshToken)
    //지정된 URL(http://localhost:3000/loginCallback)으로 토큰 직접 전달 (URL 자체가 토큰을 문자열로 가지고 있음 )
    //토큰에는 유저ID, 이메일, 권한 전달

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        var oAuth2User = (OAuth2User)authentication.getPrincipal();

        String email = String.valueOf(oAuth2User.getAttributes().get("email")) ;
        Member loginMember = memberRepository.findByEmail(email).get();
        List<GrantedAuthority> authorities = customAuthorityUtil.stringToGrantedAuthority(loginMember.getRole().toString());

        String accessToken = delegateAccessToken(email, authorities);
        String refreshToken = delegateRefreshToken(email, authorities);

        //RefreshToken 저장
        RefreshToken newRefreshToken = new RefreshToken();
        newRefreshToken.setRefreshToken(refreshToken);
        tokenRepository.save(newRefreshToken);

        response.setHeader("Authorization", "bearer"+accessToken);
        response.setHeader("RefreshToken", "bearer"+refreshToken);

        //헤더 추가
        response.addHeader("memberId", loginMember.getId().toString());

        //출력용
        System.out.println("Authorization");
        System.out.println("bearer"+accessToken);

        setResponseBody(response, loginMember);

        redirect(request, response, email, authorities);
    }

    private void setResponseBody(HttpServletResponse response, Member loginMember) throws IOException{

        SimpleMemberResponseDto responseDto = memberMapper.memberToSimpleMemberResponseDto(loginMember);
        SingleResponse singleResponseDto = new SingleResponse(responseDto);
        String content = gson.toJson(singleResponseDto);
        response.getWriter().write(content);

    }

    private void redirect(HttpServletRequest request, HttpServletResponse response, String username, List<GrantedAuthority> authorities) throws IOException {
        String accessToken = delegateAccessToken(username, authorities);
        String refreshToken = delegateRefreshToken(username, authorities);

        String uri = createURI(accessToken, refreshToken, username).toString();
        getRedirectStrategy().sendRedirect(request, response, uri);
    }

    private String delegateAccessToken(String email, List<GrantedAuthority> authorities) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", email);
        claims.put("roles", authorities);
        String memberId = memberRepository.findByEmail(email).get().getId().toString();
        claims.put("member_id", memberId); // Oauth2 인증 시 프론트에 주는 토큰에 멤버 아이디 추가

        String subject = email;
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        Key secretKey = jwtTokenizer.getSecretKeyFromPlainSecretKey();

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, secretKey);

        return accessToken;
    }

    private String delegateRefreshToken(String email, List<GrantedAuthority> authorities) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", email);
        claims.put("roles", authorities);

        String subject = email;
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        Key secretKey = jwtTokenizer.getSecretKeyFromPlainSecretKey();

        String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration, secretKey);

        return refreshToken;
    }

    private URI createURI(String accessToken, String refreshToken, String email) {
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        String memberId = memberRepository.findByEmail(email).get().getId().toString();
        queryParams.add("access_token", "bearer"+accessToken);
        queryParams.add("refresh_token", "bearer"+refreshToken);
        queryParams.add("member_id", memberId);
        queryParams.add("name", memberId);

        return UriComponentsBuilder
                .newInstance()
                .scheme("http")
                .host("moas1472.s3-website.ap-northeast-2.amazonaws.com")
//                .port(8080)
                .path("/loginCallback")
                .queryParams(queryParams)
                .build()
                .toUri();
    }

}