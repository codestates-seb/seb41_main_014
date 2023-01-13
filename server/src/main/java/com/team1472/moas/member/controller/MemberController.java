package com.team1472.moas.member.controller;

import com.team1472.moas.member.entity.Member;
import com.team1472.moas.member.mapper.MemberMapper;
import com.team1472.moas.member.service.MemberService;
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
import java.util.List;

@Validated
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/members")
public class MemberController {

    private final MemberMapper mapper;
    private final MemberService service;

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") Long memberId,
                                      @Valid @RequestBody MemberPatchDto memberPatchDto) {

        Member member = mapper.memberPatchDtoToMember(memberPatchDto);
        Member updateMember = service.updateMember(member, memberId);

        SimpleMemberResponseDto response = mapper.memberToSimpleMemberResponseDto(updateMember);
        SingleResponse<SimpleMemberResponseDto> singleResponse = new SingleResponse<>(response);

        return new ResponseEntity<>(singleResponse, HttpStatus.OK);
    }
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") Long memberId ) {

        Member findMember = service.findMember(memberId);
        MemberResponseDto response = mapper.memberToMemberResponseDto(findMember);
        SingleResponse<MemberResponseDto> singleResponseDto = new SingleResponse<>(response);

        return new ResponseEntity(singleResponseDto, HttpStatus.OK);
    }

    @PostMapping("/logout")
    public ResponseEntity logout(HttpServletRequest request) {
        service.logoutMember(request);

        return new ResponseEntity<>("Logout", HttpStatus.NO_CONTENT);
    }
    @PostMapping("/refresh")
    public ResponseEntity refreshToken(HttpServletRequest request, HttpServletResponse response) {
        return service.refresh(request, response);
    }
}