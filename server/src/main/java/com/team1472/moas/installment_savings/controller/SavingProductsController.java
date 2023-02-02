package com.team1472.moas.installment_savings.controller;

import com.team1472.moas.installment_savings.dto.SavingProductRes;
import com.team1472.moas.installment_savings.dto.SavingsFilteringReq;
import com.team1472.moas.installment_savings.service.SavingProductsService;
import com.team1472.moas.member.service.MemberService;
import com.team1472.moas.response.MultiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/savings")
@RequiredArgsConstructor
@Validated
@Tag(name = "SavingProducts", description = "적금 API")
public class SavingProductsController {
    private final SavingProductsService savingProductsService;
    private final MemberService memberService;

    /**
     * 적금 정보 리스트 필터링 조회
     */
    @Operation(summary = "적금 정보 리스트 필터링 조회")
    @PostMapping
    public ResponseEntity searchSavingProducts(Principal principal,
                                               @Positive@RequestParam(value = "page", required = false, defaultValue = "1") int page,
                                               @Positive @RequestParam(value = "size", required = false, defaultValue = "10") int size,
                                               @Valid @RequestBody SavingsFilteringReq savingsFilteringReq) {

        Long memberId = 0L;

        Pageable pageable = PageRequest.of(page - 1, size);
        if (principal != null) {
            memberId = memberService.findMemberId(principal.getName());
        }
        MultiResponse response = savingProductsService.findSavingsProducts(pageable, savingsFilteringReq, memberId);


        return new ResponseEntity(response, HttpStatus.OK);
    }
}
