package com.team1472.moas.like_savings.controller;

import com.team1472.moas.like_savings.dto.LikeSavingProductsRes;
import com.team1472.moas.like_savings.dto.RegisterLikeSavingProductReq;
import com.team1472.moas.like_savings.entity.LikeSavings;
import com.team1472.moas.like_savings.mapper.LikeSavingsMapper;
import com.team1472.moas.like_savings.service.LikeSavingsService;
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
import java.util.List;

@RestController
@RequestMapping("/api/{member-id}/savings/interest")
@RequiredArgsConstructor
@Validated
@Tag(name = "LikeSavings", description = "관심 적금 API")
public class LikeSavingsController {
    private final LikeSavingsService likeSavingsService;
    private final LikeSavingsMapper mapper;

    /**
     * 관심 적금 등록
     *
     * @param memberId
     * @param registerLikeSavingProductReq
     * @return ResponseEntity
     */
    @Operation(summary = "관심 적금 등록")
    @PostMapping
    public ResponseEntity likeSavingProduct(@Positive @PathVariable("member-id") long memberId,
                                            @Valid @RequestBody RegisterLikeSavingProductReq registerLikeSavingProductReq) {


        LikeSavings likeSavings = likeSavingsService.RegisterInterestInSavings(memberId, mapper.likeSavingProductReqToLikeSavings(registerLikeSavingProductReq));

        return new ResponseEntity(mapper.likeSavingsToLikeSavingsProductRes(likeSavings), HttpStatus.CREATED);
    }

    /**
     * 관심 적금 삭제
     *
     * @param memberId
     * @param interestId
     * @return ResponseEntity
     */
    @Operation(summary = "관심 적금 삭제")
    @DeleteMapping("/{like-saving-id}")
    public ResponseEntity deleteLikeSavingProduct(@Positive @PathVariable("member-id") long memberId,
                                                  @Positive @PathVariable("like-saving-id") long interestId) {

        likeSavingsService.deleteLikeSavingProduct(memberId, interestId);

        return new ResponseEntity("성공적으로 삭제되었습니다.", HttpStatus.OK);
    }

    /**
     * 회원 별 관심 적금 목록 조회
     * @param memberId
     * @param page
     * @param size
     * @return
     */
    @Operation(summary = "회원 별 관심 적금 목록 조회")
    @GetMapping
    public ResponseEntity findLikeSavingProducts(@Positive @PathVariable("member-id") long memberId,
                                                 @Positive @RequestParam(value = "page", required = false, defaultValue = "1") int page,
                                                 @Positive @RequestParam(value = "size", required = false, defaultValue = "10") int size) {

        Pageable pageable = PageRequest.of(page - 1, size);
        Page<LikeSavingProductsRes> pageLikeSavingProduct = likeSavingsService.getLikeSavingProducts(memberId, pageable);
        List<LikeSavingProductsRes> likeSavingProducts = pageLikeSavingProduct.getContent();

        return new ResponseEntity(new MultiResponse<>(likeSavingProducts, pageLikeSavingProduct), HttpStatus.OK);
    }
}
