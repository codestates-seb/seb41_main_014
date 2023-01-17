package com.team1472.moas.installment_savings.controller;

import com.team1472.moas.installment_savings.dto.SavingProductRes;
import com.team1472.moas.installment_savings.dto.SavingsFilteringReq;
import com.team1472.moas.installment_savings.service.SavingProductsService;
import com.team1472.moas.response.MultiResponse;
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
@RequestMapping("/api/savings")
@RequiredArgsConstructor
@Validated
public class SavingProductsController {
    private final SavingProductsService savingProductsService;

    /**
     * 적금 정보 리스트 필터링 조회
     */
    @PostMapping
    public ResponseEntity searchSavingProducts(@Positive @RequestParam("page") int page,
                                               @Positive @RequestParam("size") int size,
                                               @Valid @RequestBody SavingsFilteringReq savingsFilteringReq) {

        Pageable pageable = PageRequest.of(page - 1, size);
        Page<SavingProductRes> pageSavingProducts = savingProductsService.findSavingsProducts(pageable, savingsFilteringReq);

        List<SavingProductRes> savingProducts = pageSavingProducts.getContent();

        return new ResponseEntity(new MultiResponse<>(savingProducts, pageSavingProducts), HttpStatus.OK);
    }
}

