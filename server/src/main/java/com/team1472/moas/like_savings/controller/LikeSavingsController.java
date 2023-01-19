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
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/api/{member-id}/savings/interest")
@RequiredArgsConstructor
@Validated
public class LikeSavingsController {
    private final LikeSavingsService likeSavingsService;
    private final LikeSavingsMapper mapper;

    /**
     * 관심 적금 등록
     * @param memberId
     * @param registerLikeSavingProductReq
     * @return ResponseEntity
     */
    @PostMapping
    public ResponseEntity likeSavingProduct(@Positive @PathVariable("member-id") long memberId,
                                            @Valid @RequestBody RegisterLikeSavingProductReq registerLikeSavingProductReq) {


        LikeSavings likeSavings = likeSavingsService.RegisterInterestInSavings(memberId, mapper.likeSavingProductReqToLikeSavings(registerLikeSavingProductReq));

        return new ResponseEntity(mapper.likeSavingsToLikeSavingsProductRes(likeSavings), HttpStatus.CREATED);
    }

    /**
     * 관심 적금 삭제
     * @param memberId
     * @param interestId
     * @return ResponseEntity
     */
    @DeleteMapping("/{like-saving-id}")
    public ResponseEntity deleteLikeSavingProduct(@Positive @PathVariable("member-id") long memberId,
                                                  @Positive @PathVariable("like-saving-id") long interestId) {

        likeSavingsService.deleteLikeSavingProduct(memberId, interestId);

        return new ResponseEntity("성공적으로 삭제되었습니다.", HttpStatus.OK);
    }
}
