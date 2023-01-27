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
    //updateMember메서드 (회원 업로드)
    public Member updateMember(Member member, String email) {

//        Member findMemberbyemail = memberRepository.findByEmail(email);

        Member findMember = verifyExistsMemberbyemail(email);

//        if(findMember.getEmail().equals(email)) { // 입력한 이메일이 같은지 비교


            // 기존닉네임과 Patch요청의 닉네임이 다른경우
            if (!member.getName().equals(findMember.getName())) {
                // 요청 닉네임이 존재하는지 조회
                if (memberRepository.existsByName(member.getName())) {
                    //존재한다면 에러 발생
                    throw new BusinessLogicException(ExceptionCode.NAME_ALREADY_EXISTS);
                }
            }
        Optional.ofNullable(member.getEmail())
                .ifPresent(email_2 -> findMember.setEmail(email_2));

        Optional.ofNullable(member.getName())
                .ifPresent(name -> findMember.setName(name));
        Optional.ofNullable(member.getPicture())
                .ifPresent(picture -> findMember.setPicture(picture));
        Optional.ofNullable(member.getModifiedAt())
                .ifPresent(modifiedAt -> findMember.setModifiedAt(modifiedAt));

        Member updateMember = memberRepository.save(findMember);

        return updateMember;
    }

    //회원 삭제 메서드
    public void deleteMember( String email){

        Member findMember = verifyExistsMemberbyemail(email);

        long memberId = findMember.getId();

        memberRepository.deleteById(memberId);


    }

    //findMember메서드(회원 찾기)
    public Member findMember(long memberId) {

        Member findMember = verifyExistsMember(memberId);


        return findMember;

    }

    //findMember메서드(회원 찾기) // 멤버 아이디 리턴으로 변경 혹은 사용 가능한방법으로
    public Member findMemberbyemail(String email) {

        Member findMember = verifyExistsMemberbyemail(email);

        return findMember;

    }

    //findMemberId메서드(회원 아이디 찾기)
    public Long findMemberId(String email) {

        Member findMember = verifyExistsMemberbyemail(email);

        Long memberId = findMember.getId();

        return memberId;

    }

    //logoutMember 메서드 (로그아웃, 토큰삭제)
    public void logoutMember(HttpServletRequest request){

        String refreshToken = request.getHeader("RefreshToken").substring(6);
        RefreshToken token = tokenRepository.findByRefreshToken(refreshToken).get();

        tokenRepository.deleteById(token.getTokenId());
    }

    //refresh 메서드 (RefreshToken을 입력받아 토큰 재발급)
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

    //verifyExistsMember 메서드(회원 가입 시 이미 존재하는 회원인지 여부 판별) 추가
    private Member verifyExistsMember(Long memberId) {

        return memberRepository.findById(memberId).orElseThrow(
                () -> {throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_EXISTS);
                });
    }

    private Member verifyExistsMemberbyemail(String email) {

        return memberRepository.findByEmail(email).orElseThrow(
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
