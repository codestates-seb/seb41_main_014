package com.team1472.moas.member.controller;

import com.team1472.moas.exception.BusinessLogicException;
import com.team1472.moas.exception.ExceptionCode;
import com.team1472.moas.member.dto.MemberDeleteDto;
import com.team1472.moas.member.entity.Member;
import com.team1472.moas.member.mapper.MemberMapper;
import com.team1472.moas.member.service.MemberService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import com.team1472.moas.member.dto.SimpleMemberResponseDto;
import com.team1472.moas.member.dto.MemberResponseDto;
import com.team1472.moas.member.dto.MemberPatchDto;
import com.team1472.moas.response.SingleResponse;
import com.team1472.moas.response.MultiResponse;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.security.Principal;
import java.util.List;

@Validated
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/members")
@Tag(name = "Members", description = "회원 API")
public class MemberController {

    private final MemberMapper mapper;
    private final MemberService service;

    //patchMember 메서드 (member 정보 수정)
    @Operation(summary = "회원 정보 수정")
    @PatchMapping()
    public ResponseEntity patchMember(
                                      @Valid @RequestBody MemberPatchDto memberPatchDto, Principal principal) {
        try{
            String email = principal.getName();
        }catch (NullPointerException e){
            return new ResponseEntity<>("회원정보 없음", HttpStatus.OK);
        }
        String email = principal.getName();

        Member member = mapper.memberPatchDtoToMember(memberPatchDto);
        Member updateMember = service.updateMember(member,email);

        SimpleMemberResponseDto response = mapper.memberToSimpleMemberResponseDto(updateMember);
        SingleResponse<SimpleMemberResponseDto> singleResponse = new SingleResponse<>(response);

        return new ResponseEntity<>(singleResponse, HttpStatus.OK);
    }

    //deleteMember 메서드 (member 삭제)
    @Operation(summary = "회원 정보 삭제")
    @DeleteMapping()
    public ResponseEntity deleteMember(Principal principal) {

        String email = principal.getName();
        service.deleteMember(email);

        return new ResponseEntity<>("MEMBER DELETED", HttpStatus.OK);
    }
    //getMember 메서드 (member 정보 조회)
    @Operation(summary = "회원 정보 조회")
    @GetMapping()
    public ResponseEntity getMember(Principal principal ) {

        String email = principal.getName();

        Member findMember = service.findMemberbyemail(email);
        MemberResponseDto response = mapper.memberToMemberResponseDto(findMember);
        SingleResponse<MemberResponseDto> singleResponseDto = new SingleResponse<>(response);

        return new ResponseEntity(singleResponseDto, HttpStatus.OK);
    }

    //logout 메서드 (로그아웃, 토큰 삭제 )
    @Operation(summary = "로그아웃, 토큰 삭제")
    @DeleteMapping("/logout")
    public ResponseEntity logout( HttpServletRequest request ) {

        service.logoutMember(request);

        return new ResponseEntity<>("Logout", HttpStatus.OK);
    }
    //refreshToken 메서드 (토큰 재발급)

    @Operation(summary = "토큰 재발급")
    @PostMapping("/refresh")
    public ResponseEntity refreshToken(HttpServletRequest request, HttpServletResponse response) {
        return service.refresh(request, response);
    }
}