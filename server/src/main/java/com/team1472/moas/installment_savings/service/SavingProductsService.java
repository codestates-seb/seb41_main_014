package com.team1472.moas.installment_savings.service;

import com.team1472.moas.installment_savings.dto.SavingProductRes;
import com.team1472.moas.installment_savings.dto.SavingsFilteringReq;
import com.team1472.moas.installment_savings.repository.InterestRateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SavingProductsService {
    private final InterestRateRepository interestRateRepository;

    public Page<SavingProductRes> findSavingsProducts(Pageable pageable, SavingsFilteringReq filter) {
         Page<SavingProductRes> filteringSavingProducts = interestRateRepository.findFilteringSavingProducts(pageable, filter);

        return filteringSavingProducts;
    }
}
