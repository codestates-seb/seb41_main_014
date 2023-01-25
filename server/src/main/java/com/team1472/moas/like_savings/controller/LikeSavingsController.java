package com.team1472.moas.like_savings.controller;

import com.team1472.moas.like_savings.dto.LikeSavingProductsRes;
import com.team1472.moas.like_savings.dto.RegisterLikeSavingProductReq;
import com.team1472.moas.like_savings.entity.LikeSavings;
import com.team1472.moas.like_savings.mapper.LikeSavingsMapper;
import com.team1472.moas.like_savings.service.LikeSavingsService;
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
@RequestMapping("/api/savings/interest")
@RequiredArgsConstructor
@Validated
@Tag(name = "LikeSavings", description = "관심 적금 API")
public class LikeSavingsController {
    private final LikeSavingsService likeSavingsService;
    private final MemberService memberService;
    private final LikeSavingsMapper mapper;

    /**
     * 관심 적금 등록
     *
     * @param principal
     * @param registerLikeSavingProductReq
     * @return ResponseEntity
     */
    @Operation(summary = "관심 적금 등록")
    @PostMapping
    public ResponseEntity likeSavingProduct(Principal principal, @Valid @RequestBody RegisterLikeSavingProductReq registerLikeSavingProductReq) {

        long memberId = memberService.findMemberId(principal.getName());
        LikeSavings likeSavings = likeSavingsService.RegisterInterestInSavings(memberId, mapper.likeSavingProductReqToLikeSavings(registerLikeSavingProductReq));

        return new ResponseEntity(mapper.likeSavingsToLikeSavingsProductRes(likeSavings), HttpStatus.CREATED);
    }

    /**
     * 관심 적금 삭제
     *
     * @param principal
     * @param interestId
     * @return ResponseEntity
     */
    @Operation(summary = "관심 적금 삭제")
    @DeleteMapping("/{like-saving-id}")
    public ResponseEntity deleteLikeSavingProduct(Principal principal,
                                                  @Positive @PathVariable("like-saving-id") long interestId) {

        long memberId = memberService.findMemberId(principal.getName());
        likeSavingsService.deleteLikeSavingProduct(memberId, interestId);

        return new ResponseEntity("성공적으로 삭제되었습니다.", HttpStatus.OK);
    }

    /**
     * 회원 별 관심 적금 목록 조회
     *
     * @param principal
     * @param page
     * @param size
     * @return
     */
    @Operation(summary = "회원 별 관심 적금 목록 조회")
    @GetMapping
    public ResponseEntity findLikeSavingProducts(Principal principal,
                                                 @Positive @RequestParam(value = "page", required = false, defaultValue = "1") int page,
                                                 @Positive @RequestParam(value = "size", required = false, defaultValue = "10") int size) {

        long memberId = memberService.findMemberId(principal.getName());
        Pageable pageable = PageRequest.of(page - 1, size);
        Page<LikeSavingProductsRes> pageLikeSavingProduct = likeSavingsService.getLikeSavingProducts(memberId, pageable);
        List<LikeSavingProductsRes> likeSavingProducts = pageLikeSavingProduct.getContent();

        return new ResponseEntity(new MultiResponse<>(likeSavingProducts, pageLikeSavingProduct), HttpStatus.OK);
    }
}
