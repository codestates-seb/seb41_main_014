package com.team1472.moas.like_savings.controller;

import com.team1472.moas.like_savings.dto.RegisterLikeSavingProductReq;
import com.team1472.moas.like_savings.entity.LikeSavings;
import com.team1472.moas.like_savings.mapper.LikeSavingsMapper;
import com.team1472.moas.like_savings.service.LikeSavingsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/{memberId}/savings/interest")
@RequiredArgsConstructor
@Validated
public class LikeSavingsController {
    private final LikeSavingsService likeSavingsService;
    private final LikeSavingsMapper mapper;

    /**
     * 관심 적금 등록
     */
    @PostMapping
    public ResponseEntity likeSavingProduct(@PathVariable("memberId") long memberId,
                                            @Valid @RequestBody RegisterLikeSavingProductReq registerLikeSavingProductReq) {


        LikeSavings likeSavings = likeSavingsService.RegisterInterestInSavings(memberId, mapper.likeSavingProductReqToLikeSavings(registerLikeSavingProductReq));

        return new ResponseEntity(mapper.likeSavingsToLikeSavingsProductRes(likeSavings), HttpStatus.CREATED);
    }
}
