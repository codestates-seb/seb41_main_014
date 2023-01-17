package com.team1472.moas.installment_savings.repository;

import com.team1472.moas.installment_savings.dto.SavingProductRes;
import com.team1472.moas.installment_savings.dto.SavingsFilteringReq;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CustomSavingProductsRepository {
    Page<SavingProductRes> findFilteringSavingProducts(Pageable pageable, SavingsFilteringReq savingsFilteringReq);
}

