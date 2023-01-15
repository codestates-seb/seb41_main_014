package com.team1472.moas.member.service;

import com.team1472.moas.auth.utils.CustomAuthorityUtil;
import com.team1472.moas.exception.BusinessLogicException;
import com.team1472.moas.exception.ExceptionCode;
import com.team1472.moas.member.entity.Member;
import com.team1472.moas.member.jwt.JwtTokenizer;
import com.team1472.moas.member.jwt.RefreshToken;
import com.team1472.moas.member.repository.MemberRepository;
import com.team1472.moas.member.repository.TokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;
import com.team1472.moas.util.audi.Auditable;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class MemberService {

    private final MemberRepository memberRepository;
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtil customAuthorityUtil;
    private final TokenRepository tokenRepository;

    public void savedToken(String token) {
        RefreshToken refreshToken = new RefreshToken();
        refreshToken.setRefreshToken(token);
        tokenRepository.save(refreshToken);
    }

    public Member updateMember(Member member, Long memberId) {

        Member findMember = verifyExistsMember(memberId);

        // 기존닉네임과 Patch요청의 닉네임이 다른경우
        if (!member.getName().equals(findMember.getName())){
            // 요청 닉네임이 존재하는지 조회
            if(memberRepository.existsByName(member.getName())){
                //존재한다면 에러 발생
                throw new BusinessLogicException(ExceptionCode.NAME_ALREADY_EXISTS);
            }
        }

        Optional.ofNullable(member.getName())
                .ifPresent(name -> findMember.setName(name));
        Optional.ofNullable(member.getModifiedAt())
                .ifPresent(modifiedAt -> findMember.setModifiedAt(modifiedAt));

        Member updateMember = memberRepository.save(findMember);

        return updateMember;
    }

    public Member findMember(Long memberId) {

        Member findMember = verifyExistsMember(memberId);
        memberRepository.save(findMember);

        return findMember;

    }



    public void logoutMember(HttpServletRequest request){

        String refreshToken = request.getHeader("RefreshToken").substring(6);
        RefreshToken token = tokenRepository.findByRefreshToken(refreshToken).get();

        tokenRepository.deleteById(token.getTokenId());
    }

    public ResponseEntity refresh(HttpServletRequest request, HttpServletResponse response) {

        String refreshToken = request.getHeader("RefreshToken").substring(6);

        Boolean validateRefreshToken = jwtTokenizer.validateToken(refreshToken);
        Boolean isRefreshToken = jwtTokenizer.existsRefreshToken(refreshToken);

        if (validateRefreshToken && isRefreshToken){
            String email = jwtTokenizer.getUserEmail(refreshToken);
            String role = memberRepository.findByEmail(email).get().toString();
            List<GrantedAuthority> authorities = customAuthorityUtil.stringToGrantedAuthority(role);

            String newAccessToken = jwtTokenizer.createNewToken(email, authorities);

            response.setHeader("Authorization", "bearer"+newAccessToken);
            return new ResponseEntity<>("Refresh OK", HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("Refresh Failed", HttpStatus.NOT_FOUND);
        }
    }

    private Member verifyExistsMember(Long memberId) {

        return memberRepository.findById(memberId).orElseThrow(
                () -> {throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_EXISTS);
                });
    }

    private void verifyNotExistsMember(String email, String name) {

        if (memberRepository.existsByName(name)){
            throw new BusinessLogicException(ExceptionCode.NAME_ALREADY_EXISTS);
        }
        if (memberRepository.existsByEmail(email)){
            throw new BusinessLogicException(ExceptionCode.EMAIL_ALREADY_EXISTS);
        }

    }

}
