package com.team1472.moas.auth.filter;

import com.team1472.moas.auth.utils.CustomAuthorityUtil;
import com.team1472.moas.auth.utils.MemberIdAuthenticationToken;
import com.team1472.moas.member.entity.Member;
import com.team1472.moas.member.jwt.JwtTokenizer;
import com.team1472.moas.member.repository.MemberRepository;
import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
public class JwtVerificationFilter extends OncePerRequestFilter {

    private final JwtTokenizer jwtTokenizer;
    private final MemberRepository memberRepository;
    private final CustomAuthorityUtil customAuthorityUtil;


    //doFilterInternal 메서드 (토큰 유효성 검증)
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        String accessToken = resolveAccessToken(request);

        Map<String, Object> claims = null;

        //토큰 검증단계
        try {
            Jws<Claims> getClaims = Jwts.parserBuilder()
                    .setSigningKey(jwtTokenizer.getSecretKeyFromPlainSecretKey())
                    .build()
                    .parseClaimsJws(accessToken);
            claims = getClaims.getBody();

            // 만료된 경우 다음 단계로 EntryPoint에서 Error Response
        } catch (ExpiredJwtException e){
        }

        // AccessToken 유효하다면 컨텍스트에 저장
        if (accessToken != null && jwtTokenizer.validateToken(accessToken)) {
            if ( jwtTokenizer.validateToken(accessToken) )
                setSecurityContext(claims);
        }

        filterChain.doFilter(request, response);
    }

    //shouldNotFilter 메서드 (토큰이 bearer 으로 시작하는지 안하는지 )
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String authorization = request.getHeader("Authorization");

        return authorization == null || !authorization.startsWith("bearer");
    }

    //setSecurityContext 메서드 (이메일 , 권한, memberId 토큰으로 저장 )
    private void setSecurityContext(Map<String, Object> claims) {

        String username = claims.get("email").toString();
        Member loginMember = memberRepository.findByEmail(username).get();
        Long memberId = loginMember.getId();
        List<GrantedAuthority> authorities = customAuthorityUtil.stringToGrantedAuthority(loginMember.getRole().toString());

        MemberIdAuthenticationToken memberIdAuthenticationToken = new MemberIdAuthenticationToken(username, null, authorities, memberId);
        
        SecurityContextHolder.getContext().setAuthentication(memberIdAuthenticationToken);
    }

    //resolveAccessToken 메서드 (헤더에 Authorization이 있는지 없는지 검사 )
    public String resolveAccessToken(HttpServletRequest request) {
        if (request.getHeader("Authorization") != null)
            return request.getHeader("Authorization").substring(6);
        return null;
    }

    public String resolveRefreshToken(HttpServletRequest request) {
        if (request.getHeader("RefreshToken") != null)
            return request.getHeader("RefreshToken").substring(6);
        return null;
    }
}

