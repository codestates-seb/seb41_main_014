package com.team1472.moas.auth.utils;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;

//stringToGrantedAuthority 메서드 (지정된 권한 앞에 ROLE_ 붙여서 리스트 형식으로 저장 )
@Component
public class CustomAuthorityUtil {

    public List<GrantedAuthority> stringToGrantedAuthority(String role) {
        SimpleGrantedAuthority simpleGrantedAuthority = new SimpleGrantedAuthority("ROLE_"+role);
        List<GrantedAuthority> authorities = List.of(simpleGrantedAuthority);

        return authorities;
    }
}